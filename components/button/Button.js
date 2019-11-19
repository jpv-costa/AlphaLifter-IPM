import React, { useState } from "react";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";

const Text = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    text-align: center;
`;

const Button = styled.TouchableOpacity`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
`;

export const MyButton = props => {
    return(
    <Button style = {{width : props.width, opacity: (props.disabled)?0.3:1} }
        onPress={props.onPress}
        bg= {props.secondaryDark ? "secondaryShades.1" : props.secondaryLight? "secondaryTints.0": "primary"}
        py = {3}
        px ={2}
        disabled={props.disabled}
    >
            
        <Text style={{fontWeight: 'bold'}} fontSize={4}
            color = "white.1">{props.name}</Text>
    </Button>)
}

MyButton.defaultProps = {
    width : 350
}

