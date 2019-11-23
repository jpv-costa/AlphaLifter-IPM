import React from "react";
import { List } from "./List";

export const DashboardExerciseList = props => {
    const { data, selectedId, onItemPress, ...other } = props;
    // console.log(data);
    const parsedData = data.map(item => {
        const { id, name, variations, progress, selected, icon } = item;

        return {
            id: id,
            icon: {
                id: "muscles",
                primaryMuscles: icon.primaryMuscles,
                secondaryMuscles: icon.secondaryMuscles,
                view: icon.view
            },
            title: name,
            extraInfo: progress,
            description:
                variations.join(", ") +
                ", mainly " +
                icon.primaryMuscles.join(" ") +
                " focused",
            selected: selected
        };
    });
    // console.log(data);

    return (
        <List
            onItemPress={index => onItemPress(data[index], index)}
            data={parsedData}
            {...other}
            selectedId={selectedId}
        />
    );
};
