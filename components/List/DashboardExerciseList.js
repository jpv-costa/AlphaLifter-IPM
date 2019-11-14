import React from "react";
import { List } from "./List";

export const DashboardExerciseList = props => {
    const { data, ...other } = props;

    const parsedData = data.map(item => {
        const { id, name, variations, primaryMuscles, secondaryMuscles, progress, selected} = item;
        
        return {
            id: id,
            iconId: 
                {   
                    primaryMuscles: primaryMuscles,
                    secondaryMuscles: secondaryMuscles
                },
            title: name,
            extraInfo: progress,
            description: variations.join(", ") + ", mainly " + primaryMuscles.join(" ") + " focused",
            iconType: "muscles",
            selected: selected
        };
    });

    console.log(parsedData)
    return <List data={parsedData} {...other} />;
};


