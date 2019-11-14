import React from "react";
import { View, Animated, ScrollView, Image, Dimensions } from "react-native";
import styled from "styled-components";
import { layout, color, space } from "styled-system";
import { typography } from "@storybook/theming";

const { width } = Dimensions.get("window");

export default class Navigator extends React.Component {
  state = {
    currentTab: 0,
    tabXs: [],
    translateX: new Animated.Value(0),
    translateXTabs: [],
    translateY: -1000
  };

  handleSlide = targetTabIdx => {
    let { translateX, previousTab } = this.state;

    Animated.spring(translateX, {
      toValue: this.state.tabXs[targetTabIdx],
      duration: 100,
      useNativeDriver: true
    }).start();

    // if (this.state.translateXTabs[targetTabIdx]._value > 0) {
    //   Animated.parallel([
    //     Animated.spring(this.state.translateXTabs[previousTab], {
    //       toValue: -width,
    //       duration: 100,
    //       useNativeDriver: true
    //     }).start(),
    //     Animated.spring(this.state.translateXTabs[targetTabIdx], {
    //       toValue: 0,
    //       duration: 100,
    //       useNativeDriver: true
    //     }).start()
    //   ]);
    // } else {
    //   Animated.parallel([
    //     Animated.spring(this.state.translateXTabs[previousTab], {
    //       toValue: width,
    //       duration: 100,
    //       useNativeDriver: true
    //     }).start(),
    //     Animated.spring(this.state.translateXTabs[targetTabIdx], {
    //       toValue: 0,
    //       duration: 100,
    //       useNativeDriver: true
    //     }).start()
    //   ]);
    // }

    this.setState({
      previousTab: targetTabIdx
    });
  };

  render() {
    let { translateX, translateY } = this.state;

    const { width, header, tabContent } = this.props;

    tabContent.map((item, idx) => {
      if (idx == 0) {
        this.state.translateXTabs.push(new Animated.Value(0));
      } else {
        this.state.translateXTabs.push(new Animated.Value(width));
      }
    });

    return (
      <TabNavContainer width={width}>
        <TabNavHeader>
          <Animated.View
            style={{
              position: "absolute",
              width: width / header.length,
              height: 2,
              bottom: 0,
              left: 0,
              backgroundColor: "#007aff",
              transform: [
                {
                  translateX
                }
              ]
            }}
          />
          {header.map((title, idx) => {
            return (
              <Tab
                onLayout={event => {
                  this.state.tabXs[idx] = event.nativeEvent.layout.x;
                }}
                onPress={() => {
                  this.handleSlide(idx);
                  this.setState({
                    currentTab: idx
                  });
                }}
              >
                <Text color={"secondaryShades.0"} fontSize={2}>
                  {title}
                </Text>
              </Tab>
            );
          })}
        </TabNavHeader>
        <Animated.View>{tabContent[this.state.currentTab]}</Animated.View>
      </TabNavContainer>
    );
  }
}

const Text = styled.Text`
  ${space}
  ${layout}
  ${color}
  ${typography}
`;

const TabNavContainer = styled.View`
  flex: 1;
  width: ${props => props.width};
  margin-left: auto;
  margin-right: auto;
`;

const TabNavHeader = styled.View`
  flex-direction: row;
  margin-top: 40;
  margin-bottom: 20;
  position: relative;
`;

const Tab = styled.TouchableOpacity`
  ${space}
  ${layout}
  ${color}
  justify-content: center;
  align-items: center;
  flex: 1;
`;

Tab.defaultProps = {
  px: 3,
  py: 3
};
