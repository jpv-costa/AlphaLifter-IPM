import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { MyButton, RoundButton,RoundCornersButton } from "./Button";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { FormButtons } from "./FormButtons";
import { SafeAreaView, Alert, View } from "react-native";

const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const onItemPress = item => {
    console.log("You pressed item '" + item.title + "'");
};

storiesOf("Buttons", module)
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
    .add("MyButton", () => (
        <View style={{height: 50, width: 200}}>
            <MyButton name={'My Button'} secondaryLight height={50} width={200}/>
        </View>
    ))
    .add("Form Buttons", () => (
        <FormButtons />
    ))
    .add("RoundButton", () => (
        <RoundButton buttonPress={ButtonPress} text='MyButton' />
    ))
    .add("RoundCornersButton", () => (
        <RoundCornersButton buttonPress={ButtonPress} text='MyButton' />
    ));

function ButtonPress() {
    Alert.alert("You pressed the button");
}
