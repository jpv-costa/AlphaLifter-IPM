import React from "react";
import { List } from "../../List/List";
import { round } from "../../../utils";

//Constants that enumerate the available exercise equipment types
export const EquipmentTypes = Object.freeze({
    dumbbell: 1,
    cables: 2,
    barbell: 3
});

export const ConfiguredExerciseList = props => {
    const { data, ...other } = props;

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
            iconId: "dumbbell",
            title: name,
            extraInfo: estimatedDuration,
            description: description
        };
    });

    return <List data={parsedData} muscleIcon {...other} />;
};
