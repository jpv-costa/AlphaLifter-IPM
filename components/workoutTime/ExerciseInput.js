import React, { useState } from "react";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";
import { FlatList, View, StyleSheet , Dimensions} from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);

const ListContainer = styled.TouchableOpacity`
    ${space}
    ${layout}
    flex-direction: row;
    justifyContent: space-between;
`;

const Text = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    opacity : 0.5;
`;

const TextInput = styled.TextInput`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
`;


const ListContent = styled.View`
    ${space}
    ${layout}
    flex-direction: column;
    flex-grow: 1;
`;

const ListHeader = styled.View`
    flex-direction: row;
  
`;

const Circle = styled.View`
    width: 44;
    height: 44;
    background-color: #00171f;
    border-radius: ${44 / 2};
    opacity: ${0.15};
    position: absolute;
`;

const IconCircle = styled.View`
    width: 44;
    height: 44;
`;

const CenterItem = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ExerciseInput = props => {
  const {defaultReps, defaultKG, defaultRIR,exIndex} = props;

    let  icon = (
                <Text
                    fill='#00171f'
                    fontSize={4}
                    fontWeight='bold'
                    style={{ opacity: 0.8 }}>
                    {exIndex}
                </Text>
            );
       

    return (
        <ListContainer
            style = {{width: screenWidth}}
            px={3}
            py={3}>
            {icon && (
                <IconCircle>
                    <Circle />
                    <CenterItem>{icon}</CenterItem>
                </IconCircle>
            )}
            <ListHeader>
                <TextInput fontSize = {4} placeholder = {defaultReps}></TextInput>
                <Text mt = {3} ml = {1}>Reps</Text>
            </ListHeader>
         
            <ListHeader>
                <TextInput fontSize = {4} placeholder = {defaultKG}></TextInput>
                <Text mt = {3} ml = {1}>Kg</Text>
            </ListHeader>
        
            <ListHeader>
                <TextInput fontSize = {4} placeholder = {defaultRIR}></TextInput>
                <Text mt = {3}>RIR</Text>
            </ListHeader>


        </ListContainer>
    );
};