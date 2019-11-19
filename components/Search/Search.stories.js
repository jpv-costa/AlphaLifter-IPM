
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import Search from './Search';
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { SafeAreaView } from "react-native";

const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

storiesOf("Search", module)
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
    .add("SearchBarExercises", () => (
        <Search data = {data} selectList Workouts = {false}/>
    ))
    .add("SearchBarWorkouts",() => (
        <Search data = {workouts} selectList Workouts = {true}/>
    ));

const data = [
    {
        id: 1,
        primaryMuscles: "Chest",
        secondaryMuscles: "Shoulders",
        name: "Bench Press",
        type: "Isolated"
        
    },
    {
        id: 2,
        primaryMuscles: "Back",
        secondaryMuscles: "Bicep",
        name: "Pull up",
        type: "Isolated"
    },
    {
        id: 3,
        primaryMuscles: "Chest",
        secondaryMuscles: "Tricep",
        name: "Push up",
        type : "Isolated"
                         
    },
    {
        id: 4,
        primaryMuscles: "Legs",
        secondaryMuscles: "Lower Back",
        name: "Romanian DeadLift",
        type: "Compound"
                         
    }
];

const workouts = [
    {
        id: 1,
        primaryMuscles: "Chest, Tricep",
        name: "Chest Workout",
        exercises: "3"
        
    },
    {
        id: 2,
        primaryMuscles: "Back, Biceps",
        name: "Back Workout",
        exercises: "4"
    },
    {
        id: 3,
        primaryMuscles: "Chest, Quads, Back",
        name: "Full body",
        exercises: "6"
                         
    },
   
];
