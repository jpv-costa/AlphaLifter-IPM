import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs/react";
import Navigator from "./MainTabNavigator";
import styled from "styled-components";
import { View, Dimensions, Text } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const width = Dimensions.get("window").width;

storiesOf("Navigation", module)
  // The ThemeProvider feeds the theme options to the components scope
  // (therefore the component can use them),
  // and centers the component in the screen
  .addDecorator(story => (
    <ThemeProvider theme={theme}>
      <CenteredView>{story()}</CenteredView>
    </ThemeProvider>
  ))
  .addDecorator(withKnobs)
  .add("Tab Navigator", () => (
    <Navigator width={width} header={header} tabContent={content} />
  ));

const header = ["Programs", "Muscles", "Exercises"];

const content = [
  <View>
    <Text>Hi, I am a cute cat</Text>
    <View style={{ marginTop: 20 }}></View>
  </View>,
  <View>
    <Text>Hi, I am a cute dog</Text>
    <View style={{ marginTop: 20 }}></View>
  </View>,
  <View>
    <Text>Hi, I am a cute rabbit</Text>
    <View style={{ marginTop: 20 }}></View>
  </View>
];
