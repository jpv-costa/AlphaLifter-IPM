import React from "react";
import { List } from "./List";

export const DashboardMuscleList = props => {
    const { data, selectedId, onItemPress, ...other } = props;

    const parsedData = data.map(item => {
        const { id, progress, selected, muscle, icon } = item;

        return {
            id: id,
            icon: {
                id: "muscles",
                primaryMuscles: [muscle.toLowerCase()],
                secondaryMuscles: [],
                view: icon.view
            },
            title: muscle,
            extraInfo: progress,
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
