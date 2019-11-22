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
    const { data, onItemPress, ...other } = props;

    const parsedData = data.map(item => {
        const { id, icon, name, estimatedDuration, configuration } = item;

        sets = isNaN(configuration["1"].sets)
            ? configuration["1"].sets.min + "-" + configuration["1"].sets.max
            : configuration["1"].sets;
        reps = isNaN(configuration["1"].reps)
            ? configuration["1"].reps.min + "-" + configuration["1"].reps.max
            : configuration["1"].reps;
        RIR = isNaN(configuration["1"].RIR)
            ? configuration["1"].RIR.min + "-" + configuration["1"].RIR.max
            : configuration["1"].RIR;
        weight = isNaN(configuration["1"].weight)
            ? configuration["1"].weight.min +
              "-" +
              configuration["1"].weight.max
            : configuration["1"].weight;

        const description =
            sets +
            (sets == 1 ? " set" : " sets") +
            " x " +
            reps +
            (reps == 1 ? " rep" : " reps") +
            " x " +
            weight +
            "kg @" +
            RIR +
            " RIR" +
            (configuration.hasOwnProperty("2") ? ", ..." : "");

        return {
            id: id,
            icon: {
                id: "muscles",
                primaryMuscles: icon.primaryMuscles.map(muscle =>
                    muscle.toLowerCase()
                ),
                secondaryMuscles: icon.secondaryMuscles.map(muscle =>
                    muscle.toLowerCase()
                ),
                view: icon.view
            },
            title: name,
            extraInfo: estimatedDuration,
            description: description
        };
    });

    // console.log(data[0]);

    return (
        <List
            onItemPress={index => onItemPress(data[index])}
            data={parsedData}
            iconType={"id"}
            {...other}
        />
    );
};
