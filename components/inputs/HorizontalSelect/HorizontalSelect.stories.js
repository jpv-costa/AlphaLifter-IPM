import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs/react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { SafeAreaView, View, Dimensions } from "react-native";
import { HorizontalSelect } from "../HorizontalSelect/HorizontalSelect";

const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const { width } = Dimensions.get("window");

storiesOf("Horizontal Select", module)
    // The ThemeProvider feeds the theme options to the components scope
    // (therefore the component can use them),
    // and centers the component in the screen
    .addDecorator(story => (
        <SafeAreaView style={{ flex: 1 }}>
            <ThemeProvider theme={theme}>
                <CenteredView>{story()}</CenteredView>
            </ThemeProvider>
        </SafeAreaView>
    ))
    .addDecorator(withKnobs)
    .add("HorizontalSelect", () => (
        <HorizontalSelect
            width={300}
            selectedValue={"volume-load"}
            onSelected={value =>
                console.log(
                    "You selected the option with value '" + value + "'"
                )
            }>
            <HorizontalSelect.SelectItem
                label='Volume Load'
                value='volume-load'
            />
            <HorizontalSelect.SelectItem
                label='Alloc Scalling'
                value='allometric-scalling'
            />
            <HorizontalSelect.SelectItem label='1 RM' value='one-rep-max' />
        </HorizontalSelect>
    ));
