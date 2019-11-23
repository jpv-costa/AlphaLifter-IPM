import React from "react";
import { List } from "./List";

export const DashboardProgramList = props => {
    const { data, selectedId, onItemPress, ...other } = props;

    const parsedData = data.map(item => {
        const {
            id,
            name,
            isCurrent,
            cycles,
            workouts,
            progress,
            selected
        } = item;

        return {
            id: id,
            title: name + (isCurrent ? " (current)" : ""),
            extraInfo: progress,
            description: cycles + " cycles of " + workouts + " workouts",
            selected: selected
        };
    });

    return (
        <List
            onItemPress={(index, selected) =>
                onItemPress(data[index], index, selected)
            }
            data={parsedData}
            selectedId={selectedId}
            {...other}
        />
    );
};
