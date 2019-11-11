import React, { useEffect, useState } from "react";
import { AreaChart } from "react-native-svg-charts";
import { View, Animated, Easing } from "react-native";
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
        const contentInset = { top: 30, bottom: 30, left: -1, right: -1 };
        const yTicks = 3;
        const xTicks = 4;
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

        const Decorator = ({ x, y }) => {
            const opacity = new Animated.Value(0);

            useEffect(() => {
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 300,
                    easing: Easing.ease,
                    useNativeDriver: true
                }).start();
            });

            const AnimatedCircle = Animated.createAnimatedComponent(Circle);

            return dataPoints.map(value => (
                <AnimatedCircle
                    key={value.date}
                    cx={x(value.date)}
                    cy={y(value.y)}
                    r={3}
                    opacity={opacity}
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

            const ticks = yBands.ticks(yTicks);

            for (let i = 0; i < ticks.length; i++) {
                const yCoord = ticks[i] + 2;
                lines.push(
                    <G key={`gridline-${i}`}>
                        <Line
                            x1='0'
                            y1={yCoord}
                            x2='100%'
                            y2={yCoord}
                            stroke='#000'
                            strokeDasharray={[2, 4]}
                            strokeOpacity='0.5'
                            strokeWidth='0.5'
                        />
                        <Text
                            x={3}
                            textAnchor='start'
                            y={yCoord + theme.space[3]}
                            fontSize={theme.fontSizes[1]}
                            fill='black'
                            fillOpacity={0.4}>
                            {y.invert(yCoord).toFixed(0) + " kg"}
                        </Text>
                    </G>
                );
            }

            return <G>{lines}</G>;
        };

        const XAxis = ({ x, width, height }) => {
            const xBands = scaleLinear().domain([0, width]);

            const dates = [];

            const ticks = xBands.ticks(xTicks);

            dates.push(
                <Line
                    x1='0'
                    y1={height}
                    x2='100%'
                    y2={height}
                    stroke='#000'
                    strokeDasharray={[2, 4]}
                    strokeOpacity='0.5'
                    strokeWidth='0.5'
                />
            );

            for (let i = 0; i < ticks.length; i++) {
                const xCoord = ticks[1] / 2 + ticks[i];
                dates.push(
                    <Text
                        key={`date-${i}`}
                        x={xCoord}
                        textAnchor='middle'
                        y={height - theme.space[2]}
                        fontSize={theme.fontSizes[1]}
                        fill='black'
                        fillOpacity={0.4}>
                        {moment(x.invert(xCoord)).format("MMM Do")}
                    </Text>
                );
            }

            return <G>{dates}</G>;
        };

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
                    xAccessor={({ item }) => item.date}
                    xScale={scaleTime}
                    animate={true}
                    svg={{
                        stroke: "#00a8e8",
                        fill: "url(#gradient)",
                        strokeWidth: 3
                    }}
                    contentInset={contentInset}>
                    <HorizontalGrid />
                    <Gradient />
                    <Decorator />
                    <XAxis />
                </AreaChart>
            </View>
        );
    }
}

LineChart.propTypes = {
    dataPoints: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.instanceOf(Date),
            y: PropTypes.number
        })
    ).isRequired,
    dataTrend: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.instanceOf(Date),
            y: PropTypes.number
        })
    ).isRequired,
    height: PropTypes.number.isRequired
};
