import React from "react";
import {StyleSheet} from "react-native";
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

const styles = StyleSheet.create({
    card: {
        width: 350

    }  
  });

export const LibraryWorkoutCard = props => {
    const {workoutCardData, onPress} = props;
    return(
            <TouchableCard style = {styles.card} onPress = {onPress}>
                <Text fontSize={4}
                        mt = {3}
                        mb = {3}> {workoutCardData.title} </Text>
                    <ColumnContainer width = "50%" mt = {2} textAlign = "center">
                        <Text fontSize = {3} mt = {2} opacity = {0.5}> {workoutCardData.mainMuscles} </Text>
                        <Text fontSize = {4}> {workoutCardData.mainMusclesValue} </Text>
                    </ColumnContainer>

                <RowContainer mt = {3}>
                   {workoutCardData.value.map(item => {
                        <ColumnContainer key = {item.id} width = "50%">
                            <Text fontSize = {3} mt = {2} opacity = {0.5} > {item.title} </Text>
                            <Text fontSize = {4}> {item.value} </Text>
                        </ColumnContainer>
                         }
                    )}
                </RowContainer>

            </TouchableCard>
        )
}

LibraryWorkoutCard.defaultProps = {
    width : 350
}


