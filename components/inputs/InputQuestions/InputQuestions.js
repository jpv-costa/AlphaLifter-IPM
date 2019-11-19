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
`;

const UserInput = styled.View`
flexWrap: wrap
top: 30;
flexDirection: row;
`;

const TextInput = styled.TextInput`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${size}
`;

export const SingleInput = props => {
    const {question, placeholder, units} = props;
return(
  <CenterItem>
        <Text fontSize = {5} mt = {6}>
          {question} 
        </Text>
      <UserInput>
        <TextInput fontSize = {5} 
          placeholder={placeholder}
         /* keyboardType = {keyboardType}*/ >
        </TextInput>
        <Text fontSize = {5} ml={3}>
          {units}
        </Text>
      </UserInput>
  </CenterItem>
);
};


