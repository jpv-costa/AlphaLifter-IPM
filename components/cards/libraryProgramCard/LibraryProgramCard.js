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
        flexDirection: row;
        flaxWrap: wrap;
        justifyContent: space-around;
        backgroundColor: yellow;
        flex: 1;
    `;

    const ColumnContainer = styled.View`
        ${space}
        ${layout}
        ${color}
        ${typography}
        ${size}
        justifyContent: space-between;
        backgroundColor: green;
        flex: 1;
    `;

    const styles = StyleSheet.create({
        card: {
            width: 350
        }  
    });

    export const LibraryProgramCard = props => {
        const {programCardData, onPress} = props;

        return(
            <TouchableCard style = {styles.card} onPress = {onPress}>
                <Text fontSize={4}
                        mt = {3}
                        mb = {3}> {programCardData.title} 
                </Text>

                <RowContainer mt = {3}>
                   {programCardData.value.map(item => {
                        <ColumnContainer key = {item.id} width = "50%">
                            <Text fontSize = {3} mt = {2} opacity = {0.5} > {item.title} </Text>
                            <Text fontSize = {4}> {item.value} </Text>
                        </ColumnContainer>
                         }
                    )}
                 </RowContainer>

                 <Text fontSize = {3} mt = {2} opacity = {0.5}> {programCardData.avgWorkout} </Text>
                 <Text fontSize = {4}> {programCardData.time} </Text>
            </TouchableCard>   
            )
    }

    LibraryProgramCard.defaultProps = {
        width : 350
    }

