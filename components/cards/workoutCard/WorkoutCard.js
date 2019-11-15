import React, { useState } from "react";
import {StyleSheet, View, FlatList, Alert} from "react-native";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";
import {TouchableCard} from '../../atoms' 
import {List, ListItem} from 'react-native-elements';

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

/*export const WorkoutCardList = props => {
    const data = props.data;
    const listItems = data.map((element) =>
    <ListItem>
   <TouchableCard style = {styles.card}>
            <Text fontSize={4}
                    color = "black"
                    mt = {3}
                    mb = {3}
                    >{element.workoutName}</Text>
            <View style={styles.container}>
                <View flex = {1} width="50%">
                    <Text 
                        fontSize = {3}
                        mt = {2}
                        >{element.exercises} exercises
                    </Text>
                </View>
                <Separator  mt = {2}/>   
                <View flex = {1} width="50%">
                    <Text 
                        fontSize = {3}
                        mt = {2}>{element.time}
                    </Text>
                </View>
            </View>
            <TrainedMusclesTitle fontSize = {2} mt = {3}>Trained Muscles</TrainedMusclesTitle>
            <Text fontSize = {3} mb = {3}>{element.muscles}</Text>
            </TouchableCard>
            </ListItem>
           
  );
    return(<List>{listItems}</List>)
}

WorkoutCardList.defaultProps = {
    width : 150
}*/
export const WorkoutCardList = props => {
    const  data = props.data;
    return (
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) =>{ 
          console.log(item.workoutName);
          return (
          
            <TouchableCard style = {styles.card}>
              <Text fontSize={4}
                      color = "black"
                      mt = {3}
                      mb = {3}
                      >{item.workoutName}</Text>
              <View style={styles.container}>
                  <View flex = {1} width="50%">
                      <Text 
                          fontSize = {3}
                          mt = {2}
                          >{item.exercises} exercises
                      </Text>
                  </View>
                  <Separator  mt = {2}/>   
                  <View flex = {1} width="50%">
                      <Text 
                          fontSize = {3}
                          mt = {2}>{item.time}
                      </Text>
                  </View>
              </View>
              <TrainedMusclesTitle fontSize = {2} mt = {3}>Trained Muscles</TrainedMusclesTitle>
              <Text fontSize = {3} mb = {3}>{item.muscles}</Text>
            </TouchableCard>
          );
        }}
        keyExtractor={item => item.id}
      />
    );

  };

