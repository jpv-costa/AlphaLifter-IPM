import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { LineChart } from "./LineChart";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { SafeAreaView, View } from "react-native";
import { getDEMApoints } from "../../../utils";
import { Store, State } from "@sambego/storybook-state";
import { Text, Dimensions } from "react-native";
import {
    ConfiguredExercise,
    ConfiguredExerciseList,
    EquipmentTypes
} from "../../workouts/Exercises/Exercise";

const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

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
                <ConfiguredExerciseList
                    data={exerciseList}
                    selectList
                    onItemPress={item =>
                        store.set({ chartData: oneRepMaxes[item.id] })
                    }
                />
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
    ],
    4: [
        { date: new Date(2018, 10, 10), y: 75.1 },
        { date: new Date(2018, 10, 11), y: 72.7 },
        { date: new Date(2018, 10, 12), y: 73.2 },
        { date: new Date(2018, 10, 13), y: 73.2 },
        { date: new Date(2018, 10, 14), y: 72 },
        { date: new Date(2018, 10, 15), y: 72 },
        { date: new Date(2018, 10, 16), y: 73 },
        { date: new Date(2018, 10, 17), y: 76 },
        { date: new Date(2018, 10, 23), y: 125 },
        { date: new Date(2018, 10, 24), y: 155 },
        { date: new Date(2018, 10, 25), y: 130 }
    ]
};

const store = new Store({
    chartData: oneRepMaxes["1"]
});

const exerciseList = [
    {
        id: 1,
        name: "Bench Press",
        completed: true,
        estimatedDuration: "+/- 30min",
        equipment: EquipmentTypes.dumbbell,
        configuration: {
            1: {
                sets: 1,
                reps: {
                    min: 4,
                    max: 6
                },
                intensity: 0.8725,
                RIR: {
                    min: 1,
                    max: 2
                }
            },
            2: {
                sets: 4,
                reps: 5,
                intensity: 0.825,
                RIR: {
                    min: 1,
                    max: 3
                }
            }
        }
    },
    {
        id: 2,
        name: "Lateral Raises",
        completed: false,
        estimatedDuration: "+/- 22min",
        equipment: EquipmentTypes.cable,
        configuration: {
            1: {
                sets: 3,
                reps: 7,
                intensity: 0.75,
                RIR: {
                    min: 1,
                    max: 4
                }
            }
        }
    },
    {
        id: 3,
        name: "Row",
        completed: false,
        estimatedDuration: "+/- 14min",
        equipment: EquipmentTypes.barbell,
        configuration: {
            1: {
                sets: {
                    min: 3,
                    max: 4
                },
                reps: 3,
                intensity: 0.85,
                RIR: {
                    min: 1,
                    max: 2
                }
            }
        }
    },
    {
        id: 4,
        name: "Back Squat",
        completed: false,
        estimatedDuration: "+/- 19min",
        equipment: EquipmentTypes.barbell,
        configuration: {
            1: {
                sets: 1,
                reps: 3,
                intensity: 0.85,
                RIR: {
                    min: 1,
                    max: 2
                }
            },
            2: {
                sets: 4,
                reps: 5,
                intensity: 0.825,
                RIR: {
                    min: 1,
                    max: 3
                }
            }
        }
    }
];
