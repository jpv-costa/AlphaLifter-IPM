import React, { useState } from "react";
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Dimensions
} from "react-native";
import { DashboardExerciseList } from "../components/List/DashboardExerciseList";
import { DashboardMuscleList } from "../components/List/DashboardMuscleList";
import { DashboardProgramList } from "../components/List/DashboardProgramList";
import { getDEMApoints } from "../utils";
import { PaginatedLineChart } from "../components/charts/PaginatedLineChart/PaginatedLineChart";
import Navigator from "../components/navigation/TabNavigator";
import styled from "styled-components";
import { HorizontalSelect } from "../components/inputs/HorizontalSelect/HorizontalSelect";
import { color, space, layout, size, typography, flexbox } from "styled-system";
import { extent, max, min, ascending } from "d3-array";

const { width } = Dimensions.get("window");

const View = styled.View`
    ${space}
    ${layout}
    ${flexbox}
    ${color}
`;

const ChangeContainer = styled.View`
    ${space}
    ${layout}
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    opacity : ${props => (props.opacity ? props.opacity : 1)};
`;

export function ProgressScreen(props) {
    const [data, setData] = useState({
        id: 1,
        data: oneRepMaxes["1"]
    });

    console.disableYellowBox = true;

    const content = [
        <DashboardProgramList
            key={"programs"}
            selectedId={1}
            data={programDashboardData}
            selectList
            onItemPress={item =>
                setData({ id: item.id, data: oneRepMaxes[item.id] })
            }
        />,
        <DashboardMuscleList
            key={"muscles"}
            selectedId={1}
            data={musclesDashboardData}
            selectList
            onItemPress={item =>
                setData({ id: item.id, data: oneRepMaxes[item.id] })
            }
        />,
        <DashboardExerciseList
            key={"exercises"}
            selectedId={1}
            data={exercisesDashboardData}
            selectList
            onItemPress={item =>
                setData({ id: item.id, data: oneRepMaxes[item.id] })
            }
        />
    ];

    const startingValue = data.data[0].y;
    const endingValue = data.data[data.data.length - 1].y;

    const percentGain = ((endingValue / startingValue - 1) * 100).toFixed(1);

    return (
        <React.Fragment>
            <View mt={3} justifyContent='center' alignItems='center'>
                <HorizontalSelect
                    width={300}
                    selectedValue={1}
                    onSelected={value =>
                        setData({ id: value, data: oneRepMaxes[value] })
                    }>
                    <HorizontalSelect.SelectItem
                        label='Volume Load'
                        value={1}
                    />
                    <HorizontalSelect.SelectItem
                        label='Alloc Scalling'
                        value={2}
                    />
                    <HorizontalSelect.SelectItem label='1 RM' value={3} />
                </HorizontalSelect>
            </View>
            <ChangeContainer mt={3} mb={4}>
                <Text fontSize={5} opacity={0.5} fontWeight='bold'>
                    {percentGain + " %" + (percentGain > 0 ? " gain" : " loss")}
                </Text>
                <Text mt={1} fontSize={2} opacity={0.5}>
                    {startingValue + "kg - " + endingValue + "kg"}
                </Text>
            </ChangeContainer>
            <PaginatedLineChart
                dataTrendFunction={points => getDEMApoints(points, 7)}
                dataPoints={data.data}
                height={200}
                pageSize={7}
                pageNumber={1}
            />
            <Navigator width={width} header={header} tabContent={content} />
        </React.Fragment>
    );
}

ProgressScreen.navigationOptions = {
    title: "Progress"
};

