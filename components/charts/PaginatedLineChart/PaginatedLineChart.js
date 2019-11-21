import React from "react";
import { TouchableOpacity } from "react-native";
import Moment from "moment";
import { extendMoment } from "moment-range";
import styled from "styled-components";
import { Icon } from "../../Icon/Icon";
import { color, flexbox, space, layout, typography, size } from "styled-system";
import { extent } from "d3-array";
const moment = extendMoment(Moment);
import { LineChart } from "../LineChart/LineChart";

const dateFormat = "MMM Do";

const View = styled.View`
    ${space}
    ${layout}
`;

const Text = styled.Text`
    ${space}
    ${layout}
    ${flexbox}
    ${color}
    ${typography}
    ${size}
    opacity : ${props => (props.opacity ? props.opacity : 1)};
`;

const NavContainer = styled.View`
    ${space}
    ${layout}
    ${color}
    ${flexbox}
    flex-direction: row;
`;

const addDays = (date, days) => {
    let newDate = new Date(date.valueOf());
    newDate.setDate(date.getDate() + days);
    return newDate;
};

export class PaginatedLineChart extends React.PureComponent {
    state = {
        pageNumber: 1
    };

    getDateRange(inputDates) {
        const minDate = moment.min(inputDates);
        const maxDate = moment.max(inputDates);

        return moment.range(minDate, maxDate);
    }

    orderByDate(dataSet) {
        dataSet.sort(function(a, b) {
            return a.date - b.date;
        });
    }

    getPointsBetween(points, minDate, maxDate) {
        const result = [];

        for (let i = 0; i < points.length; i++) {
            if (points[i].date >= minDate && points[i].date <= maxDate) {
                result.push(points[i]);
            }
        }

        return result;
    }

    getDates(data) {
        const inputDates = data.map(d => moment(d.date));
        const dates = this.getDateRange(inputDates);
        return Array.from(dates.by("day")).map(date => date.toDate());
    }

    getHeadPoint(points, maxDate) {
        for (let i = points.length - 1; i >= 0; i--) {
            if (points[i].date < maxDate) {
                return points[i];
            }
        }
        return null;
    }

    getTailPoint(points, minDate) {
        for (let i = 0; i < points.length; i++) {
            if (points[i].date > minDate) {
                return points[i];
            }
        }
        return null;
    }

    fillMissingDays(datesRange, inputDates, inputValues) {
        const result = [];
        const datesArray = Array.from(datesRange.by("day"));

        datesArray.forEach(date => {
            let value = null;

            if (inputDates.includes(date.toString())) {
                value = inputValues[inputDates.indexOf(date.toString())];
            }

            result.push({
                date: date.toDate(),
                y: value
            });
        });

        return result;
    }

    processDataPoints(data, minDate, maxDate) {
        const inputDates = data.map(d => moment(d.date));
        const dates = this.getDateRange([moment(minDate), moment(maxDate)]);

        return this.fillMissingDays(
            dates,
            inputDates.map(d => d.toString()),
            data.map(d => d.y)
        );
    }

    render() {
        const { dataTrendFunction, dataPoints, height, pageSize } = this.props;
        //TODO: improve performance later by only calculating datatrend of the current page
        this.orderByDate(dataPoints);
        const data = dataPoints;
        const xExtent = extent(dataPoints, point => point.date);

        //TODO: component will update, if datapoints is different, reset state

        const trend = dataTrendFunction(dataPoints);

        const endDate = addDays(
            xExtent[1],
            -pageSize * (this.state.pageNumber - 1)
        );
        const startDate = addDays(endDate, -pageSize + 1);

        const head = this.getHeadPoint(trend, startDate);
        const tail = this.getTailPoint(trend, endDate);

        const handleNextPage = () => {
            if (startDate > xExtent[0]) {
                this.setState(previousState => ({
                    pageNumber: previousState.pageNumber + 1
                }));
            }
        };

        const handlePreviousPage = () => {
            if (this.state.pageNumber > 1) {
                this.setState(previousState => ({
                    pageNumber: previousState.pageNumber - 1
                }));
            }
        };

        const slicedTrend = this.getPointsBetween(trend, startDate, endDate);

        const slicedPoints = this.getPointsBetween(data, startDate, endDate);
        if (head == null) {
            slicedTrend.unshift({
                date: addDays(startDate, -1),
                y: slicedTrend[0].y
            });
        } else {
            slicedTrend.unshift(head);
        }

        if (tail == null) {
            slicedTrend.push({
                date: addDays(endDate, 1),
                y: slicedTrend[slicedTrend.length - 1].y
            });
        } else {
            slicedTrend.push(tail);
        }

        return (
            <View style={{ width: "100%" }}>
                {addDays(xExtent[1], -pageSize) > xExtent[0] && (
                    <NavContainer
                        mb={3}
                        mx={3}
                        justifyContent={"space-between"}
                        alignItems='center'>
                        <TouchableOpacity
                            disabled={startDate <= xExtent[0]}
                            onPress={handleNextPage}
                            style={{
                                opacity: startDate <= xExtent[0] ? 0.25 : 1
                            }}>
                            <Icon id='chevron-left' size={20} fill='#555' />
                        </TouchableOpacity>
                        <Text opacity={0.5} fontSize={2}>
                            {moment(startDate).format(dateFormat) +
                                " - " +
                                moment(endDate).format(dateFormat)}
                        </Text>
                        <TouchableOpacity
                            onPress={handlePreviousPage}
                            disabled={this.state.pageNumber <= 1}
                            style={{
                                opacity: this.state.pageNumber <= 1 ? 0.25 : 1
                            }}>
                            <Icon id='chevron-right' size={20} fill='#555' />
                        </TouchableOpacity>
                    </NavContainer>
                )}
                <LineChart
                    dataTrend={slicedTrend}
                    dataPoints={this.processDataPoints(
                        slicedPoints,
                        startDate,
                        endDate
                    )}
                    xMin={addDays(startDate, -1)}
                    xMax={addDays(endDate, 1)}
                    height={height}
                />
            </View>
        );
    }
}
