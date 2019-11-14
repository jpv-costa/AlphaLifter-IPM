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

const Button = styled.TouchableOpacity`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    borderRadius: 25;

`;

export const MyButton = props => {
    return(<Button style ={{width : props.width} }
    bg= {props.secondaryDark?"secondaryShades.1": props.secondaryLight? "secondaryTints.0":"primary"}
    py = {3}
    px ={2}
    >
        <Text style={{fontWeight: 'bold'}} fontSize={4}
        color = "white.1">My Button</Text>
    </Button>)
}

MyButton.defaultProps = {
    width : 350
}

