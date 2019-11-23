import React, { useState, useEffect } from "react";
import { List } from "../../../List/List";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";

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

const ListHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ExerciseLog = props => {
    const { data, selectedId, ...other } = props;

    const [inputs, setInputs] = useState([]);
    const [currentSet, setCurrentSet] = useState(0);

    for (let i = 0; i < data["1"].sets * 3; i++) {
        inputs.push(React.createRef());
    }

    const parsedData = [];

    const reps = isNaN(data["1"].reps)
        ? data["1"].reps.min + "-" + data["1"].reps.max
        : data["1"].reps;

    for (let i = 0; i < data["1"].sets; i++) {
        const set = (
            <ListContainer px={3} py={2}>
                <ListHeader>
                    <TextInput
                        returnKeyType='done'
                        maxLength={3}
                        ref={inputs[i * 3]}
                        fontSize={4}
                        blurOnSubmit={false}
                        keyboardType='decimal-pad'
                        onFocus={() => {
                            setCurrentSet(i);
                        }}
                        selectTextOnFocus
                        onSubmitEditing={() => {
                            inputs[i * 3 + 1].current.focus();
                        }}
                        placeholder={"" + data["1"].weight}
                        defaultValue={"" + data["1"].weight}
                    />
                    <Text ml={1}>Kg</Text>
                </ListHeader>
                <ListHeader>
                    <TextInput
                        selectTextOnFocus
                        returnKeyType='done'
                        maxLength={3}
                        ref={inputs[i * 3 + 1]}
                        fontSize={4}
                        blurOnSubmit={false}
                        keyboardType='decimal-pad'
                        onFocus={() => {
                            setCurrentSet(i);
                        }}
                        onSubmitEditing={() => {
                            inputs[i * 3 + 2].current.focus();
                        }}
                        placeholder={"" + reps}
                    />
                    <Text ml={1}>Reps</Text>
                </ListHeader>
                <ListHeader>
                    <TextInput
                        selectTextOnFocus
                        returnKeyType='done'
                        maxLength={3}
                        ref={inputs[i * 3 + 2]}
                        fontSize={4}
                        keyboardType='decimal-pad'
                        blurOnSubmit={false}
                        onFocus={() => {
                            setCurrentSet(i);
                        }}
                        onSubmitEditing={() => {
                            inputs[
                                (i * 3 + 3) % (data["1"].sets * 3)
                            ].current.focus();
                        }}
                        placeholder={
                            data["1"].RIR.min + "-" + data["1"].RIR.max
                        }></TextInput>
                    <Text ml={1}>RIR</Text>
                </ListHeader>
            </ListContainer>
        );

        parsedData.push({
            id: i,
            icon: {
                id: ""
            },
            description: set
        });
    }

    return (
        <List
            data={parsedData}
            numberedBullet
            swipeable
            selectId={currentSet}
            {...other}
        />
    );
};
