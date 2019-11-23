import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import Search from "./Search";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { SafeAreaView, Dimensions } from "react-native";
import { DashboardMuscleList } from "../List/DashboardMuscleList";
import { DashboardProgramList } from "../List/DashboardProgramList";

const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const onItemPress = item => {
    console.log("You pressed item '" + item.title + "'");
};

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
    .add("Searchable Muscle List", () => (
        <Search
            mt={0}
            data={musclesDashboardData}
            placeholder={"Type the muscle..."}
            searchProperties={["muscle"]}>
            <DashboardMuscleList
                selectList
                multiselect
                onItemPress={onItemPress}
            />
        </Search>
    ))
    .add("Searchable Exercise List", () => (
        <Search
            mt={0}
            data={exercisesDashboardData}
            placeholder={"Type the exercise..."}
            searchProperties={[
                "name",
                "array@icon.primaryMuscles",
                "array@icon.secondaryMuscles",
                "array@variations"
            ]}>
            <DashboardExerciseList selectList onItemPress={onItemPress} />
        </Search>
    ))
    .add("Searchable Program List", () => (
        <Search
            mt={0}
            data={programDashboardData}
            placeholder={"Type the exercise..."}
            searchProperties={["name"]}>
            <DashboardProgramList selectList onItemPress={onItemPress} />
        </Search>
    ));

const musclesDashboardData = [
    {
        id: 1,
        muscle: "Biceps",
        icon: {
            view: "front-upper"
        }
    },
    {
        id: 2,
        muscle: "Chest",
        icon: {
            view: "front-upper"
        }
    },
    {
        id: 3,
        muscle: "Chest",
        icon: {
            view: "front-upper"
        }
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
        variations: ["Incline, Dumbbell variation"]
    },
    {
        id: 2,
        icon: {
            primaryMuscles: ["biceps"],
            secondaryMuscles: [],
            view: "front-upper"
        },
        name: "Barbell Rows",
        variations: ["Decline, Dumbbell variation"]
    },
    {
        id: 3,
        icon: {
            primaryMuscles: ["abs"],
            secondaryMuscles: [],
            view: "front-upper"
        },
        name: "Shoulder Press",
        variations: ["Standing, Dumbbell variation"]
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
