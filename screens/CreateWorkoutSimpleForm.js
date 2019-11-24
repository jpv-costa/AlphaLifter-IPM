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
import { List } from "../components/List/List";

import {connect} from 'react-redux';
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

export class CreateWorkoutSimpleForm extends React.Component {
    state= {}

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Create Workout"
        };
    };

    render() {
        return (
            <View flex={1}>
                <Form
                    onFinish={() =>
                        {
                            this.props.onWorkoutCreated(this.state.name);
                            this.props.navigation.navigate("Search", {
                                type: "exercises"
                            });
                        }
                        
                    }>
                    <InputForm question={"What should it be named?"}>
                        <SingleInput
                            placeholder={"Upper Workout"}
                            onChange={text => this.setState({ name: text })}
                        />
                    </InputForm>
                </Form>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    //[{workout:name, exercises:[{exercise1ID, progression:type, targetweight: weight, targetreps: reps, targetrir1:rir1, targetrir2:rir2}]
    return {
        onWorkoutCreated: (name) => dispatch({type: actionTypes.ADD_WORKOUT, payload:{name:name}}),
    }
}

export default connect(null, mapDispatchToProps)(CreateWorkoutSimpleForm);

