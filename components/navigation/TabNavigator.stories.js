import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs/react";
import { tabNavigator } from "./MainTabNavigator";
import styled from "styled-components";
import { View } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

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
  .add("Tab Navigator", () => <View>{tabNavigator}</View>);
