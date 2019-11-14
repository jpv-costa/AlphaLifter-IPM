import React, { useEffect } from "react";
import { AreaChart } from "react-native-svg-charts";
import { View, Animated, Easing, TextInput } from "react-native";
import * as shape from "d3-shape";
import { scaleLinear, scaleTime, scaleQuantile } from "d3-scale";
import Moment from "moment";
import * as pathProperties from "svg-path-properties";
import PropTypes from "prop-types";
import theme from "../../theme";
import { extendMoment } from "moment-range";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { clamp } from "../../../utils";
import { Card } from "../../atoms";
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

const dateFormat = "MMM Do";

export class LineChart extends React.PureComponent {
  _touchX = new Animated.Value(0);
  _tooltip = React.createRef();
  _label = React.createRef();
  _verticalLine = React.createRef();
  _onPanGestureEvent = Animated.event([{ nativeEvent: { x: this._touchX } }], {
    useNativeDriver: true
  });

  _onHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      this._tooltip.current.setNativeProps({ opacity: 0 });
      this._verticalLine.current.setNativeProps({ opacity: 0 });
    } else {
      this._verticalLine.current.setNativeProps({ opacity: 1 });
    }
  };

  render() {
    const { dataTrend, dataPoints, height } = this.props;
    const contentInset = {
      top: 30,
      bottom: 30,
      left: -1,
      right: -1
    };
    const yTicks = 3;
    const xTicks = 4;
    const Gradient = ({ index }) => (
      <Defs key={index}>
        <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gradient">
          <Stop stopColor="#CDE3F8" offset="0%" />
          <Stop stopColor="#eef6fd" offset="100%" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    );

    const AnimatedCircle = Animated.createAnimatedComponent(Circle);

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
      const yBands = scaleLinear().domain([0, height - contentInset.bottom]);

      const lines = [];

      const ticks = yBands.ticks(yTicks);

      for (let i = 0; i < ticks.length; i++) {
        const yCoord = ticks[i] + 2;
        lines.push(
          <G key={`gridline-${i}`}>
            <Line
              x1="0"
              y1={yCoord}
              x2="100%"
              y2={yCoord}
              stroke="#000"
              strokeDasharray={[2, 4]}
              strokeOpacity="0.5"
              strokeWidth="0.5"
            />
            <Text
              x={3}
              textAnchor="start"
              y={yCoord + theme.space[3]}
              fontSize={theme.fontSizes[1]}
              fill="black"
              fillOpacity={0.4}
            >
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
          x1="0"
          y1={height}
          x2="100%"
          y2={height}
          stroke="#000"
          strokeDasharray={[2, 4]}
          strokeOpacity="0.5"
          strokeWidth="0.5"
        />
      );

      for (let i = 0; i < ticks.length; i++) {
        const xCoord = ticks[1] / 2 + ticks[i];
        dates.push(
          <Text
            key={`date-${i}`}
            x={xCoord}
            textAnchor="middle"
            y={height - theme.space[2]}
            fontSize={theme.fontSizes[1]}
            fill="black"
            fillOpacity={0.4}
          >
            {moment(x.invert(xCoord)).format(dateFormat)}
          </Text>
        );
      }

      return <G>{dates}</G>;
    };

    const Tooltip = ({ width, path }) => {
      let cardWidth = 0;

      moveTooltip = x => {
        this._tooltip.current &&
          this._tooltip.current.setNativeProps({
            top: 10,
            left: clamp(x - cardWidth / 2, 3, width - cardWidth - 3),
            opacity: 1
          });
        this._tooltip.current &&
          setLabel(scaleLabelDate(x), scaleLabelValue(x));
      };

      setNativeProps = nativeProps => {
        this._tooltip.setNativeProps(nativeProps);
      };

      const scaleLabelDate = scaleQuantile()
        .domain([0, width])
        .range(dataPoints.map(d => moment(d.date).format(dateFormat)));

      const scaleLabelValue = scaleQuantile()
        .domain([0, width])
        .range(dataPoints.map(d => d.y));

      setLabel = (title, value) => {
        this._label.current &&
          this._label.current.setNativeProps({
            text: formatLabel(title, value, "kg")
          });
      };

      formatLabel = (title, value, unit) => {
        return value && unit ? `${title} • ${value} ${unit}` : title;
      };

      useEffect(() => {
        this._touchX.addListener(({ value }) => moveTooltip(value));
        moveTooltip(0);

        return () => {
          this._touchX.removeAllListeners();
        };
      });

      const AnimatedLine = Animated.createAnimatedComponent(Line);

      return (
        <G>
          <AnimatedLine
            ref={this._verticalLine}
            x1={0}
            y1="0%"
            x2={0}
            y2="100%"
            stroke="#000"
            strokeDasharray={[2, 4]}
            strokeOpacity="0.5"
            strokeWidth="0.5"
            style={{
              transform: [
                {
                  translateX: this._touchX
                }
              ]
            }}
          />
          <Card
            ref={this._tooltip}
            bg={"white.1"}
            py={2}
            px={3}
            onLayout={evt => {
              cardWidth = evt.nativeEvent.layout.width;
            }}
          >
            <TextInput
              ref={this._label}
              style={{ opacity: 0.5 }}
              editable={false}
            />
          </Card>
        </G>
      );
    };

    return (
      <PanGestureHandler
        onGestureEvent={this._onPanGestureEvent}
        onHandlerStateChange={this._onHandlerStateChange}
      >
        <Animated.View
          style={{
            height: height,
            flexDirection: "row"
          }}
        >
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
            contentInset={contentInset}
          >
            <HorizontalGrid />
            <Gradient />
            <Decorator />
            <XAxis />
            <Tooltip />
          </AreaChart>
        </Animated.View>
      </PanGestureHandler>
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
