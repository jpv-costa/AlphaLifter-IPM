import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { ConfiguredExercise, EquipmentTypes } from "./Exercise";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

storiesOf("Exercise", module)
    // The ThemeProvider feeds the theme options to the components scope
    // (therefore the component can use them),
    // and centers the component in the screen
    .addDecorator(story => (
        <ThemeProvider theme={theme}>
            <CenteredView>{story()}</CenteredView>
        </ThemeProvider>
    ))
    .addDecorator(withKnobs)
    .add("one_configuration - incompleted", () => (
        <ConfiguredExercise
            name={object("name", "Bench Press")}
            completed={false}
            estimatedDuration={object("duration", "+/- 30min")}
            equipment={EquipmentTypes.dumbbell}
            configuration={object(
                "configuration",
                "3 sets x 8 - 12 reps x 75% 1RM @ 1-3 RIR"
            )}
        />
    ));
