import React, { useState } from "react";
import {StyleSheet, Dimensions, Alert} from "react-native";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";
import { Icon } from "../Icon/Icon";
import { Ionicons } from '@expo/vector-icons';

export const Card = styled.View`
  ${color}
  ${space}
  ${layout}
  elevation: 3;
  position: absolute;
`;


 const screenWidth = Math.round(Dimensions.get('window').width);


const RowContainer = styled.View`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size} 
    flexDirection: row;
 
`;

const ColumnContainer = styled.View`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    align-items: center;
    flexDirection: column;
    flex: 1;
`;

const FixedFileds = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    textAlign : justify;
    opacity : 0.8;
   
`; 
const Text = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    textAlign : justify;
    flex:1;
`;

const Clock = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    textAlign : center;
    flex:1;
`;

const styles = StyleSheet.create({
    card: {
        width: screenWidth,
        backgroundColor: 'black'
    }
  });

  const Circle = styled.View`
  ${space}
  ${layout}
  ${color}
  width: 30;
  height: 30;
  border-radius: ${44 / 2};
  opacity: ${0.9};
  position: absolute;
`;

const IconCircle = styled.TouchableOpacity`
    ${space}
    ${layout}
    width: 30;
    height: 30;
`;

const CenterItem = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;


const CirclesRowContainer = styled.View`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size} 
    flexDirection: row;
    justify-content: center;
    flex: 1;
 
`;



export const WorkoutTimer = props => {

    let plus_icon = <Ionicons name="md-add" size={32} color="white" />
    let minus_icon = <Ionicons name="md-remove" size={32} color="white" />
    let play_icon = <Ionicons name="md-play" size={26} color="white" />
    let replay_icon = <Ionicons name="md-skip-backward" size={24} color="white" />
    
    const { onMinusPress,onPlusPress,onPlayPress,  onReplayPress, data} = props;
    return(
        <Card style = {styles.card}>
            <RowContainer mt = {3} flex = {1}>
                <ColumnContainer flex = {1}  >
                    <Text  color = "white.1" fontSize = {4}>Workout Name</Text>
                    <FixedFileds  color = "white.1" fontSize = {3}>80% complete</FixedFileds>
                </ColumnContainer>

                <ColumnContainer flex = {1}   >
                    <Text  color = "white.1" fontSize = {4} > Elapsed Time </Text>
                    <FixedFileds  color = "white.1" fontSize = {3} >01:00:30</FixedFileds>
                </ColumnContainer>
            </RowContainer>

            <Clock color = "white.1" fontSize = {8} mt = {3}>01:30min</Clock>
           <CirclesRowContainer mb = {5} mt = {1}>
                {minus_icon && <IconCircle mx = {3}  onPress={onMinusPress}>
                    <Circle  bg= {"primary"} />
                    <CenterItem>
                    {minus_icon}
                    </CenterItem>
                </IconCircle>}

                {plus_icon && <IconCircle mx = {3} onPress={onPlusPress}>
                    <Circle  bg= {"primary"} />
                    <CenterItem>
                    {plus_icon}
                    </CenterItem>
                </IconCircle>}

                {play_icon && <IconCircle mx = {3} onPress={onPlayPress}>
                    <Circle  bg= {"primary"}/>
                    <CenterItem>
                    {play_icon}
                    </CenterItem>
                </IconCircle>}

                {replay_icon && <IconCircle mx = {3} onPress={onReplayPress}>
                    <Circle  bg= {"primary"} />
                    <CenterItem>
                    {replay_icon}
                    </CenterItem>
                </IconCircle>}
          
           </CirclesRowContainer>

      </Card>)
   
}

WorkoutTimer.defaultProps = {
    width : 350
}


