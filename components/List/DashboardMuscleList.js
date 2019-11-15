import React from "react";
import { List } from "./List";

export const DashboardMuscleList = props => {
    const { data, ...other } = props;

    const parsedData = data.map(item => {
        const { id, muscle, progress, selected, view } = item;

        return {
            id: id,
            icon: {
                id: "muscles",
                primaryMuscles: [muscle.toLowerCase()],
                secondaryMuscles: [],
                view: view
            },
            title: muscle,
            extraInfo: progress,
            selected: selected
        };
    });

    return <List data={parsedData} {...other} />;
};
