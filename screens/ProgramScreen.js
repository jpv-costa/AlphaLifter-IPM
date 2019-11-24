import React, { useState } from "react";
import { SafeAreaView, Dimensions } from "react-native";
import styled from "styled-components";
import { color, space, layout, size, typography, flexbox } from "styled-system";
import { Icon } from "../components/Icon/Icon";
import { LibraryProgramCard } from "../components/cards/libraryProgramCard/LibraryProgramCard";
import { RoundCornersButton } from "../components/button/Button";
import { ActionButton } from "../components/button/Button";
import { default as MatIcon } from "react-native-vector-icons/MaterialIcons";
import Navigator from "../components/navigation/TabNavigator";
import theme from "../components/theme";

import ActionSheet from "react-native-actionsheet";

import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

const { width } = Dimensions.get("window");

const ScrollView = styled.ScrollView`
    ${space}
    ${layout}
    ${flexbox}
    ${color}
`;

const IconCircle = styled.TouchableOpacity`
    ${space}
    ${layout}
    opacity: ${props => (props.disabled ? "0.5" : "0.9")}
    width: 32;
    height: 32;
    border-radius: 100;
    backgroundColor: ${theme.colors.secondaryShades[0]};
    align-items: center;
    justify-content: center;
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

export class ProgramScreen extends React.Component {
    program = this.props.navigation.state.params.program;
    header = ["Workouts", "Analysis"];

    showActionSheet = () => {
        this.ActionSheet.show();
    };

    componentDidMount() {
        const { navigation } = this.props;
        navigation.setParams({
            showActionSheet: this.showActionSheet
        });
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.state.params.program.title,
            headerLeft: (
                <TouchableOpacity ml={4} onPress={() => navigation.goBack()}>
                    <Icon id='arrow-left' size={18} fill='#000' opacity={0.7} />
                </TouchableOpacity>
            ),
            headerRight: (
                <TouchableOpacity mr={4} disabled opacity={0.4}>
                    <MatIcon name={"more-horiz"} size={18} color={"#000"} />
                </TouchableOpacity>
            )
        };
    };

    render() {
        // console.log(this.props.navigation.state.params);
        const cycles = this.props.cycles
            ? this.props.cycles
            : this.props.navigation.getParam("program").cycles;
        const getCycles = () => {
            const result = [];

            for (let i = 1; i <= cycles; i++) {
                result.push(
                    <View mb={4}>
                        <View
                            flexDirection='row'
                            alignItems='center'
                            justifyContent='space-between'>
                            <Text
                                fontSize={4}
                                opacity={0.5}
                                mt={2}
                                ml={4}
                                fontWeight={"bold"}>
                                Cycle {i}
                            </Text>
                            <View mr={4}>
                                <RoundCornersButton
                                    text='Re-order'
                                    mr={4}
                                    onPress={() =>
                                        this.props.navigation.navigate(
                                            "ReOrder"
                                        )
                                    }
                                />
                            </View>
                        </View>
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
                            {this.props.workouts.map(workout => (
                                <LibraryProgramCard
                                    programCardData={workout}
                                    ml={4}
                                />
                            ))}
                        </ScrollView>
                    </View>
                );
            }

            return result;
        };

        content = [
            <ScrollView>
                <View px={4} my={3} flexDirection='row' alignItems='center'>
                    <IconCircle>
                        <TouchableOpacity
                            flexDirection='row'
                            alignItems='center'
                            onPress={this.props.navigation.getParam(
                                "showActionSheet"
                            )}>
                            <MatIcon name={"add"} size={20} color={"#fff"} />
                        </TouchableOpacity>
                    </IconCircle>
                    <TouchableOpacity
                        flexDirection='row'
                        alignItems='center'
                        onPress={this.props.navigation.getParam(
                            "showActionSheet"
                        )}>
                        <Text
                            color={"secondaryShades.0"}
                            ml={4}
                            fontWeight='bold'
                            fontSize={3}>
                            Add Workout
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>{getCycles()}</View>
            </ScrollView>,
            <Text>Not implemented.</Text>
        ];

        return (
            <React.Fragment>
                <ActionSheet
                    ref={o => (this.ActionSheet = o)}
                    title={"Add Workout"}
                    options={[
                        "Create new workout",
                        "Add from Library",
                        "Cancel"
                    ]}
                    cancelButtonIndex={2}
                    onPress={index => {
                        switch (index) {
                            case 0:
                                console.log("program: ")
                                console.log(this.props.program);
                                this.props.navigation.navigate("WorkoutForm", {program: this.props.program});
                                break;
                            case 1:
                                this.props.navigation.navigate("Search", {
                                    type: "workout"
                                });
                                break;
                        }
                    }}
                />
                <Text fontSize={2} my={3} mx={4} opacity={0.5}>
                    Length: {cycles} cycles.
                </Text>
                <Navigator
                    width={width}
                    header={this.header}
                    tabContent={content}
                />
                {/* {this.content} */}
                {this.props.navigation.getParam("editMode", false) && (
                    <View px={4} mb={4}>
                        <ActionButton
                            mt={3}
                            secondaryDark
                            text='Save Program'
                            onPress={() =>
                                this.props.navigation.navigate("Library")
                            }
                        />
                    </View>
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let workouts = [];
    let program = state.programs.filter(p => p.name == ownProps.navigation.state.params.program.title)[0];

    console.log(program);
    state.programs[program.id-1].workouts.map(w => {
        workouts.push({
            id: w.id,
            title: w.name,
            value: [
                { id: 2, title: "Exercises", value: w.exercises.length },
                { id: 3, title: "Duration", value: "1h30min" },
                { id: 4, title: "Focus", value: "Chest and Biceps" }
            ]
        });
    });

    return {
        program: program,
        cycles: program.cycles,
        workouts: workouts
    };
};

export default connect(mapStateToProps, null)(ProgramScreen);

const workoutsCardData = [
    {
        id: 1,
        title: "workout name",
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
                id: 4,
                title: "Trained Muscles",
                value: "Chest and Triceps"
            }
        ]
    }
];
