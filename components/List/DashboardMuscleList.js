import React from "react";
import { List } from "./List";

export const DashboardMuscleList = props => {
    const { data, ...other } = props;

    const parsedData = data.map(item => {
        const { id, muscle, progress, selected} = item;
        
        return {
            id: id,
            iconId: muscle.toLowerCase(),
            title: muscle,
            extraInfo: progress,
            muscleIcon: true,
            selected: selected
        };
    });

    console.log(parsedData)
    return <List data={parsedData} {...other} />;
};


