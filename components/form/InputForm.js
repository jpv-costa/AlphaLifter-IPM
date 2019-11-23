import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import { color, space, layout, size, typography } from "styled-system";
import styled from "styled-components";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const QuestionItem = styled.View`
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
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
`;
export const InputForm = props => {
    return (
        <View
            style={{
                flex: 1,
                width: screenWidth
            }}>
            <QuestionItem pt={3} px={4}>
                <Text fontSize={7} opacity={0.2}>
                    {props.question}
                </Text>
            </QuestionItem>
            <Answer style={{ flex: 1, width: screenWidth }} pt={4} px={4}>
                {props.children}
            </Answer>
        </View>
    );
};
