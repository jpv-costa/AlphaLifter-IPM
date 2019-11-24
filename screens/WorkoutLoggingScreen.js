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

import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

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
export class WorkoutLoggingScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        };
    };

    paramz = this.props.navigation.state.params;

    render() {
        return (
            <View flex={1}>
                <WorkoutTimer
                    onBackPress={() => this.props.navigation.goBack()}
                    startMins={2}
                    startSecs={30}
                    currentWorkout={this.paramz.workout.title}
                />
                <ConfiguredExerciseList
                    selectList
                    data={this.props.data}
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

const mapStateToProps = (state, ownProps) => {
    let data = [{}];
    console.log("logg mapstatetoprops")
    console.log(ownProps.navigation.state.params.workout.id)
    console.log(state.workouts);
    let workout = state.workouts.filter(w => (w.id == ownProps.navigation.state.params.workout.id))[0];
    console.log(workout);
    for(let i = 1; i<= workout.exercises.length; i++) {
        let exerciseId = state.workouts[workout.id-1].exercises[i-1].id;
        console.log(exerciseId)
        data.push(
            {
                id: exerciseId,
                icon: {
                    primaryMuscles: state.exercises[id-1].primaryMuscles,
                    secondaryMuscles: state.exercises[id-1].secondaryMuscles,
                    view: "front-upper"
                },
                name: state.exercises[id-1].name,
                completed:false,
                estimatedDuration: "+/- 30min",
                equipment: EquipmentTypes.dumbbell,
                configuration:{
                    1:{
                        sets:exercise.targetsets,
                        reps:{
                            min:targetreps1,
                            max:targetreps2
                        },
                        weight:targetweight,
                        RIR:{
                            min:targetrir1,
                            max:targetrir2
                        }
                    }
                }
            });
    }

    return {
        data: data
    };
};

export default connect(mapStateToProps, null)(WorkoutLoggingScreen);