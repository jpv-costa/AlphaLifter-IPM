import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs/react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme";
import { ExerciseLog } from "./ExerciseLog";
import { SafeAreaView } from "react-native";

const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

storiesOf("Lists", module)
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
    .add("ExerciseLog", () => <ExerciseLog data={data} />);

const data = {
    1: {
        sets: 3,
        weight: 120,
        reps: {
            min: 6,
            max: 8
        },
        rpe: {
            min: 1,
            max: 3
        }
    }
};
