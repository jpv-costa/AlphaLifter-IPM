import React from "react";
import { List } from "./List";

export const DashboardWorkoutList = props => {
    const { data, selectedId, onItemPress, ...other } = props;

    const parsedData = data.map(item => {
        const {
            id,
            name,
            isCurrent,
            exercises,
            muscles,
            progress,
            selected
        } = item;

        return {
            id: id,
            title: name + (isCurrent ? " (current)" : ""),
            extraInfo: progress,
            description: exercises + " exercises which evolve " + muscles + ",...",
            selected: selected
        };
    });

    return (
        <List
            onItemPress={index => onItemPress(data[index])}
            data={parsedData}
            selectedId={selectedId}
            {...other}
        />
    );
};
