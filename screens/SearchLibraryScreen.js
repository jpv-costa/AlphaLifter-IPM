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
import {DashboardWorkoutList} from "../components/List/DashboardWorkoutList"

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

    const {navigation} = this.props

    const type = navigation.getParam("type");

    let data;
    let placeholder;
    let searchProperties;
    let listType;

    if(type === "program"){
        data = programData;
        placeholder = "Type program name...";
        searchProperties = ["name"];
        listType = <DashboardProgramList data = {data} selectList/>
    }

    if(type === "workout"){
        data = workoutData;
        placeholder = "Type workout name...";
        searchProperties = ["name, muscles"];
        listType = <DashboardWorkoutList data = {data} selectList/>
    }

     return (
       <Search
        mt={5}
        data={data}
        placeholder={placeholder}
        searchProperties={searchProperties}>
        {listType}
    </Search>
     );

     }
}


const programData = [
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


const workoutData = [
    {
        id: 1,
        name: "Chest Flex",
        isCurrent: true,
        exercises: 3,
        muscles: "Chest, Shoulders",
        progress: "5%"
    },
    {
        id: 2,
        name: "Chest Build",
        isCurrent: false,
        exercises: 3,
        muscles: "Chest, Triceps",
        progress: "8%"
    },
    {
        id: 3,
        name: "Chest Strech",
        isCurrent: false,
        exercises: 5,
        muscles: "Chest, Shoulders",
        progress: "10%"
    }
];
