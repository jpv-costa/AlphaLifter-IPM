import React, { useState } from "react";
import {
    Image,
    Platform,
    StyleSheet,
    SafeAreaView,
    Dimensions
} from "react-native";
import styled from "styled-components";
import { color, space, layout, size, typography, flexbox } from "styled-system";
import { Icon } from "../components/Icon/Icon";
import Search from "../components/Search/Search" 
import {DashboardProgramList} from "../components/List/DashboardProgramList"

const { width } = Dimensions.get("window");

const ScrollView = styled.ScrollView`
    ${space}
    ${layout}
    ${flexbox}
    ${color}
`;

const TouchableOpacity = styled.TouchableOpacity`
    ${space}
    ${layout}
    ${flexbox}
    ${color}
`;

const View = styled.View`
    ${space}
    ${layout}
    ${flexbox}
    ${color}
`;

const Text = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    opacity : ${props => (props.opacity ? props.opacity : 1)};
`;



export default class SearchLibraryScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        };
    };

render() {
     return (
        <Search
        mt={5}
        data={programDashboardData}
        placeholder={"Type the muscle..."}
        searchProperties={["name"]}>
         <DashboardProgramList
            data={programDashboardData}
            selectList
        />
    </Search>
     );



     }

}


const programDashboardData = [
    {
        id: 1,
        name: "High Volume Program",
        isCurrent: true,
        cycles: 5,
        workouts: 5,
        progress: "5%"
    },
    {
        id: 2,
        name: "Low Volume Program",
        isCurrent: false,
        cycles: 4,
        workouts: 3,
        progress: "7%"
    },
    {
        id: 3,
        name: "High Volume Program",
        isCurrent: false,
        cycles: 5,
        workouts: 5,
        progress: "5%"
    }
];


const musclesDashboardData = [
    {
        id: 1,
        muscle: "Biceps",
        icon: {
            view: "front-upper"
        }
    },
    {
        id: 2,
        muscle: "Chest",
        icon: {
            view: "front-upper"
        }
    },
    {
        id: 3,
        muscle: "Chest",
        icon: {
            view: "front-upper"
        }
    }
];

const exercisesDashboardData = [
    {
        id: 1,
        icon: {
            primaryMuscles: ["chest"],
            secondaryMuscles: ["biceps"],
            view: "front-upper"
        },
        name: "Bench Press",
        variations: ["Incline, Dumbbell variation"]
    },
    {
        id: 2,
        icon: {
            primaryMuscles: ["biceps"],
            secondaryMuscles: [],
            view: "front-upper"
        },
        name: "Barbell Rows",
        variations: ["Decline, Dumbbell variation"]
    },
    {
        id: 3,
        icon: {
            primaryMuscles: ["abs"],
            secondaryMuscles: [],
            view: "front-upper"
        },
        name: "Shoulder Press",
        variations: ["Standing, Dumbbell variation"]
    }
];


