import React from "react";
import { color, space, layout, size, typography, flexbox } from "styled-system";
import {
    Image,
    Platform,
    StyleSheet,
    SafeAreaView,
    Dimensions,
    TouchableHighlight,
    Alert,
    Modal
} from "react-native";
import styled from "styled-components";
import { Icon } from "../components/Icon/Icon";
import { ActionButton } from "../components/button/Button";
import { WorkoutTimer } from "../components/workoutTime/WorkoutTime";
import {
    ConfiguredExerciseList,
    EquipmentTypes
} from "../components/workouts/Exercises/Exercise";


const View = styled.View`
    ${space}
    ${layout}
    ${flexbox}
    ${color}
`;

const Text = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    opacity : ${props => (props.opacity ? props.opacity : 1)};
`;
export default class WorkoutLoggingScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        };
    };

    render() {
        return (
            <View flex={1}>
                <WorkoutTimer
                    onBackPress={() => this.props.navigation.goBack()}
                    startMins={2}
                    startSecs={30}
                    currentWorkout={"Push Workout"}
                />
                <ConfiguredExerciseList
                    selectList
                    data={data}
                    onItemPress={(item, index) => {
                        this.props.navigation.navigate("Exercise", {
                            name: item.name,
                            data: {
                                1: item.configuration["1"]
                            },
                            rest: data.slice(index + 1, data.length)
                        });
                    }}
                />
                <View px={4} mb={4}>
                    <ActionButton
                        mt={3}
                        secondaryDark
                        text='Finish Workout'
                        onPress={() => {
                            Alert.alert(
                                "Are you sure you want to finish the workout?",
                                "",
                                [
                                    {
                                        text: "Finish",
                                        onPress: () =>
                                            this.props.navigation.navigate(
                                                "Library"
                                            )
                                    },
                                    {
                                        text: "Cancel",
                                        onPress: () =>
                                            console.log("Cancel Pressed"),
                                        style: "cancel"
                                    }
                                ],
                                { cancelable: true }
                            );
                        }}
                    />
                </View>
            </View>
        );
    }
}

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
        equipment: EquipmentTypes.dumbbell,
        configuration: {
            1: {
                sets: 1,
                reps: {
                    min: 4,
                    max: 6
                },
                weight: 120,
                RIR: {
                    min: 1,
                    max: 2
                }
            },
            2: {
                sets: 4,
                reps: 5,
                weight: 130,
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
        equipment: EquipmentTypes.cable,
        configuration: {
            1: {
                sets: 3,
                reps: 7,
                weight: 20,
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
        equipment: EquipmentTypes.barbell,
        configuration: {
            1: {
                sets: 2,
                reps: 3,
                weight: 30,
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
        equipment: EquipmentTypes.barbell,
        configuration: {
            1: {
                sets: 1,
                reps: 3,
                weight: 85,
                RIR: {
                    min: 1,
                    max: 2
                }
            },
            2: {
                sets: 4,
                reps: 5,
                weight: 25,
                RIR: {
                    min: 1,
                    max: 3
                }
            }
        }
    }
];
