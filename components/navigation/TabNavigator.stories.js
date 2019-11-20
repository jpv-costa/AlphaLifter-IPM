import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs/react";
import Navigator from "./TabNavigator";
import styled from "styled-components";
import { View, Dimensions, Text } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { DashboardExerciseList } from "../List/DashboardExerciseList";
import { DashboardMuscleList } from "../List/DashboardMuscleList";
import { DashboardProgramList } from "../List/DashboardProgramList";

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

const onItemPress = item => {
    console.log("You pressed item '" + item.title + "'");
};

const musclesDashboardData = [
    {
        id: 1,
        muscle: "Chest",
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
            secondaryMuscles: [],
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

const header = ["Programs", "Muscles", "Exercises"];

const content = [
    <DashboardProgramList
        selectedId={1}
        data={programDashboardData}
        selectList
        onItemPress={item =>
            console.log("Selected item with id '" + item.id + "'")
        }
    />,
    <DashboardMuscleList
        selectedId={1}
        data={musclesDashboardData}
        selectList
        onItemPress={item =>
            console.log("Selected item with id '" + item.id + "'")
        }
    />,
    <DashboardExerciseList
        selectedId={1}
        data={exercisesDashboardData}
        selectList
        onItemPress={item =>
            console.log("Selected item with id '" + item.id + "'")
        }
    />
];
