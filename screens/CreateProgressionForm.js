import React, { useState } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import { color, space, layout, size, typography, flexbox } from "styled-system";
import { Icon } from "../components/Icon/Icon";

import { InputForm } from "../components/form/InputForm";
import { Form } from "../components/form/Form";
import {
    SingleInput,
    SingleInputNumeric
} from "../components/inputs/InputQuestions/InputQuestions";
import { RangeInput } from "../components/inputs/InputQuestions/InputRanges";
import { FormButtons } from "../components/button/FormButtons";
import { SingleSelectList } from "../components/form/SingleSelectList";
import List from "../components/List/List";

import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

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

export class CreateProgretionForm extends React.Component {
    state = {};

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Assign Exercise Progression"
        };
    };

    render() {
        return (
            <View flex={1}>
                <Form
                    onFinish={() => {
                        this.props.navigation.navigate("ExerciseConfiguration");
                        this.props.onAssignExerciseProgression(
                            this.props.workout,
                            this.props.exercise,
                            this.state.progression,
                            this.state.startLoad,
                            this.state.reps1,
                            this.state.reps2,
                            this.state.rir1,
                            this.state.rir2
                        );
                    }}>
                    <InputForm question={"What is the progression scheme?"}>
                        <SingleSelectList
                            data={chooseProgressionData}
                            onItemPress={item => {
                                this.state.progression = item.title;
                            }}
                        />
                    </InputForm>

                    <InputForm question={"How many target sets?"}>
                        <SingleInputNumeric
                            placeholder={"3"}
                            onChange={text => {
                                this.state.sets = text;
                            }}
                        />
                    </InputForm>

                    <InputForm question={"Enter the starting load?"}>
                        <SingleInput
                            placeholder={"50"}
                            units={"% 1 RM"}
                            onChange={text => {
                                this.state.startLoad = text;
                            }}
                            hasNext = {true}
                        />
                    </InputForm>

                    <InputForm question={"What should be the load increase?"}>
                        <SingleInput
                            placeholder={"2.5"}
                            units={"kg"}
                            onChange={text => {
                                this.state.loadIncrease = text;
                            }}
                            hasPrevious = {true}
                        />
                    </InputForm>

                    <InputForm question={"Enter the rep range:"}>
                        <RangeInput
                            placeholder1={"10"}
                            rangeDivision={"-"}
                            placeholder2={"12"}
                            onChange1={text => {
                                this.state.reps1 = text;
                            }}
                            onChange2={text => {
                                this.state.reps2 = text;
                            }}
                        />
                    </InputForm>
                    <InputForm question={"Enter the RIR range:"}>
                        <RangeInput
                            placeholder1={"1"}
                            rangeDivision={"-"}
                            placeholder2={"1"}
                            onChange1={text => {
                                this.state.rir1 = text;
                            }}
                            onChange2={text => {
                                this.state.rir2 = text;
                            }}
                        />
                    </InputForm>
                </Form>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    //[{workout:name, exercises:[{exercise:name, progression, targetweight: weight, targetreps1: reps1,targetreps2:reps2, targetrir1:rir1, targetrir2:rir2}]

    return {
        onAssignExerciseProgression: (
            workout,
            exercise,
            progression,
            targetWeight,
            targetReps1,
            targetReps2,
            targetRir1,
            targetRir2
        ) =>
            dispatch({
                type: actionTypes.ASSIGN_PROGRESSION_TO_EXERCISE,
                payload: {
                    workout: workout,
                    exercise: exercise,
                    progression: progression,
                    targetWeight: targetWeight,
                    targetReps1: targetReps1,
                    targetRep2: targetReps2,
                    targetRir1: targetRir1,
                    targetRir2: targetRir2
                }
            })
    };
};

export default connect(null, mapDispatchToProps)(CreateProgretionForm);

const chooseProgressionData = [
    {
        id: 1,
        title: "No Progression"
    },
    {
        id: 2,
        title: "Load Progression"
    },
    {
        id: 3,
        title: "Double Progression"
    },
    {
        id: 4,
        title: "Linear Periodization"
    },
    {
        id: 5,
        title: "Set Progression"
    }
];
