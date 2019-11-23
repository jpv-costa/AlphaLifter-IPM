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

export default class CreateProgramForm extends React.Component {
    state={}
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Create Program"
        };
    };

    render() {
        return (
            <View flex={1}>
                <Form onFinish={() => console.log(this.state)}>
                    <InputForm question={"What should it be named?"}>
                        <SingleInput placeholder={"High Volume Program"} onChange={text => this.setState({name:text})} />
                    </InputForm>

                    <InputForm question={"How long should it be?"}>
                        <SingleInput placeholder={"3"} units={"cycles"} onChange={text => this.setState({cycles:text})}/>
                    </InputForm>
                </Form>
            </View>
        );
    }
}

const onItemPress = item => {
    console.log("You pressed item '" + item.title + "'");
};
