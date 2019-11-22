import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";
import { TouchableCard } from "../../atoms";

const Text = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    textAlign : center;
    opacity : ${props => (props.opacity ? props.opacity : 1)};
`;

const RowContainer = styled.View`
        ${space}
        ${layout}
        ${color}
        ${typography}
        ${size}
        flexDirection: row;
        flexWrap: wrap;
        justifyContent: space-around;
        flex-grow: 1;
    `;

const TitleContainer = styled.View`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    borderBottomColor: #ccc;
    borderBottomWidth: 0.2;
`;

const ColumnContainer = styled.View`
        ${space}
        ${layout}
        ${color}
        ${typography}
        ${size}
        justifyContent: center;
        align-items: center;
        flex-grow: 1;
        flex-basis: 45%;
    `;

export const LibraryProgramCard = props => {
    const { programCardData, onPress, width, ...other } = props;

    return (
        <TouchableCard onPress={onPress} width={width} px={2} py={3} {...other}>
            <TitleContainer pb={3}>
                <Text fontSize={2} opacity={0.5} fontWeight='bold'>
                    {programCardData.title}
                </Text>
            </TitleContainer>

            <RowContainer mt={3}>
                {programCardData.value.map(item => {
                    return (
                        <ColumnContainer my={2} key={item.id}>
                            <Text fontSize={3}> {item.value} </Text>
                            <Text
                                fontSize={1}
                                mt={2}
                                opacity={0.5}
                                numberOfLines={2}>
                                {item.title}
                            </Text>
                        </ColumnContainer>
                    );
                })}
            </RowContainer>
        </TouchableCard>
    );
};

LibraryProgramCard.defaultProps = {
    width: 250
};
