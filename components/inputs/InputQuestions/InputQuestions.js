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
  flexDirection: row;
  align-items: flex-end;
`;

const TextInput = styled.TextInput`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${size}
`;


export const SingleInputNumeric = props => {
  const {placeholder, units} = props;
return(
<CenterItem>
    <UserInput>
      <TextInput fontSize = {8} 
        placeholder={placeholder}
        autoCorrect={false}
        keyboardType={'numeric'}
        maxFontSizeMultiplier={6}
        maxLength={6}
        multiline={false} >
      </TextInput>
      <Text fontSize = {5} ml={3} opacity = {0.5} style={{marginBottom: 7}}>
        {units}
      </Text>
    </UserInput>
</CenterItem>
);
};

export const SingleInput = props => {
  const {placeholder} = props;
return(
<CenterItem>
    <UserInput>
      <TextInput fontSize = {8} 
        placeholder={placeholder}
        autoCorrect={false}
        maxFontSizeMultiplier={6}
        maxLength={6}
        multiline={false} >
      </TextInput>
    </UserInput>
</CenterItem>
);
};


