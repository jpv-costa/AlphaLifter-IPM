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
import Search from "../components/Search/Search";
import { DashboardProgramList } from "../components/List/DashboardProgramList";
import { DashboardWorkoutList } from "../components/List/DashboardWorkoutList";
import { DashboardExerciseList } from "../components/List/DashboardExerciseList";
import { ActionButton } from "../components/button/Button";

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

export default class ReOrderScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        };
    };

    render() {
        const { navigation } = this.props;

        const type = navigation.getParam("type");

        let data;
        let placeholder;
        let searchProperties;
        let listType;

        console.log(type);

        if (type === "program") {
            data = programData;
            placeholder = "Type program name...";
            searchProperties = ["name"];
            listType = (
                <DashboardProgramList
                    selectList
                    onItemPress={() => console.log("selected")}
                />
            );
        }

        if (type === "workout") {
            data = workoutData;
            placeholder = "Type workout name...";
            searchProperties = ["name, muscles"];
            listType = (
                <DashboardWorkoutList
                    selectList
                    onItemPress={() => console.log("selected")}
                />
            );
        }

        if (type === "exercises") {
            data = exercisesDashboardData;

            placeholder = "Type exercise name...";
            searchProperties = [
                "name",
                "array@icon.primaryMuscles",
                "array@icon.secondaryMuscles",
                "array@variations"
            ];

            listType = (
                <DashboardExerciseList
                    selectList
                    multiselect
                    onItemPress={() => console.log("selected")}
                />
            );
        }
        // console.log(data);

        return (
            <View style={{ flex: 1 }}>
                <Search
                    key={type}
                    mt={5}
                    style={{ flex: 1 }}
                    data={data}
                    placeholder={placeholder}
                    searchProperties={searchProperties}>
                    {listType}
                </Search>
                <View px={4} mb={4}>
                    <ActionButton
                        mt={3}
                        secondaryDark
                        text='Next'
                        onPress={() => {
                            if (type == "exercise") {
                                //navigate to exercise page
                                // this.props.navigation.navigate("CycleSelection")
                            } else {
                                this.props.navigation.navigate(
                                    "CycleSelection"
                                );
                            }
                        }}
                    />
                </View>
            </View>
        );
    }
}

const programData = [
    {
        id: 1,
        name: "High Volume Program",
        isCurrent: true,
        cycles: 5,
        workouts: 5
    },
    {
        id: 2,
        name: "Low Volume Program",
        isCurrent: false,
        cycles: 4,
        workouts: 3
    },
    {
        id: 3,
        name: "High Volume Program",
        isCurrent: false,
        cycles: 5,
        workouts: 5
    }
];

const workoutData = [
    {
        id: 1,
        name: "Chest Flex",
        isCurrent: true,
        exercises: 3,
        muscles: "Chest, Shoulders"
    },
    {
        id: 2,
        name: "Chest Build",
        isCurrent: false,
        exercises: 3,
        muscles: "Chest, Triceps"
    },
    {
        id: 3,
        name: "Chest Strech",
        isCurrent: false,
        exercises: 5,
        muscles: "Chest, Shoulders"
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
