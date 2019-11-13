import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { Icon } from "./Icon";
import { MuscleIcon } from "./MuscleIcon";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

storiesOf("Icons", module)
  // The ThemeProvider feeds the theme options to the components scope
  // (therefore the component can use them),
  // and centers the component in the screen
  .addDecorator(story => (
    <ThemeProvider theme={theme}>
      <CenteredView>{story()}</CenteredView>
    </ThemeProvider>
  ))
  .addDecorator(withKnobs)
  .add("Icon Component", () => (
    <Icon
      id={object("id", "dumbbell")}
      size={object("size", 80)}
      fill={object("fill", "#4C5C62")}
    />
  ))
  .add("Muscle Icon", () => (
    <MuscleIcon
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
      size={object("size", 340)}
      view={object("view", "front-upper")}
    />
  ));

const primaryMuscles = ["chest", "abs"];
const secondaryMuscles = ["biceps", "obliques"];
