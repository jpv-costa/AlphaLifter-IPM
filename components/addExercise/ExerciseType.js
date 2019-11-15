import React from "react";
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
        ${size}
        height:1;
        backgroundColor:black;
`;
const ColumnContainer = styled.View`
${color}
${space}
${layout}
elevation: 3;
position: absolute;
`;

const Image = styled.Image`
    ${space}
    ${layout}
opacity : 0.8;
`;

const styles = StyleSheet.create({
    card: {
        height: 135
    }
});

export const ExerciseType = props => {
    return (
        <ColumnContainer style={styles.card}>
            <Separator width={screenWidth}></Separator>
            <RowContainer>
                <Text fontSize={5} ml={2}>
                    Compound
                </Text>
                <Icon id='arrow-left' size={12} fill='#aaa' mr={2} />
            </RowContainer>

            <Separator></Separator>
            <RowContainer>
                <Text fontSize={5} ml={2}>
                    Isolated
                </Text>
                <Icon id='arrow-left' size={12} fill='#aaa' mr={2} />
            </RowContainer>

            <Separator></Separator>
        </ColumnContainer>
    );
};

ExerciseType.defaultProps = {
    height: 350
};
