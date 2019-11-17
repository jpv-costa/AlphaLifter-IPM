import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { WorkoutTimer } from "./WorkoutTime";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { SafeAreaView, Alert } from "react-native";

const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

function onPlayPress(){
    Alert.alert("You pressed play");
}

function onMinusPress() {
    Alert.alert("You pressed minus");
}
function onPlusPress() {
    Alert.alert("You pressed plus");
};
function onReplayPress() {
    Alert.alert("You pressed replay");
};

storiesOf("WorkoutPlayer", module)
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
    .add("WorkoutTimer", () => (
        <WorkoutTimer  onMinusPress= {onMinusPress} onPlusPress={onPlusPress} 
        onPlayPress={onPlayPress} onReplayPress= {onReplayPress} data= {data}/>
    ));



    const data = [
        {
            id: "1",
            time: "01:30min",
            percentage: "77",
            elapsed:"00:44:34"
        }
    ];

