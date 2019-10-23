import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { List } from "./List";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { SafeAreaView } from "react-native";

const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

storiesOf("Lists", module)
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
    .add("List", () => <List data={data} />);

const data = [
    {
        id: 1,
        iconId: "dumbbell-with-circle",
        title: "Lorem ipsum",
        extraInfo: "10min",
        description:
            "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {
        id: 2,
        iconId: "dumbbell-with-circle",
        title: "Ut labore et",
        extraInfo: "10min",
        description:
            "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
    },
    {
        id: 3,
        iconId: "dumbbell-with-circle",
        title: "Exercitation ullamco laboris nisi",
        extraInfo: "10min",
        description:
            "Ut aliquip ex ea commodo consequat. Duis aute irure dolor in"
    },
    {
        id: 4,
        iconId: "dumbbell-with-circle",
        title: "Reprehenderit in voluptate",
        extraInfo: "10min",
        description:
            "Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint"
    }
];
