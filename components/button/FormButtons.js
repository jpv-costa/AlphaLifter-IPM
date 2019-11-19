import React, { useState } from "react";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";
import { MyButton } from "./Button";
import { View } from "react-native";

const CenterButtons = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    margin: 1% 0;
    padding: 0;
    max-height: 60;
`;

const dividerPercentage = 0.04;
const halfScreen = 400 / 2.0; //TODO buscar screen dinamicamente o tamanho
let dividerSize = halfScreen - halfScreen * (1 - dividerPercentage);
const buttonSize = halfScreen - dividerSize / 2.0;
dividerSize = dividerSize;
console.log(dividerSize);

export const FormButtons = props => {
    const { onNext, onPrevious, disableNext, disablePrevious } = props;
    console.log(disablePrevious);

    return (
        <CenterButtons>
            <MyButton
                name={"Back"}
                secondaryLight
                width={buttonSize}
                onPress={onPrevious}
                disabled={disablePrevious}
            />
            <View style={{ color: "white", width: dividerSize }} />
            <MyButton
                name={(disableNext)?"Finish":"Next"}
                secondaryLight
                width={buttonSize}
                onPress={onNext}
            />
        </CenterButtons>
    );
};
