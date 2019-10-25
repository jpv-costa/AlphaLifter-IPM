import React from "react";
import { XAxis, Grid, AreaChart } from "react-native-svg-charts";
import { View } from "react-native";
import * as shape from "d3-shape";
import { scaleLinear, scaleTime } from "d3-scale";
import Moment from "moment";
import {
    extendMoment,
    DateRange,
    MomentRangeStaticMethods
} from "moment-range";
const moment = extendMoment(Moment);
import { Defs, LinearGradient, Stop, Circle } from "react-native-svg";

export class LineChart extends React.PureComponent {
    render() {
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
            return this.props.dataPoints.map((value, index) => (
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
        const numSamples = this.props.dataTrend.length;

        return (
            <View style={{ height: this.props.height, flexDirection: "row" }}>
                <AreaChart
                    style={{ flex: 1 }}
                    data={this.props.dataTrend}
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
                    <Grid />
                    <Gradient />
                    <Decorator />
                    <XAxis
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
                    />
                </AreaChart>
            </View>
        );
    }
}
