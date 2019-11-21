import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { WorkoutCard } from "./WorkoutCard";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { SafeAreaView } from "react-native";

const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const onItemPress = item => {
    console.log("You pressed item '" + item.title + "'");
};

storiesOf("Cards", module)
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
    .add("Workout Card", () => (
        <WorkoutCard workoutCardData={workoutCardData} onPress={onItemPress} />
    ));

const workoutCardData = {
    title: "Lower Body Workout",
    mainMuscles: "Main Muscle Groups",
    mainMusclesValue: "Quads and Back",
    value: [
        {
            id: 1,
            title: "Number of Exercises",
            value: "4"
        },

        {
            id: 2,
            title: "Average Duration",
            value: "01:00:30"
        }
    ]
};
