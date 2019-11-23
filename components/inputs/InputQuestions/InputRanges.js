import React, { useState } from "react";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";

const Text = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
`;

const CenterItem = styled.View`
    align-items: flex-start;
    flex: 1;
    justify-content: flex-start;
`;

const UserInput = styled.View`
  flexWrap: wrap
  flexDirection: row;
  justify-content: flex-start;
  align-items: center;
`;

const TextInput = styled.TextInput`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${size}
`;

export class RangeInput extends React.Component {
    state = {
        opacity: 0.2
    };

    firstInput = React.createRef();
    secondInput = React.createRef();

    render() {
        const { placeholder1, rangeDivision, placeholder2 } = this.props;

        const nextInput = () => {
            this.secondInput.current.focus();
        };

        const previousInput = () => {
            this.firstInput.current.focus();
        };

        return (
            <CenterItem>
                <UserInput>
                    <TextInput
                        fontSize={8}
                        ref={this.firstInput}
                        placeholder={placeholder1}
                        autoCorrect={false}
                        keyboardType={"numeric"}
                        maxFontSizeMultiplier={4}
                        maxLength={2}
                        multiline={false}
                        onChangeText={text => {
                            if (text.length == 2) {
                                nextInput();
                                this.setState({ opacity: 1 });
                            }
                        }}></TextInput>
                    <Text fontSize={8} mx={3} opacity={this.state.opacity}>
                        {rangeDivision}
                    </Text>
                    <TextInput
                        fontSize={8}
                        ref={this.secondInput}
                        autoCorrect={false}
                        keyboardType={"numeric"}
                        maxFontSizeMultiplier={4}
                        maxLength={2}
                        multiline={false}
                        placeholder={placeholder2}
                        onChangeText={text => {
                            if (text.length == 0) {
                                previousInput();
                                this.setState({ opacity: 0.2 });
                            }
                        }}></TextInput>
                </UserInput>
            </CenterItem>
        );
    }
}
