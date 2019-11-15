import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs/react";
import { LineChart } from "./LineChart";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { SafeAreaView, View, Dimensions } from "react-native";
import { getDEMApoints } from "../../../utils";
import { Store, State } from "@sambego/storybook-state";
import Navigator from "../../navigation/TabNavigator";
import { DashboardExerciseList } from "../../List/DashboardExerciseList";
import { DashboardMuscleList } from "../../List/DashboardMuscleList";
import { DashboardProgramList } from "../../List/DashboardProgramList";

const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const { width } = Dimensions.get("window");

storiesOf("Charts", module)
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
    .add("LineChart with DEMA", () => (
        <State store={store}>
            {state => [
                <LineChart
                    dataTrend={getDEMApoints(store.get("chartData"), 7)}
                    dataPoints={store.get("chartData")}
                    height={200}
                />,
                <Navigator width={width} header={header} tabContent={content} />
            ]}
        </State>
    ));

const oneRepMaxes = {
    1: [
        { date: new Date(2018, 10, 10), y: 74.1 },
        { date: new Date(2018, 10, 11), y: 72.7 },
        { date: new Date(2018, 10, 12), y: 73.2 },
        { date: new Date(2018, 10, 13), y: 73.2 },
        { date: new Date(2018, 10, 14), y: 72 },
        { date: new Date(2018, 10, 15), y: 72 },
        { date: new Date(2018, 10, 20), y: 100 },
        { date: new Date(2018, 10, 21), y: 102 },
        { date: new Date(2018, 10, 22), y: 108 },
        { date: new Date(2018, 10, 23), y: 105 },
        { date: new Date(2018, 10, 24), y: 115 },
        { date: new Date(2018, 10, 25), y: 120 }
    ],
    2: [
        { date: new Date(2018, 10, 14), y: 72 },
        { date: new Date(2018, 10, 15), y: 72 },
        { date: new Date(2018, 10, 16), y: 71 },
        { date: new Date(2018, 10, 17), y: 72 },
        { date: new Date(2018, 10, 18), y: 98 },
        { date: new Date(2018, 10, 19), y: 110 },
        { date: new Date(2018, 10, 20), y: 100 },
        { date: new Date(2018, 10, 21), y: 122 },
        { date: new Date(2018, 10, 22), y: 108 },
        { date: new Date(2018, 10, 23), y: 135 },
        { date: new Date(2018, 10, 24), y: 115 },
        { date: new Date(2018, 10, 25), y: 150 }
    ],
    3: [
        { date: new Date(2018, 10, 10), y: 76.1 },
        { date: new Date(2018, 10, 11), y: 72.7 },
        { date: new Date(2018, 10, 12), y: 73.2 },
        { date: new Date(2018, 10, 13), y: 73.2 },
        { date: new Date(2018, 10, 14), y: 72 },
        { date: new Date(2018, 10, 15), y: 72 },
        { date: new Date(2018, 10, 16), y: 73 },
        { date: new Date(2018, 10, 17), y: 72 },
        { date: new Date(2018, 10, 18), y: 98 },
        { date: new Date(2018, 10, 19), y: 110 },
        { date: new Date(2018, 10, 20), y: 100 },
        { date: new Date(2018, 10, 21), y: 102 },
        { date: new Date(2018, 10, 22), y: 108 },
        { date: new Date(2018, 10, 23), y: 105 },
        { date: new Date(2018, 10, 24), y: 115 },
        { date: new Date(2018, 10, 25), y: 120 }
    ]
};

const store = new Store({
    chartData: oneRepMaxes["1"]
});

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
        data={programDashboardData}
        selectList
        onItemPress={item => store.set({ chartData: oneRepMaxes[item.id] })}
    />,
    <DashboardMuscleList
        data={musclesDashboardData}
        selectList
        onItemPress={item => store.set({ chartData: oneRepMaxes[item.id] })}
    />,
    <DashboardExerciseList
        data={exercisesDashboardData}
        selectList
        onItemPress={item => store.set({ chartData: oneRepMaxes[item.id] })}
    />
];
