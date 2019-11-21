import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { SingleSelectList } from "./SingleSelectList";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { SafeAreaView } from "react-native";
import { InputForm } from "./InputForm";
import { Form } from "./Form";
import { SingleInput } from "../inputs/InputQuestions/InputQuestions";
import { RangeInput } from "../inputs/InputQuestions/InputRanges";

const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const onItemPress = item => {
    console.log("You pressed item '" + item.title + "'");
};

storiesOf("Form", module)
    // The ThemeProvider feeds the theme options to the components scope
    // (therefore the component can use them),
    // and centers the component in the screen
    .addDecorator(story => (
        <SafeAreaView style={{ flex: 1 }}>
            <ThemeProvider theme={theme}>
                <CenteredView>{story()}</CenteredView>
            </ThemeProvider>
        </SafeAreaView>
    ))
    .addDecorator(withKnobs)
    .add("SingleSelectList", () => (
        <SingleSelectList
            data={chooseProgressionData}
            onItemPress={onItemPress}
        />
    ))
    .add("Form Select List with question", () => (
        <InputForm question={"What is the progression scheme?"}>
            <SingleSelectList
                data={chooseProgressionData}
                onItemPress={onItemPress}
            />
        </InputForm>
    ))
    .add("Form", () => (
        <Form>
            <InputForm question={"What should be the increase per cycle?"}>
                <SingleInput placeholder={"2.5"} units={"Kg"} />
            </InputForm>
            <InputForm question={"How heavy do you want to start?"}>
                <RangeInput
                    placeholder1={"1"}
                    rangeDivision={"-"}
                    placeholder2={"2"}
                />
            </InputForm>
            <InputForm question={"What is the progression scheme?"}>
                <SingleSelectList
                    data={chooseProgressionData}
                    onItemPress={onItemPress}
                />
            </InputForm>
        </Form>
    ));

const chooseProgressionData = [
    {
        id: 1,
        title: "Load Progression"
    },
    {
        id: 2,
        title: "Double Progression"
    },
    {
        id: 3,
        title: "Linear Periodization"
    },
    {
        id: 4,
        title: "Set Progression"
    }
];
