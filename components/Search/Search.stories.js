
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import {Search} from './Search';
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
    .add("SearchBar", () => (
        <Search data = {data} />
    ));

const data = [
    {
        id: 1,
        icon: {
            primaryMuscles: ["chest"],
            secondaryMuscles: ["abs"],
            view: "front-upper"
        },
        name: "Bench Press",
        completed: true,
        estimatedDuration: "+/- 30min",
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
        icon: {
            primaryMuscles: ["chest"],
            secondaryMuscles: ["abs"],
            view: "front-upper"
        },
        name: "Lateral Raises",
        completed: false,
        estimatedDuration: "+/- 22min",
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
        icon: {
            primaryMuscles: ["chest"],
            secondaryMuscles: ["abs"],
            view: "front-upper"
        },
        name: "Row",
        completed: false,
        estimatedDuration: "+/- 14min",
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
        icon: {
            primaryMuscles: ["chest"],
            secondaryMuscles: ["abs"],
            view: "front-upper"
        },
        name: "Back Squat",
        completed: false,
        estimatedDuration: "+/- 19min",
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
