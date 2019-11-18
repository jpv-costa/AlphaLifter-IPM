import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import {SingleInput} from "../InputQuestions/InputQuestions";
import {RangeInput} from "../InputQuestions/InputRanges";
import { SafeAreaView } from "react-native";

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

storiesOf("Inputs", module)
    // The ThemeProvider feeds the theme options to the components scope
    // (therefore the component can use them),
    // and centers the component in the screen
  .addDecorator(story => (
    <SafeAreaView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
            <CenteredView>{story()}</CenteredView>
        </ThemeProvider>
    </SafeAreaView>
  ))
  .addDecorator(withKnobs)
  .add("Single Input", () => (
  <SingleInput question = {question} placeholder = {placeholder} units = {units}/> 
  ))
  .add("Range Input", () => (
  <RangeInput question = {rangeEnter} placeholder1 = {placeholder1} rangeDivision = {rangeDivision} placeholder2 = {placeholder2}/> 
    ));


  const question = "What should be the increase per cycle?"

  const placeholder = "2.5"

  const units = "Kg"

  const rangeEnter = "Enter the RIR range "

  const placeholder1 = "1"

  const placeholder2 = "2"

  const rangeDivision = "-"




       