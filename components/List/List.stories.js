import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { List } from "./List";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { DashboardMuscleList } from "./DashboardMuscleList";
import { DashboardExerciseList } from "./DashboardExerciseList";
import { DashboardProgramList } from "./DashboardProgramList";
import { SafeAreaView } from "react-native";

const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const onItemPress = item => {
    console.log("You pressed item '" + item.title + "'");
};

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
    .add("List", () => (
        <List data={data} selectList onItemPress={onItemPress} />
    ))
    .add("Multi-Select List", () => (
        <List data={data} selectList multiselect onItemPress={onItemPress} />
    ))
    .add("Numbered Bullet List", () => (
        <List data={data} selectList onItemPress={onItemPress} numberedBullet />
    ))
    .add("Dashboard Program List", () => (
        <DashboardProgramList
            data={programDashboardData}
            selectList
            onItemPress={onItemPress}
        />
    ))
    .add("Dashboard Exercises List", () => (
        <DashboardExerciseList
            data={exercisesDashboardData}
            selectList
            onItemPress={onItemPress}
        />
    ))
    .add("Dashboard Muscles List", () => (
        <DashboardMuscleList
            data={musclesDashboardData}
            selectList
            onItemPress={onItemPress}
        />
    ));

const data = [
    {
        id: 1,
        icon: { id: "dumbbell" },
        title: "Lorem ipsum",
        extraInfo: "10min",
        description:
            "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {
        id: 2,
        icon: { id: "dumbbell" },
        title: "Ut labore et",
        extraInfo: "10min",
        description:
            "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
    },
    {
        id: 3,
        icon: { id: "dumbbell" },
        title: "Exercitation ullamco laboris nisi",
        extraInfo: "10min",
        description:
            "Ut aliquip ex ea commodo consequat. Duis aute irure dolor in"
    },
    {
        id: 4,
        icon: { id: "dumbbell" },
        title: "Reprehenderit in voluptate",
        extraInfo: "10min",
        description:
            "Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint"
    }
];

const musclesDashboardData = [
    {
        id: 1,
        muscle: "Biceps",
        icon: {
            view: "front-upper"
        },
        progress: "5%"
    },
    {
        id: 2,
        muscle: "Chest",
        icon: {
            view: "front-upper"
        },
        progress: "7%"
    },
    {
        id: 3,
        muscle: "Chest",
        icon: {
            view: "front-upper"
        },
        progress: "7%"
    }
];

const exercisesDashboardData = [
    {
        id: 1,
        icon: {
            primaryMuscles: ["chest"],
            secondaryMuscles: ["biceps"],
            view: "front-upper"
        },
        name: "Bench Press",
        variations: ["Incline, Dumbbell variation"],
        progress: "10%"
    },
    {
        id: 2,
        icon: {
            primaryMuscles: ["chest"],
            secondaryMuscles: [],
            view: "front-upper"
        },
        name: "Bench Press",
        variations: ["Incline, Dumbbell variation"],
        progress: "10%"
    },
    {
        id: 3,
        icon: {
            primaryMuscles: ["chest"],
            secondaryMuscles: [],
            view: "front-upper"
        },
        name: "Bench Press",
        variations: ["Incline, Dumbbell variation"],
        progress: "10%"
    }
];

const programDashboardData = [
    {
        id: 1,
        name: "High Volume Program",
        isCurrent: true,
        cycles: 5,
        workouts: 5,
        progress: "5%"
    },
    {
        id: 2,
        name: "Low Volume Program",
        isCurrent: false,
        cycles: 4,
        workouts: 3,
        progress: "7%"
    },
    {
        id: 3,
        name: "High Volume Program",
        isCurrent: false,
        cycles: 5,
        workouts: 5,
        progress: "5%"
    }
];
