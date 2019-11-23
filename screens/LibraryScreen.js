import React from "react";
import { RefreshControl } from "react-native";
import styled from "styled-components";
import { color, space, layout, size, typography, flexbox } from "styled-system";
import { Icon } from "../components/Icon/Icon";
import { LibraryProgramCard } from "../components/cards/libraryProgramCard/LibraryProgramCard";
import { RoundCornersButton } from "../components/button/Button";
import { ActionButton } from "../components/button/Button";
import ActionSheet from "react-native-actionsheet";

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

function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

export default class LibraryScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Library",
            headerRight: (
                <TouchableOpacity
                    mr={4}
                    onPress={navigation.getParam("showActionSheet")}>
                    <Icon id={"plus"} size={18} fill={"#000"} opacity={0.7} />
                </TouchableOpacity>
            )
        };
    };
    showActionSheet = () => {
        this.ActionSheet.show();
    };

    state = {
        refreshing: false
    };

    componentDidMount() {
        const { navigation } = this.props;
        navigation.setParams({
            showActionSheet: this.showActionSheet
        });
    }

    render() {
        const onRefresh = () => {
            this.setState({
                refreshing: true
            });

            wait(2000).then(() =>
                this.setState({
                    refreshing: false
                })
            );
        };

        return (
            <React.Fragment>
                <ActionSheet
                    ref={o => (this.ActionSheet = o)}
                    title={"What do you wish to create?"}
                    options={["Training Program", "Workout", "Cancel"]}
                    cancelButtonIndex={2}
                    destructiveButtonIndex={1}
                    onPress={index => {
                        /* do something */
                    }}
                />
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={onRefresh}
                        />
                    }>
                    <View px={4} mt={4}>
                        <View
                            flexDirection='row'
                            justifyContent='space-between'>
                            <Text fontSize={3} opacity={0.7} fontWeight='bold'>
                                Training Programs
                            </Text>
                            <View flexDirection='row' justifyContent='flex-end'>
                                <RoundCornersButton text='View All' />
                                <TouchableOpacity ml={3}>
                                    <Icon
                                        id={"search"}
                                        size={18}
                                        fill={"#000"}
                                        opacity={0.7}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text fontSize={2} opacity={0.5} mt={2}>
                            Recent
                        </Text>
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
                            <View flexDirection='row' justifyContent='flex-end'>
                                <RoundCornersButton text='View All' />
                                <TouchableOpacity
                                    ml={3}
                                    onPress={this.showActionSheet}>
                                    <Icon
                                        id={"search"}
                                        size={18}
                                        fill={"#000"}
                                        opacity={0.7}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text fontSize={2} opacity={0.5} mt={2}>
                            Recent
                        </Text>
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
