import React, { useState } from "react";
import { SafeAreaView, Dimensions } from "react-native";
import styled from "styled-components";
import { color, space, layout, size, typography, flexbox } from "styled-system";
import { RoundCornersButton, RoundButton } from "../components/button/Button";
import { ActionButton } from "../components/button/Button";
import Navigator from "../components/navigation/TabNavigator";
import theme from "../components/theme";
import {DashboardExerciseList} from "../components/List/DashboardExerciseList"

const { width } = Dimensions.get("window");

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

const onItemPress = item => {
    console.log("You pressed item '" + item.id + "'");
};

export default class ProgramScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.getParam("type")
            
        };
    }

    render() {
        return(
    <View>
    <View mr={4} >
        <View>
        <Text fontSize={4} opacity={0.5} mt={4} ml={4} >
             Rest
        </Text>
        <Text fontSize={4} mt={2} ml = {4}>
             01:30
        </Text>
        </View>
        <View flexDirection = 'row' mt = {6} justifyContent = 'space-between'>
        <View flexDirection = 'row'  justifyContent = 'flex-start' ml = {4}>
        <Text fontSize={4}>
           Configuration
       </Text>
       </View>
     <View flexDirection = 'row' justifyContent = 'flex-end'>
     
         <View mr = {2}>
        <RoundCornersButton text='Add' 
        /*onPress =   *//>
         </View>
        <RoundCornersButton text='Re-order'/>
        </View>
        </View>
        </View>

        <View mt= {1} flex = {1} mt = {1} >
         <DashboardExerciseList
            data={exercisesDashboardData}
            selectList
            onItemPress={onItemPress}
          />
          </View>
          
       <View mt = {7}>
        <View ml = {4} mr = {4} mt = {6} >
        <View flexDirection= 'row' justifyContent= 'space-between'>  
        <Text fontSize={4}>
             Weight units: Kg
        </Text>
         <RoundCornersButton text='Change'/>
         </View>
         <View flexDirection= 'row' justifyContent= 'space-between' mt = {2}>
        <Text fontSize={4}>
             Smallest Increment: 2.5 Kg         
        </Text>
        <RoundCornersButton text='Change'/>
        </View>
        </View>
        <View px={4}>
        <ActionButton
                        mt = {5}
                        secondaryDark
                        text={"Finish"}
                        onPress = {() =>
                        this.props.navigation.navigate("Library")}
                    />
        </View>
        </View> 
        </View>
            )
         }
     };


     const exercisesDashboardData = [
        {
            id: 1,
            icon: {
                primaryMuscles: ["chest"],
                secondaryMuscles: ["biceps"],
                view: "front-upper"
            },
            name: "Load Progression",
            variations: ["Incline, Dumbbell variation"],
            progress: "10%"
        },
        {
            id: 2,
            icon: {
                primaryMuscles: ["chest"],
                secondaryMuscles: [],
                view: "front-upper"
            },
            name: "Set Progression",
            variations: ["Incline, Dumbbell variation"],
            progress: "10%"
        },
        {
            id: 3,
            icon: {
                primaryMuscles: ["chest"],
                secondaryMuscles: [],
                view: "front-upper"
            },
            name: "Set Progression",
            variations: ["Incline, Dumbbell variation"],
            progress: "10%"
        }
    ];
