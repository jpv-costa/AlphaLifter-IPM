import React, { useState } from "react";
import {StyleSheet, View, FlatList, Alert} from "react-native";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";
import {Card} from '../atoms' 

const WorkoutName = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    textAlign : center;
`;
const Text = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    textAlign : center;
    flex:1;
    `;

const TrainedMusclesTitle = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    textAlign : center;
    opacity : 0.5;
    `; 
 


    const Button = styled.TouchableOpacity`
        ${space}
        ${layout}
        ${color}
        ${typography}
        ${size}
 
`;

const Separator = styled.View`
        ${space}
        ${layout}
        ${color}
        ${typography}
        ${size}
        width: 1;
        height:20;
        backgroundColor:black;
`;



const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    card: {
        width: 220
    } 
    
  });

const WorkoutCard = props => {
    const {workoutName,exercises, time, muscles} = props;
    return(
        <Card style = {styles.card}>
            <WorkoutName fontSize={4}
                    color = "black"
                    mt = {3}
                    mb = {3}
                    >{workoutName}</WorkoutName>
            <View style={styles.container}>
                <View flex = {1} width="50%">
                    <Text 
                        fontSize = {3}
                        mt = {2}
                        >{exercises} exercises
                    </Text>
                </View>
                <Separator  mt = {2}/>   
                <View flex = {1} width="50%">
                    <Text 
                        fontSize = {3}
                        mt = {2}>{time}
                    </Text>
                </View>
            </View>
            <TrainedMusclesTitle fontSize = {2} mt = {3}>Trained Muscles</TrainedMusclesTitle>
            <Text fontSize = {4} mb = {3}>{muscles}</Text>
            </Card>)
}

WorkoutCard.defaultProps = {
    width : 150
}
export const WorkoutCardList = props => {
    const  data = props.data;
    
    return (
      <FlatList
        data={data}
        style={{ width: "100%" }}
        renderItem={({ item }) => (
          <WorkoutCard
            id={item.id}
            workoutName={item.workoutName}
            exercises = {item.exercises}
            time={item.time}
            muscles={item.muscles} 
          />
        )}
        keyExtractor={item => item.id}
      />
    );
  };

