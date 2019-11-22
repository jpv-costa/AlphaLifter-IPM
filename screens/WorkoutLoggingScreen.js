import React, { useState } from "react";
import {
    Image,
    Platform,
    StyleSheet,
    SafeAreaView,
    Dimensions
} from "react-native";
import styled from "styled-components";
import { color, space, layout, size, typography, flexbox } from "styled-system";
import { Icon } from "../components/Icon/Icon";
import { LibraryProgramCard } from "../components/cards/libraryProgramCard/LibraryProgramCard";
import { RoundCornersButton } from "../components/button/Button";
import { ActionButton } from "../components/button/Button";
import { WorkoutTimer } from "../components/workoutTime/WorkoutTime";
import { ExerciseLog } from "../components/workouts/logging/ExerciseLog/ExerciseLog"

const { width } = Dimensions.get("window");

const ScrollView = styled.ScrollView`
    ${space}
    ${layout}
    ${flexbox}
    ${color}
`;

const TouchableOpacity = styled.TouchableOpacity`
    ${space}
    ${layout}
    ${flexbox}
    ${color}
`;

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
            headerTitle: "Library",
            headerRight: (
                <TouchableOpacity mr={4}>
                    <Icon id={"search"} size={18} fill={"#000"} opacity={0.7} />
                </TouchableOpacity>
            ),
            headerLeft: (
                <TouchableOpacity ml={4}>
                    <Icon id={"plus"} size={18} fill={"#000"} opacity={0.7} />
                </TouchableOpacity>
            )
        };
    };

    render() {
        return (
            <View>
                <WorkoutTimer startMins={2} startSecs={30} />
                <ExerciseLog data={workoutData} />
            </View>
        );
    }
}

const workoutData = {
    1: {
        sets: 3,
        weight: 120,
        reps: {
            min: 6,
            max: 8
        },
        rpe: {
            min: 1,
            max: 3
        }
    }
};