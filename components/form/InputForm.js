import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import { color, space, layout, size, typography } from "styled-system";
import styled from "styled-components";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const QuestionItem = styled.Text`
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

const Answer = styled.View`
    width: 100%;
    minHeight: 300;
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
`;
export const InputForm = props => {
    return (
        <View style={{ width: screenWidth }}>
            <QuestionItem pt={5} mx={4}>
                <Text fontSize={7} opacity={0.2}>
                    {props.question}
                </Text>
            </QuestionItem>
            <Answer style={{ width: "100%" }} mt={5} mx={4}>
                {props.children}
            </Answer>
        </View>
    );
};
