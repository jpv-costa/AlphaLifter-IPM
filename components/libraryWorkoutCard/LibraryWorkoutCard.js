import React, { useState } from "react";
import {StyleSheet, FlatList, Alert} from "react-native";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";
import {Card} from '../atoms' ;

const Text = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    textAlign : center;
    flex:1;
    `;

    const RowContainer = styled.View`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    justifyContent: space-around;
    flexDirection: row;
    flex: 1;
`;

const ColumnContainer = styled.View`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    justifyContent: space-between;
    flexDirection: column;
    flex: 1;
`;

const FixedFileds = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    textAlign : center;
    opacity : 0.5;
    `; 
  

const CardContainer = styled.TouchableOpacity`
  ${space}
  ${layout}
  align-items: center;
  backgroundColor: blue;
  position: absolute;
`;



const styles = StyleSheet.create({
    card: {
        width: 350

    }  
  });

export const LibraryWorkoutCard = props => {
    
    return(
        <CardContainer py ={2}>
            <Card style = {styles.card}>
                <Text fontSize={4}
                        color = "black"
                        mt = {3}
                        mb = {3}>Lower Body Workout</Text>
                    <ColumnContainer flex = {1} width="50%" mt = {2}>
                        <FixedFileds fontSize = {3} mt = {2}>Main Muscle Groups</FixedFileds>
                        <Text fontSize = {4}>Quads and Back</Text>
                    </ColumnContainer>

            
                <RowContainer mt = {4} >
                    <ColumnContainer flex = {1} width="50%">
                        <FixedFileds fontSize = {3} mt = {2}>Number of Exercises</FixedFileds>
                        <Text fontSize = {4}>4</Text>
                    </ColumnContainer>

                    <ColumnContainer flex = {1} width="50%">
                        <FixedFileds fontSize = {3} mt = {2}>Average Duration</FixedFileds>
                        <Text fontSize = {4}> 01:00:30 </Text>
                    </ColumnContainer>
                </RowContainer>
                
                <Text mt = {4} mb = {3}>Tags: Bicep; Tricep</Text>
            </Card>
        </CardContainer>)
}

LibraryWorkoutCard.defaultProps = {
    width : 350
}


