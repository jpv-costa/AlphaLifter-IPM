import React from "react";
import { AreaChart } from "react-native-svg-charts";
import { View } from "react-native";
import * as shape from "d3-shape";
import { scaleLinear, scaleTime } from "d3-scale";
import Moment from "moment";
import PropTypes from "prop-types";
import theme from "../../theme";
import {
    extendMoment,
    DateRange,
    MomentRangeStaticMethods
} from "moment-range";
const moment = extendMoment(Moment);
import {
    Defs,
    LinearGradient,
    Stop,
    Circle,
    Line,
    G,
    Text
} from "react-native-svg";

export class LineChart extends React.PureComponent {
    render() {
        const { dataTrend, dataPoints, height } = this.props;

        const contentInset = { top: 20, bottom: 20 };
        const axesSvg = { fontSize: 10, fill: "grey" };
        const xAxisHeight = 30;
        const Gradient = ({ index }) => (
            <Defs key={index}>
                <LinearGradient
                    x1='50%'
                    y1='0%'
                    x2='50%'
                    y2='100%'
                    id='gradient'>
                    <Stop stopColor='#CDE3F8' offset='0%' />
                    <Stop stopColor='#eef6fd' offset='100%' stopOpacity={0} />
                </LinearGradient>
            </Defs>
        );

        const Decorator = position => {
            return dataPoints.map((value, index) => (
                <Circle
                    key={index}
                    cx={position.x(index)}
                    cy={position.y(value.y)}
                    r={3}
                    fill={"#007ea7"}
                />
            ));
        };

        const HorizontalGrid = ({ y, height }) => {
            const yBands = scaleLinear().domain([
                0,
                height - contentInset.bottom
            ]);

            const lines = [];

            const ticks = yBands.ticks(3);

            console.log(ticks[0]);

            for (let i = 1; i < ticks.length; i++) {
                lines.push(
                    <G key={`gridline-${i}`}>
                        <Line
                            x1='0'
                            y1={ticks[i]}
                            x2='100%'
                            y2={ticks[i]}
                            stroke='#000'
                            strokeDasharray={[3, 3]}
                            strokeOpacity='0.5'
                            strokeWidth='0.5'
                        />
                        <Text
                            x={3}
                            textAnchor='start'
                            y={ticks[i] + theme.space[3]}
                            fontSize={theme.fontSizes[1]}
                            fill='black'
                            fillOpacity={0.4}>
                            {y.invert(ticks[i]).toFixed(2) + " kg"}
                        </Text>
                    </G>
                );
            }

            return <G>{lines}</G>;
        };

        const numDates = 4;
        const numSamples = dataTrend.length;

        return (
            <View
                style={{
                    height: height,
                    flexDirection: "row"
                }}>
                <AreaChart
                    style={{ flex: 1 }}
                    data={dataTrend}
                    curve={shape.curveBasis}
                    yAccessor={({ item }) => item.y}
                    xScale={scaleTime}
                    animate={true}
                    svg={{
                        stroke: "#00a8e8",
                        fill: "url(#gradient)",
                        strokeWidth: 3
                    }}
                    contentInset={contentInset}>
                    {/* <Grid /> */}
                    {/* {this.drawHorizontalGrid(4)} */}
                    <HorizontalGrid />
                    <Gradient />
                    <Decorator />
                    {/* <XAxis
                        style={{ marginHorizontal: 20, height: xAxisHeight }}
                        data={this.props.dataTrend}
                        scale={scaleTime}
                        formatLabel={(value, index) =>
                            index % Math.floor(numSamples / numDates) == 0
                                ? moment(value).format("MMM Do")
                                : ""
                        }
                        xAccessor={({ item }) => item.date}
                        contentInset={{ left: 20, right: 20 }}
                        svg={axesSvg}
                    /> */}
                </AreaChart>
            </View>
        );
    }
}

LineChart.propTypes = {
    dataPoints: PropTypes.shape({
        date: PropTypes.instanceOf(Date),
        y: PropTypes.number
    }).isRequired,
    dataTrend: PropTypes.shape({
        date: PropTypes.instanceOf(Date),
        y: PropTypes.number
    }).isRequired,
    height: PropTypes.number.isRequired
};
