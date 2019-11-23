import React, { useState } from "react";
import {Dimensions} from "react-native";
import styled from "styled-components";
import { color, space, layout, size, typography, flexbox } from "styled-system";
import { Icon } from "../components/Icon/Icon";

import { InputForm } from "../components/form/InputForm"
import { Form } from "../components/form/Form";
import { SingleInput } from "../components/inputs/InputQuestions/InputQuestions";
import { RangeInput } from "../components/inputs/InputQuestions/InputRanges";
import {FormButtons} from "../components/button/FormButtons"
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

export default class CreateExerciseForm extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Add Workout",
        };
    };

    render() {
        return (
            <View flex-grow = {1}>
               <Form>
            <InputForm question={"What should it be named?"}>
                <SingleInput placeholder={"Exercise name"}  />
            </InputForm>
            
            <InputForm question={"What type is it?"}>
                <SingleSelectList
                    data={exerciseType}
                    onItemPress={onItemPress}
                />
            </InputForm>

            <InputForm question={"What is the pimary muscle?"}>
                <Search
                mt={0}
                data={musclesDashboardData}
                placeholder={"Type the muscle..."}
                searchProperties={["muscle"]}>
                    <DashboardMuscleList
                        selectList
                        multiselect
                        onItemPress={onItemPress}
                    />
                 </Search>
            </InputForm>

            <InputForm question={"What are the secondary muscle?"}>
                <Search
                    mt={0}
                    data={musclesDashboardData}
                    placeholder={"Type the muscle..."}
                    searchProperties={["muscle"]}>
                    <DashboardMuscleList
                        selectList
                        multiselect
                        onItemPress={onItemPress}
                    />
                 </Search>
            </InputForm>
           
        </Form>
                <FormButtons flex = {1}/>
            </View>
        );
    }
}

const onItemPress = item => {
    console.log("You pressed item '" + item.title + "'");
};

const exerciseType = [
    {
        id: 1,
        title: "Compound"
    },
    {
        id: 2,
        title: "Isolation"
    },
   
];

const musclesDashboardData = [
    {
        id: 1,
        muscle: "Biceps",
        icon: {
            view: "front-upper"
        }
    },
    {
        id: 2,
        muscle: "Chest",
        icon: {
            view: "front-upper"
        }
    },
    {
        id: 3,
        muscle: "Chest",
        icon: {
            view: "front-upper"
        }
    }
];

