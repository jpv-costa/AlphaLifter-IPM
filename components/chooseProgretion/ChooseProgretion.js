import React, { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";
import { Icon } from "../Icon/Icon";

const screenWidth = Math.round(Dimensions.get("window").width * 0.8);

const Text = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    textAlignVertical: center;
    flex:1;
    `;

const RowContainer = styled.TouchableOpacity`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    justifyContent: space-around;
    flexDirection: row;
    flex: 1;
    justifyContent: center;
    alignItems: center;
`;

const Separator = styled.View`
        ${space}
        ${layout}
        ${color}
        ${typography}
        ${size};
        height:0.5;
        backgroundColor:black;
`;
const ColumnContainer = styled.View`
${color}
${space}
${layout}
elevation: 3;
position: absolute;
`;

const styles = StyleSheet.create({
    card: {
        height: 270
    }
});

export const ChooseProgression = props => {
    return (
        <ColumnContainer style={styles.card}>
            <Separator width={screenWidth}></Separator>
            <RowContainer>
                <Text fontSize={3} ml={2}>
                    Load Progression
                </Text>
                <Icon id='arrow-right' size={20} fill='#aaa' mr={2} />
            </RowContainer>

            <Separator></Separator>
            <RowContainer>
                <Text fontSize={3} ml={2}>
                    Linear Progression
                </Text>
                <Icon id='arrow-right' size={20} fill='#aaa' mr={2} />
            </RowContainer>

            <Separator></Separator>
            <RowContainer>
                <Text fontSize={3} ml={2}>
                    Double Progretion
                </Text>
                <Icon id='arrow-right' size={20} fill='#aaa' mr={2} />
            </RowContainer>

            <Separator></Separator>
            <RowContainer>
                <Text fontSize={3} ml={2}>
                    No Progretion
                </Text>
                <Icon id='arrow-right' size={20} fill='#aaa' mr={2} />
            </RowContainer>

            <Separator />
        </ColumnContainer>
    );
};

ChooseProgression.defaultProps = {
    height: 350
};
