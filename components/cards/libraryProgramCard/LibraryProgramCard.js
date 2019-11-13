import React, { useState } from "react";
import {StyleSheet, FlatList, Alert} from "react-native";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";
import {TouchableCard} from '../../atoms' ;

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
  
    const Button = styled.TouchableOpacity`
        ${space}
        ${layout}
        ${color}
        ${typography}
        ${size}
 
`;





const styles = StyleSheet.create({
    card: {
        width: 350

    }  
  });

export const LibraryProgramCard = props => {
    return(
        <TouchableCard style = {styles.card}>
            <Text fontSize={4}
                    color = "black"
                    mt = {3}
                    mb = {3}>High Volume Program</Text>
            <RowContainer mt = {3} flex = {1}>
                <ColumnContainer flex = {1} width="50%" >
                    <FixedFileds fontSize = {3} mt = {2}>Avg sets p/ muscle</FixedFileds>
                    <Text fontSize = {4}>7.6+/-0.5</Text>
                </ColumnContainer>

                <ColumnContainer flex = {1} width="50%">
                    <FixedFileds fontSize = {3} mt = {2}>Avg Muscle Frequency</FixedFileds>
                    <Text fontSize = {4} > 3 </Text>
                </ColumnContainer>
            </RowContainer>


            <RowContainer mt = {5} >
                <ColumnContainer flex = {1} width="50%">
                    <FixedFileds fontSize = {3} mt = {2}>Number of Cycles</FixedFileds>
                    <Text fontSize = {4}>4</Text>
                </ColumnContainer>

                <ColumnContainer flex = {1} width="50%">
                    <FixedFileds fontSize = {3} mt = {2}>Workouts p/ cycle</FixedFileds>
                    <Text fontSize = {4}> 7 </Text>
                </ColumnContainer>
            </RowContainer>
            
            <FixedFileds fontSize = {2} mt = {3}>Avg Workout Duration</FixedFileds>
            <Text fontSize = {4} mb = {3}>10:10:30</Text>

            <Text mt = {2} mb = {3}>Tags: Bicep; Tricep</Text>
        </TouchableCard>)
}

LibraryProgramCard.defaultProps = {
    width : 350
}


