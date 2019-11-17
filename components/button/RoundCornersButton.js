import React, { useState } from "react";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";


const RoundCorners = styled.TouchableOpacity`
${space}
${layout}
${color}
${typography}
${size}
backgroundColor: #00BCD4;
borderRadius:10;
borderWidth: 1;
borderColor: '#fff;

`;

export const RoundCornersButton = props => {
    return(<RoundCorners style ={{width : props.width} }
    bg= {props.secondaryDark?"secondaryShades.1": props.secondaryLight? "secondaryTints.0":"primary"}
    py = {3}
    px ={2}
    >
        <Text style={{fontWeight: 'bold'}} fontSize={4}
        color = "white.1">My Button</Text>
    </RoundCorners>)
}

RoundCornersButton.defaultProps = {
    width : 350
}