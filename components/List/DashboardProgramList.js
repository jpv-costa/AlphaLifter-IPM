import React from "react";
import { List } from "./List";

export const DashboardProgramList = props => {
    const { data, ...other } = props;

    const parsedData = data.map(item => {
        const { id, name, isCurrent, cycles, workouts, progress, selected} = item;
        
        return {
            id: id,
            iconId: {},
            title: name + (isCurrent ? " (current)" : ""),
            extraInfo: progress,
            description: cycles + " cycles of " + workouts + " workouts",
            iconType: "none",
            selected: selected
        };
    });

    console.log(parsedData)
    return <List data={parsedData} {...other} />;
};


