import React, { useState } from "react";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";
import { List } from "../../List/List";
import { round } from "../../../utils";
import { Icon } from "../../Icon/Icon";

//Constants that enumerate the available exercise equipment types
export const EquipmentTypes = Object.freeze({
    dumbbell: 1,
    cables: 2,
    barbell: 3
});

const ListItem = styled.TouchableOpacity`
    ${space}
    ${layout}
    flex-direction: row;
    align-items: center;
    background-color: ${props =>
        props.selected ? props.theme.colors.secondaryTints[4] : "transparent"};
`;

const Text = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
`;

const ListContent = styled.View`
    ${space}
    ${layout}
    flex-direction: column;
    flex-grow: 1;
`;

const ListHeader = styled.View`
    flex-direction: row;
    justify_content: space-between;
`;

export const ConfiguredExerciseList = props => {
    const { data } = props;

    const parsedData = data.map(item => {
        const { id, name, estimatedDuration, configuration } = item;

        sets = isNaN(configuration["1"].sets)
            ? configuration["1"].sets.min + "-" + configuration["1"].sets.max
            : configuration["1"].sets;
        reps = isNaN(configuration["1"].reps)
            ? configuration["1"].reps.min + "-" + configuration["1"].reps.max
            : configuration["1"].reps;
        RIR = isNaN(configuration["1"].RIR)
            ? configuration["1"].RIR.min + "-" + configuration["1"].RIR.max
            : configuration["1"].RIR;
        intensity = isNaN(configuration["1"].intensity)
            ? round(100 * configuration["1"].intensity.min, 2) +
              "-" +
              round(100 * configuration["1"].intensity.max, 2)
            : round(100 * configuration["1"].intensity, 2);

        const description =
            sets +
            (sets == 1 ? " set" : " sets") +
            " x " +
            reps +
            (reps == 1 ? " rep" : " reps") +
            " x " +
            intensity +
            "% @" +
            RIR +
            " RIR" +
            (configuration.hasOwnProperty("2") ? ", ..." : "");

        return {
            id: id,
            iconId: "dumbbell-with-circle",
            title: name,
            extraInfo: estimatedDuration,
            description: description
        };
    });

    return <List data={parsedData} />;
};
