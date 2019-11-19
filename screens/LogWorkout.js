import React,{Component} from 'react';
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";
import {Alert,StyleSheet,View} from 'react-native';
import {WorkoutTimer}from '../components/workoutTime/WorkoutTime'
import {ExerciseInput} from '../components/workoutTime/ExerciseInput'
import {RoundButton} from '../components/button/Button'
import {EquipmentTypes,ConfiguredExerciseList} from '../components/workouts/Exercises/Exercise'
import { object } from "@storybook/addon-knobs/react";

 export default class LogWorkout extends Component {
    constructor(props){
        super(props);
        this.state = {log: true}
    }
    toggleLog = () => this.setState(prevState => ({ log: !prevState.log }))
   
    onPlayPress(){
        Alert.alert("You pressed play");
    }
    
     onMinusPress() {
        Alert.alert("You pressed minus");
    }
     onPlusPress() {
        Alert.alert("You pressed plus");
    };
     onReplayPress() {
        Alert.alert("You pressed replay");
    };
    ButtonPress(){
        Alert.alert("Press");
    }
    data = [
        {   id: "1",
            time: "01:30min",
            percentage: "77",
            elapsed:"00:44:34"
        }
        ];
    
        styles = StyleSheet.create({
        timer: {
            justifyContent: 'center',
            alignSelf: 'center'
        }, view: {
            flex : 1,
            flexDirection: 'column' ,
            justifyContent: 'space-between',
        }    
      });

    render(){
    return (
        <View style = {this.styles.view} >
            <WorkoutTimer  style = {this.styles.timer}
                           onMinusPress = {this.onMinusPress} 
                           onPlusPress = {this.onPlusPress} 
                           onPlayPress = {this.onPlayPress} 
                           onReplayPress = {this.onReplayPress} 
                           data = {this.data}/>
          
         {this.state.log ? <ExerciseInputFinal toggleLog = {this.toggleLog}/> 
           : <ConfiguredExerciseListFinal toggleLog = {this.toggleLog} />}
          
           <RoundButton buttonPress = {this.ButtonPress} 
                        text = "Finish"/>
         
        </View>
    );

    }
}

class ExerciseInputFinal extends Component {

    render() {
        return (
            <ExerciseInput defaultReps = "12"
                            defaultKG = "40"
                            defaultRIRMin = "1" 
                            defaultRIRMax = "3" 
                            exIndex = "1"
                           onPress = {this.props.toggleLog}/>
        );
    }

}

class ConfiguredExerciseListFinal extends Component {


    exercise = [
        {
            id: 1,
            icon: {
                primaryMuscles: ["chest"],
                secondaryMuscles: ["abs"],
                view: "front-upper"
            },
            name: "Bench Press",
            completed: true,
            estimatedDuration: "+/- 30min",
            equipment: EquipmentTypes.dumbbell,
            configuration: {
                1: {
                    sets: 1,
                    reps: {
                        min: 4,
                        max: 6
                    },
                    intensity: 0.8725,
                    RIR: {
                        min: 1,
                        max: 2
                    }  }  }  }
              
    ];
    render() {
        return (
            <ConfiguredExerciseList data = {object("data", this.exercise)} 
                                    onPress = {this.props.toggleLog} />
        );
    }
}




