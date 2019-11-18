import React, { useState } from "react";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";

const Text = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    textAlign : center;
`;

const Round = styled.TouchableOpacity`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    borderRadius: 25;

`;

const RoundCorners = styled.TouchableOpacity`
${space}
${layout}
${color}
${typography}
${size}
backgroundColor: #B0E0F6;
borderRadius:8;

`;

  export const RoundButton = props => {
    return(
    <Round 
        onPress = {props.buttonPress} 
        style ={{width : props.width} }
        bg= {props.secondaryDark?"secondaryShades.1": props.secondaryLight? "secondaryTints.0":"primary"}
        py = {3}
        px ={2}>
        <Text style={{fontWeight: 'bold'}} fontSize={4}
        color = "white.1">{props.text}</Text>
    </Round>)
}

RoundButton.defaultProps = {
    width : 350
}

export const RoundCornersButton = props => {
    return(
    <RoundCorners 
        onPress = {props.buttonPress}
        py = {2}
        px ={2}>
        <Text style={{fontWeight: 'bold'}} fontSize={1}
        color = "#1E90FF">{props.text}</Text>
    </RoundCorners>)
}