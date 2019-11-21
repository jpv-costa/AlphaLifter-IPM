import React from "react";
import { View, Animated, ScrollView, Image, Dimensions } from "react-native";
import styled from "styled-components";
import { layout, color, space } from "styled-system";
import { typography } from "@storybook/theming";

const { width } = Dimensions.get("window");

export default class Navigator extends React.Component {
    state = {
        translateX: new Animated.Value(0),
        currentTab: 0,
        tabXs: []
    };

    handleSlide = targetTabIdx => {
        let { translateX } = this.state;

        Animated.spring(translateX, {
            toValue: this.state.tabXs[targetTabIdx],
            duration: 100,
            useNativeDriver: true
        }).start();
    };

    render() {
        let { translateX } = this.state;

        const { width, header, tabContent } = this.props;

        return (
            <TabNavContainer width={width}>
                <TabNavHeader>
                    <TabUnderline
                        bg={"secondaryShades.0"}
                        width={width / header.length}
                        style={{
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
                                key={title}
                                onLayout={event => {
                                    this.state.tabXs[idx] =
                                        event.nativeEvent.layout.x;
                                }}
                                onPress={() => {
                                    this.handleSlide(idx);
                                    this.setState({
                                        currentTab: idx
                                    });
                                }}>
                                <Text color={"secondaryShades.0"} fontSize={2}>
                                    {title}
                                </Text>
                            </Tab>
                        );
                    })}
                </TabNavHeader>
                {tabContent[this.state.currentTab]}
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
    position: relative;
    border-style: solid;
    border-bottom-color: #bbb;
    border-bottom-width: 1px;
`;

const TabUnderline = styled(Animated.View)`
  ${color}
  ${layout}
  ${space}
  position: absolute;
  width: ${props => props.width};
  height: 2;
  bottom: 0;
  left: 0;
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
