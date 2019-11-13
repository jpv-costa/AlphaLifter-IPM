import React, { useState } from "react";
import {StyleSheet} from "react-native";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";


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
        width: 350;
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
`;



const styles = StyleSheet.create({
    card: {
        height: 270

    }  
  });

export const ChooseProgretion = props => {
    return(
        <ColumnContainer style = {styles.card}>
            <Separator></Separator>
            <RowContainer>
                <Text fontSize = {5} ml = {2} >Load Progretion</Text>
                <Image source={require('../../assets/images/arrow.png')}mr = {2}></Image>
            </RowContainer>
        
            <Separator></Separator>
            <RowContainer>
                <Text fontSize = {5} ml = {2}>Linear Progretion</Text>
                <Image source={require('../../assets/images/arrow.png')}mr = {2}></Image>
            </RowContainer>

            <Separator></Separator>
            <RowContainer>
                <Text fontSize = {5} ml = {2}>Double Progretion</Text>
                <Image source={require('../../assets/images/arrow.png')} mr = {2} ></Image>
            </RowContainer>

            <Separator></Separator>
            <RowContainer>
                <Text fontSize = {5} ml = {2}>No Progretion</Text>
                <Image source={require('../../assets/images/arrow.png')}mr = {2}></Image>
            </RowContainer>

            <Separator></Separator>

        </ColumnContainer>)
}

ChooseProgretion.defaultProps = {
    height : 350
}


