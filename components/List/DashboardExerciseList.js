import React from "react";
import { List } from "./List";

export const DashboardExerciseList = props => {
    const { data, ...other } = props;

    const parsedData = data.map(item => {
        const {
            id,
            name,
            variations,
            primaryMuscles,
            secondaryMuscles,
            progress,
            selected,
            view
        } = item;

        return {
            id: id,
            icon: {
                id: "muscles",
                primaryMuscles: primaryMuscles,
                secondaryMuscles: secondaryMuscles,
                view: view
            },
            title: name,
            extraInfo: progress,
            description:
                variations.join(", ") +
                ", mainly " +
                primaryMuscles.join(" ") +
                " focused",
            selected: selected
        };
    });

    return <List data={parsedData} {...other} />;
};
