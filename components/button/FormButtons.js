import React, { useState } from "react";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";
import { MyButton } from "./Button";
import { View, Dimensions } from "react-native";

const CenterButtons = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-content: flex-end;
`;

export const FormButtons = props => {
    const { onNext, onPrevious, disableNext, disablePrevious } = props;

    console.log("botao width " + props.width);

    return (
        <CenterButtons style={{ width: "100%" }}>
            <MyButton
                name={"Back"}
                secondaryLight
                onPress={onPrevious}
                disabled={disablePrevious}
                width={props.width}
            />
            <MyButton
                name={disableNext ? "Finish" : "Next"}
                secondaryLight
                onPress={onNext}
                width={props.width}
            />
        </CenterButtons>
    );
};

FormButtons.defaultProps = {
    width: "45%"
};
