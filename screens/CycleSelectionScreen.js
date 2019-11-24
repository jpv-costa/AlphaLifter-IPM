import React from "react";
import { Dimensions, SafeAreaView } from "react-native";
import styled from "styled-components";
import { color, space, layout, size, typography, flexbox } from "styled-system";
import { List } from "../components/List/List";
import {} from "../components/inputs/InputQuestions/InputQuestions";
import { ActionButton } from "../components/button/Button";
import * as actionTypes from "../store/actions";
import { connect } from "react-redux";

const { width } = Dimensions.get("window");

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

const QuestionItem = styled.View`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
`;

export class CycleSelectionScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        };
    };

    state = {
        selected: []
    };

    render() {
        const selectedWorkout = this.props.navigation.getParam(
            "selectedWorkout"
        );
        const program = this.props.navigation.getParam("program");

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <QuestionItem pt={3} px={4}>
                    <Text fontSize={7} opacity={0.2}>
                        Select the cycles
                    </Text>
                </QuestionItem>
                <List
                    data={chooseNumberCycles}
                    selectList
                    multiselect
                    onItemPress={(index, selected) => {
                        console.log(selected.slice(1, selected.length));
                        this.setState({
                            selected: selected.slice(1, selected.length)
                        });
                    }}
                />
                <View px={4} mb={4}>
                    <ActionButton
                        mt={3}
                        secondaryDark
                        text='Next'
                        onPress={() => {
                            if (
                                this.props.navigation.getParam(
                                    "previousScreen"
                                ) == "workoutSearch"
                            ) {
                                this.props.onAssignWorkout(
                                    program,
                                    selectedWorkout - 1,
                                    this.state.selected
                                );
                                this.props.navigation.navigate("Program");
                            } else {
                                this.props.navigation.navigate("Search", {
                                    type: "exercises"
                                });
                            }
                        }}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const mapDispatchToProps = dispatch => {
    //[{workout:name, exercises:[{exercise:name, progression, targetweight: weight, targetreps1: reps1,targetreps2:reps2, targetrir1:rir1, targetrir2:rir2}]

    return {
        onAssignWorkout: (program, workoutIndex, cycles) =>
            dispatch({
                type: actionTypes.ASSIGN_WORKOUT_TO_PROGRAM,
                payload: {
                    program,
                    workoutIndex,
                    cycles
                }
            })
    };
};

export default connect(null, mapDispatchToProps)(CycleSelectionScreen);

const onItemPress = item => {
    console.log("You pressed item '" + item.title + "'");
};

const chooseNumberCycles = [
    {
        id: 1,
        title: "1 cycle"
    },
    {
        id: 2,
        title: "2 cycle"
    },

    {
        id: 3,
        title: "3 cycle"
    }
];