const oneRepMaxes = {
    1: [
        { date: new Date(2018, 10, 10), y: 74.1 },
        { date: new Date(2018, 10, 11), y: 72.7 },
        { date: new Date(2018, 10, 12), y: 73.2 },
        { date: new Date(2018, 10, 13), y: 73.2 },
        { date: new Date(2018, 10, 14), y: 72 },
        { date: new Date(2018, 10, 15), y: 72 },
        { date: new Date(2018, 10, 20), y: 100 },
        { date: new Date(2018, 10, 21), y: 102 },
        { date: new Date(2018, 10, 22), y: 108 },
        { date: new Date(2018, 10, 23), y: 105 },
        { date: new Date(2018, 10, 24), y: 115 },
        { date: new Date(2018, 10, 25), y: 120 }
    ],
    2: [
        { date: new Date(2018, 10, 14), y: 72 },
        { date: new Date(2018, 10, 15), y: 72 },
        { date: new Date(2018, 10, 16), y: 71 },
        { date: new Date(2018, 10, 17), y: 72 },
        { date: new Date(2018, 10, 18), y: 98 },
        { date: new Date(2018, 10, 19), y: 110 },
        { date: new Date(2018, 10, 20), y: 100 },
        { date: new Date(2018, 10, 21), y: 122 },
        { date: new Date(2018, 10, 22), y: 108 },
        { date: new Date(2018, 10, 23), y: 135 },
        { date: new Date(2018, 10, 24), y: 115 },
        { date: new Date(2018, 10, 25), y: 150 }
    ],
    3: [
        { date: new Date(2018, 10, 10), y: 76.1 },
        { date: new Date(2018, 10, 11), y: 72.7 },
        { date: new Date(2018, 10, 12), y: 73.2 },
        { date: new Date(2018, 10, 13), y: 73.2 },
        { date: new Date(2018, 10, 14), y: 72 },
        { date: new Date(2018, 10, 15), y: 72 },
        { date: new Date(2018, 10, 16), y: 73 },
        { date: new Date(2018, 10, 17), y: 72 },
        { date: new Date(2018, 10, 18), y: 98 },
        { date: new Date(2018, 10, 19), y: 110 },
        { date: new Date(2018, 10, 20), y: 100 },
        { date: new Date(2018, 10, 21), y: 102 },
        { date: new Date(2018, 10, 22), y: 108 },
        { date: new Date(2018, 10, 23), y: 105 },
        { date: new Date(2018, 10, 24), y: 115 },
        { date: new Date(2018, 10, 25), y: 120 }
    ],
    4: [
        { date: new Date(2018, 10, 10), y: 74.1 },
        { date: new Date(2018, 10, 11), y: 72.7 },
        { date: new Date(2018, 10, 20), y: 100 },
        { date: new Date(2018, 10, 21), y: 102 },
        { date: new Date(2018, 10, 22), y: 108 },
        { date: new Date(2018, 10, 23), y: 105 },
        { date: new Date(2018, 10, 24), y: 115 },
        { date: new Date(2018, 10, 25), y: 120 }
    ],
    5: [
        { date: new Date(2018, 10, 14), y: 72 },
        { date: new Date(2018, 10, 15), y: 72 },
        { date: new Date(2018, 10, 16), y: 71 },
        { date: new Date(2018, 10, 17), y: 72 },
        { date: new Date(2018, 10, 18), y: 98 },
        { date: new Date(2018, 10, 19), y: 110 },
        { date: new Date(2018, 10, 20), y: 100 },
        { date: new Date(2018, 10, 21), y: 122 },
        { date: new Date(2018, 10, 22), y: 108 },
        { date: new Date(2018, 10, 25), y: 150 }
    ],
    6: [
        { date: new Date(2018, 10, 10), y: 76.1 },
        { date: new Date(2018, 10, 11), y: 72.7 },
        { date: new Date(2018, 10, 12), y: 73.2 },
        { date: new Date(2018, 10, 13), y: 73.2 },
        { date: new Date(2018, 10, 14), y: 72 },
        { date: new Date(2018, 10, 15), y: 72 },
        { date: new Date(2018, 10, 16), y: 73 },
        { date: new Date(2018, 10, 17), y: 72 },
        { date: new Date(2018, 10, 18), y: 98 },
        { date: new Date(2018, 10, 22), y: 108 },
        { date: new Date(2018, 10, 23), y: 105 },
        { date: new Date(2018, 10, 24), y: 115 },
        { date: new Date(2018, 10, 25), y: 120 }
    ]
};

const musclesDashboardData = [
    {
        id: 1,
        muscle: "Biceps",
        icon: {
            view: "front-upper"
        },
        progress: "+5%"
    },
    {
        id: 2,
        muscle: "Chest",
        icon: {
            view: "front-upper"
        },
        progress: "+7%"
    },
    {
        id: 3,
        muscle: "Abs",
        icon: {
            view: "front-upper"
        },
        progress: "+7%"
    }
];

const exercisesDashboardData = [
    {
        id: 1,
        icon: {
            primaryMuscles: ["biceps"],
            secondaryMuscles: [],
            view: "front-upper"
        },
        name: "Bicep Curls",
        variations: ["Standing, Dumbbell variation"],
        progress: "+15%"
    },
    {
        id: 2,
        icon: {
            primaryMuscles: ["chest"],
            secondaryMuscles: [],
            view: "front-upper"
        },
        name: "Bench Press",
        variations: ["Incline, Dumbbell variation"],
        progress: "+10%"
    },
    {
        id: 3,
        icon: {
            primaryMuscles: ["quads"],
            secondaryMuscles: [],
            view: "front-lower"
        },
        name: "Leg Extension",
        variations: ["Machine variation"],
        progress: "+10%"
    }
];

const programDashboardData = [
    {
        id: 1,
        name: "High Volume Program",
        isCurrent: true,
        cycles: 5,
        workouts: 5,
        progress: "+5%"
    },
    {
        id: 2,
        name: "Low Volume Program",
        isCurrent: false,
        cycles: 4,
        workouts: 3,
        progress: "+7%"
    },
    {
        id: 3,
        name: "German Volume Program",
        isCurrent: false,
        cycles: 5,
        workouts: 5,
        progress: "+5%"
    },
    {
        id: 4,
        name: "Beginner Powerlifting Program",
        isCurrent: false,
        cycles: 5,
        workouts: 5,
        progress: "+5%"
    },
    {
        id: 5,
        name: "Advanced Bodybuilding Program",
        isCurrent: false,
        cycles: 4,
        workouts: 3,
        progress: "+7%"
    },
    {
        id: 6,
        name: "Intermediate Powerlifting Program",
        isCurrent: false,
        cycles: 5,
        workouts: 5,
        progress: "+5%"
    }
];

const header = ["Programs", "Muscles", "Exercises"];
