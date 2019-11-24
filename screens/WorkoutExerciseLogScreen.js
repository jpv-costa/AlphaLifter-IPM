import React, { useState } from "react";
import {
    Image,
    Platform,
    StyleSheet,
    SafeAreaView,
    Dimensions,
    Alert
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
        const remainingExercises = navigation.getParam("rest");

        let actionOnPress;
        let buttonText;

        if (remainingExercises.length > 0) {
            buttonText = "Next Exercise";
            actionOnPress = () => {
                this.props.navigation.navigate("Exercise", {
                    name: remainingExercises[0].name,
                    data: {
                        1: remainingExercises[0].configuration["1"]
                    },
                    rest: remainingExercises.slice(1, remainingExercises.length)
                });
            };
        } else {
            actionOnPress = () => {
                Alert.alert(
                    "Are you sure you want to finish the workout?",
                    "",
                    [
                        {
                            text: "Finish",
                            onPress: () =>
                                this.props.navigation.navigate("Library")
                        },
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        }
                    ],
                    { cancelable: true }
                );
            };
            buttonText = "Finish Workout";
        }

        return (
            <View flex={1}>
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
                <View px={4} mb={4}>
                    <ActionButton
                        mt={3}
                        secondaryDark
                        text={buttonText}
                        onPress={actionOnPress}
                    />
                </View>
            </View>
        );
    }
}
