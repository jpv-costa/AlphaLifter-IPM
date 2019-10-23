import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import {
    ConfiguredExercise,
    ConfiguredExerciseList,
    EquipmentTypes
} from "./Exercise";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { SafeAreaView } from "react-native";

const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

storiesOf("Exercise", module)
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
    .add("Configured Exercise List", () => (
        <ConfiguredExerciseList data={data} />
    ));

const data = [
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
