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

export default class CreateWorkoutForm extends React.Component {
    state= {}

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Create Workout"
        };
    };

    render() {
        return (
            <View flex={1}>
                <Form onFinish={() => console.log(this.state)}>
                    <InputForm question={"What should it be named?"}>
                        <SingleInput placeholder={"Upper Workout"} onChange={(text) => this.setState({name:text})}/>
                    </InputForm>
                    <InputForm question={"Select the cycles"}>
                        <List
                            data={chooseNumberCycles}
                            selectList
                            multiselect
                            onItemPress={(item, index, selected) =>
                                {this.setState({cycles: index.slice(1)})}}
                        />
                    </InputForm>
                </Form>
            </View>
        );
    }
}

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
