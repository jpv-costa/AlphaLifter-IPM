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

export default class LibraryScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Library",
            headerRight: (
                <TouchableOpacity mr={4}>
                    <Icon id={"plus"} size={18} fill={"#000"} opacity={0.7} />
                </TouchableOpacity>
            )
        };
    };

    render() {
        return (
            <React.Fragment>
                <ScrollView>
                    <View px={4} mt={4}>
                        <View
                            flexDirection='row'
                            justifyContent='space-between'>
                            <Text fontSize={3} opacity={0.7} fontWeight='bold'>
                                Training Programs
                            </Text>
                            <RoundCornersButton text='View All' />
                        </View>
                        <Text fontSize={2} opacity={0.5} mt={2}>
                            Recent
                        </Text>
                        <View flexDirection = 'row' justifyContent='flex-end'>
                        <RoundCornersButton text='View All'/>
                        <TouchableOpacity ml = {3}>
                    <Icon id={"search"} size={18} fill={"#000"} opacity={0.7}/>
                       </TouchableOpacity>
                       </View>
                    </View>
                    <View>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            pt={4}
                            pb={2}
                            contentInset={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 24
                            }}>
                            {programCardData.map(program => (
                                <LibraryProgramCard
                                    programCardData={program}
                                    ml={4}
                                />
                            ))}
                        </ScrollView>
                    </View>

                    <View px={4} mt={3}>
                        <View
                            mt={4}
                            flexDirection='row'
                            justifyContent='space-between'>
                            <Text fontSize={3} opacity={0.7} fontWeight='bold'>
                                Workouts
                            </Text>
                            <RoundCornersButton text='View All' />
                        </View>
                        <Text fontSize={2} opacity={0.5} mt={2}>
                            Recent
                        </Text>
                        <View flexDirection = 'row' justifyContent='flex-end'>
                        <RoundCornersButton text='View All'/>
                        <TouchableOpacity ml = {3}>
                    <Icon id={"search"} size={18} fill={"#000"} opacity={0.7}/>
                       </TouchableOpacity>
                       </View>
                    </View>
                    <View>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            px={2}
                            pt={4}
                            pb={2}
                            contentInset={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 24
                            }}>
                            {workoutCardData.map(program => (
                                <LibraryProgramCard
                                    programCardData={program}
                                    ml={4}
                                />
                            ))}
                        </ScrollView>
                    </View>
                </ScrollView>
                <View px={4} mb={4}>
                    <ActionButton
                        mt={3}
                        secondaryDark
                        text='Start Next Workout'
                        onPress={() =>
                            this.props.navigation.navigate("Logging")
                        }
                    />
                </View>
            </React.Fragment>
        );
    }
}

const programCardData = [
    {
        title: "High Volume Program",
        value: [
            {
                id: 2,
                title: "Frequency",
                value: "3"
            },

            {
                id: 3,
                title: "Cycles",
                value: "4"
            },

            {
                id: 4,
                title: "Workouts/Cycle",
                value: "7"
            },
            {
                id: 5,
                title: "Workout Duration",
                value: "1h10m"
            }
        ]
    },
    {
        title: "Low Volume Program",
        value: [
            {
                id: 2,
                title: "Frequency",
                value: "3"
            },

            {
                id: 3,
                title: "Cycles",
                value: "4"
            },

            {
                id: 4,
                title: "Workouts/Cycle",
                value: "7"
            },
            {
                id: 5,
                title: "Workout Duration",
                value: "1h10m"
            }
        ]
    },
    {
        title: "German Volume Program",
        value: [
            {
                id: 2,
                title: "Frequency",
                value: "3"
            },

            {
                id: 3,
                title: "Cycles",
                value: "4"
            },

            {
                id: 4,
                title: "Workouts/Cycle",
                value: "7"
            },
            {
                id: 5,
                title: "Workout Duration",
                value: "1h10m"
            }
        ]
    }
];

const workoutCardData = [
    {
        title: "Upper Workout",
        value: [
            {
                id: 2,
                title: "Exercises",
                value: "6"
            },
            {
                id: 3,
                title: "Duration",
                value: "1h30min"
            },
            {
                id: 3,
                title: "Focus",
                value: "Chest and Triceps"
            }
        ]
    },
    {
        title: "Pull Workout",
        value: [
            {
                id: 2,
                title: "Exercises",
                value: "3"
            },
            {
                id: 3,
                title: "Duration",
                value: "1h20min"
            },
            {
                id: 3,
                title: "Focus",
                value: "Back and Biceps"
            }
        ]
    }
];
