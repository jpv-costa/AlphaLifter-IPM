import React, { useState } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import { color, space, layout, size, typography, flexbox } from "styled-system";
import { Icon } from "../components/Icon/Icon";

import { InputForm } from "../components/form/InputForm";
import { Form } from "../components/form/Form";
import { SingleInput } from "../components/inputs/InputQuestions/InputQuestions";
import { RangeInput } from "../components/inputs/InputQuestions/InputRanges";
import { FormButtons } from "../components/button/FormButtons";
import { SingleSelectList } from "../components/form/SingleSelectList";

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

export class CreateProgramForm extends React.Component {
    workout = this.props.workout;
    state = {};
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Create Program"
        };
    };

    render() {
        return (
            <View flex={1}>
                <Form
                    onFinish={() => {
                        this.props.onProgramCreated(
                            this.state.name,
                            this.state.cycles,
                            []
                        );
                        this.props.navigation.navigate("Program", {
                            program: {
                                title: this.state.name,
                                cycles: this.state.cycles
                            },
                            editMode: true
                        });
                    }}>
                    <InputForm question={"What should it be named?"}>
                        <SingleInput
                            placeholder={"High Volume Program"}
                            onChange={text => {
                                this.setState({ name: text });
                            }}
                        />
                    </InputForm>

                    <InputForm question={"How many cycles should it have?"}>
                        <SingleInput
                            placeholder={"3"}
                            units={"cycles"}
                            onChange={text => this.setState({ cycles: text })}
                        />
                    </InputForm>
                </Form>
            </View>
        );
    }
}

// const mapDispatchToProps = dispatch => {
//     //[{program: name, cycles:number, workouts:[{workout:id, cycle}]}]
//     return {
//         onProgramCreated: (name, cycles) =>
//             dispatch({
//                 type: actionTypes.ADD_PROGRAM,
//                 payload: { name: name, cycles: cycles }
//             })
//     };
// };

// const mapStateToProps = (state, ownProps) => {
//     return {
//         program: state.programs.filter(p => p.name == ownProps.navigation.state.params.program.title)[0]
//     };
// };
const mapDispatchToProps = dispatch => {
    //[{program: name, cycles:number, workouts:[{workout:id, cycle}]}]
    return {
        onProgramCreated: (name, cycles, workouts) =>
            dispatch({
                type: actionTypes.ADD_PROGRAM,
                payload: {
                    name: name,
                    cycles: cycles,
                    workouts: workouts
                }
            })
    };
};
export default connect(null, mapDispatchToProps)(CreateProgramForm);
