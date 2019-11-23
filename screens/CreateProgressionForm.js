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

export default class CreateProgretionForm extends React.Component {

    state = {
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Create Program"
        };
    };

    render() {
        return (
            <View flex={1}>
                <Form onFinish={() => console.log(this.state)}>
                    <InputForm question={"What is the progression scheme?"}>
                        <SingleSelectList
                            data={chooseProgressionData}
                            onItemPress={(item) => {this.state.progression = item.title;}}
                        />
                    </InputForm>

                    <InputForm question={"How many target sets?"}>
                        <SingleInputNumeric placeholder={"3"} onChange={(text) => {this.state.sets = text}}/>
                    </InputForm>

                    <InputForm question={"Enter the starting load?"}>
                        <SingleInput placeholder={"50"} units={"% 1 RM"} onChange={(text) => {this.state.startLoad = text}}/>
                    </InputForm>

                    <InputForm question={"What should be the load increase?"}>
                        <SingleInput placeholder={"2.5"} units={"kg"} onChange={(text) => {this.state.loadIncrease = text}}/>
                    </InputForm>

                    <InputForm question={"Enter the rep range:"}>
                        <RangeInput
                            placeholder1={"10"}
                            rangeDivision={"-"}
                            placeholder2={"12"}
                            onChange1={(text) => {this.state.reps1 = text}}
                            onChange2={(text) => {this.state.reps2 = text}}
                        />
                    </InputForm>
                    <InputForm question={"Enter the RIR range:"}>
                        <RangeInput
                            placeholder1={"1"}
                            rangeDivision={"-"}
                            placeholder2={"1"}
                            onChange1={(text) => {this.state.rir1 = text}}
                            onChange2={(text) => {this.state.rir2 = text}}
                        />
                    </InputForm>
                </Form>
            </View>
        );
    }
}

const onItemPress = item => {
    console.log("You pressed item '" + item.title + "'");
    this.state.progression
};

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
