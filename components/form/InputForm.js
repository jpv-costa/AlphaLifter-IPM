import React, { useState } from "react";
import { Dimensions } from "react-native";
import { color, space, layout, size, typography } from "styled-system";
import styled from "styled-components";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Center = styled.View``;

const QuestionItem = styled.Text`
    text-align: center;
    margin: 10% 0;
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
`;

const Text = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
`;

export const InputForm = props => {
    return (
        <Center
            style={{
                width: screenWidth
            }}>
            <QuestionItem>
                <Text fontSize={6}>{props.question}</Text>
            </QuestionItem>
            {props.children}
        </Center>
    );
};
