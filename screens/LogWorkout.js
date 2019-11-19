import React,{Component} from 'react';
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {WorkoutTimer}from '../components/workoutTime/WorkoutTime'
import {ExerciseInput} from '../components/workoutTime/ExerciseInput'
import {RoundButton} from '../components/button/Button'
import { EquipmentTypes} from '../components/workouts/Exercises/Exercise'


 class LogWorkout extends Component {
    constructor(props){
        super(props);
        this.state = {log: false}
    }
    toggleLog = () => this.setState(prevState => ({ log: !prevState.log }))
   
   
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
                    }
                }
            }
        }
              
    ];
    
     data = [
    {
        id: "1",
        time: "01:30min",
        percentage: "77",
        elapsed:"00:44:34"
    }
    ];
    
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
    

    render(){
    return (
        <View>
            <WorkoutTimer  onMinusPress= {onMinusPress} onPlusPress={onPlusPress} 
            onPlayPress={onPlayPress} onReplayPress= {onReplayPress} data= {data}/>
          
           {this.state.log ? <ExerciseInputFinal defaultReps = "12" defaultKG= "40"
            defaultRIRMin= "1" defaultRIRMax= "3" exIndex = "1"
            toggleLogin={this.toggleLog}/> :
            <ConfiguredExerciseListFinal data={object("data", exercise)} 
            toggleLogin={this.toggleLog} />}
          
           <RoundButton buttonPress = {ButtonPress} text = "MyButton"/>
         
        </View>
    );

    }
}

class ExerciseInputFinal extends Component {

    render() {
        return (
            <ExerciseInput  onPress={this.props.toggleLog}/>
        );
    }

}

class ConfiguredExerciseListFinal extends Component {

    render() {
        return (
            <ConfiguredExerciseList  onPress={this.props.toggleLog} />
        );
    }
}

export default LogWorkout;


