import React, { useState } from "react";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";
import { statement } from "@babel/template";

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
    flex-direction: row;
    align-items: flex-end;
`;

const TextInput = styled.TextInput`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${size}
`;


const handleTittleInputSubmit = () => {
    this.setState({focusDescriptionInput: true})
}

export const SingleInputNumeric = props => {
    const { placeholder, units, onChange, hasPrevious, hasNext} = props;
    
    let state = {
        focusDescriptionInput: false
    }

    return (
        <CenterItem>
            <UserInput>
                <TextInput
                    fontSize={8}
                    placeholder={placeholder}
                    autoCorrect={false}
                    keyboardType={"numeric"}
                    maxFontSizeMultiplier={6}
                    maxLength={6}
                    multiline={false}
                    onChangeText={text => onChange(text)}
                    blurOnSubmit={ (hasNext === true) ? true : false}
                    onSubmitEditting = {(hasNext === true) ? handleTittleInputSubmit : state.focusDescriptionInput}
                    focus = {(hasPrevious === true) ? state.focusDescriptionInput : state.focusDescriptionInput} ></TextInput>
                <Text
                    fontSize={5}
                    ml={3}
                    opacity={0.5}
                    style={{ marginBottom: 7 }}>
                    {units}
                </Text>
            </UserInput>
        </CenterItem>
    );
};

export const SingleInput = props => {
    const { placeholder, onChange, hasPrevious, hasNext  } = props;

    let state = {
        focusDescriptionInput: false
    }
    
    return (
        <CenterItem>
            <UserInput>
                <TextInput
                    fontSize={8}
                    placeholder={placeholder}
                    onChangeText={text => onChange(text)}
                    autoCorrect={false}
                    maxFontSizeMultiplier={6}
                    multiline={false}
                    blurOnSubmit={ (hasNext === true) ? true : false}
                    onSubmitEditting = {(hasNext === true) ? handleTittleInputSubmit : state.focusDescriptionInput}
                    focus = {(hasPrevious === true) ? state.focusDescriptionInput : state.focusDescriptionInput} ></TextInput>
            </UserInput>
        </CenterItem>
    );
};
