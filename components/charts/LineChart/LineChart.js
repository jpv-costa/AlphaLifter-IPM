import React from "react";
import { XAxis, Grid, AreaChart, G, Line, Text } from "react-native-svg-charts";
import { View } from "react-native";
import * as shape from "d3-shape";
import { scaleLinear, scaleTime } from "d3-scale";
import Moment from "moment";
import theme from "../../theme";
import {
    extendMoment,
    DateRange,
    MomentRangeStaticMethods
} from "moment-range";
const moment = extendMoment(Moment);
import { Defs, LinearGradient, Stop, Circle } from "react-native-svg";

export class LineChart extends React.PureComponent {
    drawHorizontalGrid(ticks, scaleX, scaleY, width, height) {
        const yBands = scaleLinear()
            .domain([1, ticks])
            .range([0, height]);

        const lines = [];

        for (let i = 1; i <= ticks; i++) {
            lines.push(
                <G key={`gridline-${i}`}>
                    <Line
                        x1='0'
                        y1={yBands(i)}
                        x2={width}
                        y2={yBands(i)}
                        stroke='#000'
                        strokeDasharray={[3, 3]}
                        strokeOpacity='0.5'
                        strokeWidth='0.5'
                    />
                    <Text
                        x={3}
                        textAnchor='start'
                        y={yBands(i) + theme.space[4]}
                        fontSize={theme.fontSizes[1]}
                        fill='black'
                        fillOpacity={0.4}>
                        {scaleY.invert(yBands(i)).toFixed(2) + " kg"}
                    </Text>
                </G>
            );
        }

        return <G>{lines}</G>;
    }

    render() {
        const { dataTrend, dataPoints, width, height } = this.props;

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

        const numDates = 4;
        const numSamples = dataTrend.length;

        return (
            <View
                style={{
                    height: height,
                    width: width,
                    flexDirection: "row"
                }}>
                <AreaChart
                    style={{ flex: 1 }}
                    data={dataTrend}
                    curve={shape.curveBasis}
                    yAccessor={({ item }) => item.y}
                    xScale={scaleTime}
                    animate={true}
                    numberOfTicks={4}
                    svg={{
                        stroke: "#00a8e8",
                        fill: "url(#gradient)",
                        strokeWidth: 3
                    }}
                    contentInset={contentInset}>
                    {/* <Grid /> */}
                    {/* {this.drawHorizontalGrid(4)} */}
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
