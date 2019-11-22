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
import { ExerciseLog } from "../components/workouts/logging/ExerciseLog/ExerciseLog";

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

export default class WorkoutExerciseLogScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        };
    };

    render() {
        const { navigation } = this.props;
        return (
            <View>
                <WorkoutTimer
                    onBackPress={() =>
                        this.props.navigation.navigate("Logging")
                    }
                    startMins={2}
                    startSecs={30}
                    currentWorkout={navigation.getParam("name")}
                    style={{ position: "absolute" }}
                />
                <ExerciseLog data={navigation.getParam("data")} />
            </View>
        );
    }
}
