import React, { useState } from "react";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";
import { FlatList, View, StyleSheet, Dimensions } from "react-native";

const ListContainer = styled.View`
    ${space}
    ${layout}
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
    align-items: center;
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
    const { defaultReps, defaultKG, defaultRIR } = props;

    return (
        <ListContainer style={{ width: "100%" }} px={3} py={3}>
            <ListHeader>
                <TextInput fontSize={4} placeholder={defaultReps}></TextInput>
                <Text ml={1}>Reps</Text>
            </ListHeader>

            <ListHeader>
                <TextInput fontSize={4} placeholder={defaultKG}></TextInput>
                <Text ml={1}>Kg</Text>
            </ListHeader>

            <ListHeader>
                <TextInput fontSize={4} placeholder={defaultRIR}></TextInput>
                <Text ml={1}>RIR</Text>
            </ListHeader>
        </ListContainer>
    );
};
