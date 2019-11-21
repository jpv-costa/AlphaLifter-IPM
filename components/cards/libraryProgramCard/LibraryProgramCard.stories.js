import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { LibraryProgramCard } from "./LibraryProgramCard";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { SafeAreaView } from "react-native";

const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const onItemPress = item => {
    console.log("You pressed item '" + item.title + "'");
};

storiesOf("Cards", module)
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
    .add("LibraryProgramCard", () => (
        <LibraryProgramCard
            programCardData={programCardData}
            onPress={onItemPress}
        />
    ));

const programCardData = {
    title: "High Volume Program",
    value: [
        {
            id: 2,
            title: "Frequency",
            value: "3"
        },

        {
            id: 3,
            title: "Cycles",
            value: "4"
        },

        {
            id: 4,
            title: "Workouts/Cycle",
            value: "7"
        },
        {
            id: 5,
            title: "Workout Duration",
            value: "1h10m"
        }
    ]
};
