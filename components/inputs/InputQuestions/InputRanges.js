import React, { useState } from "react";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";


const Text = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
`;

const CenterItem = styled.View`
  align-items: flex-start;
  flex: 1;
  justify-content: flex-start;
  right: 100;
`;

const UserInput = styled.View`
flexWrap: wrap
top: 30;
flexDirection: row;
justify-content: flex-start;
`;

const TextInput = styled.TextInput`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${size}
`;

export const RangeInput = props => {
    const {question, placeholder1, rangeDivision, placeholder2} = props;
return(
  <CenterItem>
        <Text fontSize = {5} mt = {6}>
          {question} 
        </Text>
      <UserInput>
        <TextInput fontSize = {5} 
          placeholder={placeholder1}
         /* keyboardType = {keyboardType}*/ >
        </TextInput>
        <Text fontSize = {5} mr={1}>
          {rangeDivision}
        </Text>
        <TextInput fontSize = {5} ml={1}
          placeholder={placeholder2}
         /* keyboardType = {keyboardType}*/ >
        </TextInput>
      </UserInput>
  </CenterItem>
);
};