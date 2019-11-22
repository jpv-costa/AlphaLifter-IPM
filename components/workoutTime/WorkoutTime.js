import React, { useState, useRef, useEffect } from "react";
import {
    StyleSheet,
    Dimensions,
    Alert,
    SafeAreaView,
    TouchableOpacity
} from "react-native";
import styled from "styled-components";
import { color, space, layout, size, typography, flexbox } from "styled-system";
import { Icon } from "../Icon/Icon";
import { default as MdIcon } from 'react-native-vector-icons/MaterialCommunityIcons';

export const Card = styled.View`
  ${color}
  ${space}
  ${layout}
`;

const screenWidth = Math.round(Dimensions.get("window").width);

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
`;

const FixedFields = styled.Text`
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
    opacity : ${props => (props.opacity ? props.opacity : 1)};
`;

const Clock = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    textAlign : center;
    flex-grow: 1;
`;

const styles = StyleSheet.create({
    card: {
        width: screenWidth,
        backgroundColor: "#222"
    }
});

const Circle = styled.View`
  ${space}
  ${layout}
  ${color}
  width: 32;
  height: 32;
  border-radius: 100;
  opacity: ${0.9};
  position: absolute;
`;

const IconCircle = styled.TouchableOpacity`
    ${space}
    ${layout}
    opacity: ${props => (props.disabled ? "0.5" : "0.9")}
    width: 32;
    height: 32;
    border-radius: 100;
    backgroundColor: #ff8300;
    text-align:center;
`;

const CenterItem = styled.View`
    flex-grow: 1;
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
    flex-grow: 1;
`;

const View = styled.View`
    ${space}
    ${layout}
    ${flexbox}
    ${color}
`;

// const minutes = React.createRef();
// const seconds = React.createRef();

const timerStep = 5;

export class WorkoutTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mins: props.startMins,
            secs: props.startSecs,
            play: false,
            play_icon: <MdIcon name='play' size={27} color='#FFF' />
        };

        this.onPlayPress = this.onPlayPress.bind(this);
        this.getDecrementedSecondsTimer = this.getDecrementedSecondsTimer.bind(
            this
        );
        this.getDecrementedMinutesTimer = this.getDecrementedMinutesTimer.bind(
            this
        );
        this.getDecStepSecondstimer = this.getDecStepSecondsTimer.bind(this);
        this.getIncStepSecondstimer = this.getIncStepSecondsTimer.bind(this);
        this.getIncrementedMinutesTimer = this.getIncrementedMinutesTimer.bind(
            this
        );
        this.onMinusPress = this.onMinusPress.bind(this);
        this.onPlusPress = this.onPlusPress.bind(this);
        this.onReplayPress = this.onReplayPress.bind(this);
    }

    _interval = null;

    //TODO
    elapsed = "00:00:00";

    // console.log(props)

    plus_icon = (<MdIcon name='plus' size={24} color='#FFF' />);
    minus_icon = (<MdIcon name='minus' size={24} color='#FFF' />);
    replay_icon = (<MdIcon name='replay' size={24} color='#FFF' />);

    onPlayPress() {
        if (this.state.play) {
            //Pause it
            clearInterval(this._interval);
            this.setState(prevState => {
                return {
                    ...prevState,
                    play: !prevState.play,
                    play_icon: <MdIcon name='play' size={24} color='#FFF' />
                };
            });
        } else {
            //Play
            this._interval = setInterval(() => {
                this.setState(prev => this.getDecrementedSecondsTimer(prev));
            }, 1000);
            this.setState(prevState => {
                return {
                    ...prevState,
                    play: !prevState.play,
                    play_icon: <MdIcon name='pause' size={24} color='#FFF' />
                };
            });
        }
    }

    getDecrementedSecondsTimer(prev) {
        if (prev.secs == 0) {
            if (prev.mins == 0) {
                clearInterval(this._interval);
                return prev;
            } else {
                return this.getDecrementedMinutesTimer({ ...prev, secs: 59 });
            }
        } else {
            return { ...prev, secs: prev.secs - 1 };
        }
    }

    getDecrementedMinutesTimer(prev) {
        return { ...prev, mins: prev.mins - 1 };
    }

    getDecStepSecondsTimer(prev) {
        if (prev.secs >= timerStep) {
            return { ...prev, secs: prev.secs - timerStep };
        } else {
            if (prev.secs - timerStep <= 0 && prev.mins == 0) {
                clearInterval(this._interval);
                this.setState({
                    play_icon: <Icon id='play' size={27} fill='#FFF' />
                });
                return { mins: 0, secs: 0 };
            } else {
                const secs =
                    prev.secs == 0
                        ? 60 - timerStep
                        : 60 + (prev.secs - timerStep);
                return this.getDecrementedMinutesTimer({ ...prev, secs: secs });
            }
        }
    }

    getIncStepSecondsTimer(prev) {
        if (prev.secs + timerStep < 60) {
            return { ...prev, secs: prev.secs + timerStep };
        } else {
            let secs = (prev.secs + timerStep) % 60;
            return this.getIncrementedMinutesTimer({ ...prev, secs: secs });
        }
    }

    getIncrementedMinutesTimer(prev) {
        this.setState(() => ({ ...prev, mins: prev.mins + 1 }));
    }

    onMinusPress() {
        this.setState(prevState => this.getDecStepSecondsTimer(prevState));
    }

    onPlusPress() {
        this.setState(prevState => this.getIncStepSecondsTimer(prevState));
    }

    onReplayPress() {
        clearInterval(this._interval);
        this.setState(() => ({
            mins: this.props.startMins,
            secs: this.props.startSecs,
            play: false
        }));
    }

    render() {
        const percentage = 0;
        const { currentWorkout, onBackPress } = this.props;
        const elapsed = "00:00:00";

        return (
            <Card style={styles.card}>
                <SafeAreaView>
                    <RowContainer
                        flexGrow={1}
                        pt={2}
                        px={3}
                        justifyContent='center'>
                        <ColumnContainer
                            flexGrow={1}
                            alignItems='flex-start'
                            justifyContent={"center"}>
                            <View>
                                {onBackPress && (
                                    <TouchableOpacity
                                        onPress={onBackPress}
                                        style={{ flexDirection: "row" }}>
                                        <Icon
                                            id='arrow-left'
                                            size={18}
                                            fill='#FFF'
                                            opacity={0.7}
                                        />
                                        <Text
                                            ml={2}
                                            color='white.1'
                                            fontSize={3}
                                            opacity={0.7}
                                            fontWeight={"bold"}>
                                            {currentWorkout}
                                        </Text>
                                    </TouchableOpacity>
                                )}
                            </View>

                            <FixedFields
                                color='white.1'
                                fontSize={2}
                                style={{ opacity: 0.5 }}>
                                {percentage}% complete
                            </FixedFields>
                        </ColumnContainer>

                        <ColumnContainer flexGrow={1} alignItems='flex-end'>
                            <Text color='white.1' fontSize={1} opacity={0.7}>
                                ELAPSED TIME
                            </Text>
                            <FixedFields
                                color='white.1'
                                fontSize={3}
                                opacity={0.5}>
                                {elapsed}
                            </FixedFields>
                        </ColumnContainer>
                    </RowContainer>

                    <Clock color='white.1' fontSize={8} mt={4} mb={4}>
                        <Text>{this.state.mins}</Text>
                        <Text opacity={0.7} fontSize={6}>
                            {"m"}
                        </Text>
                        <Text>{this.state.secs}</Text>
                        <Text opacity={0.7} fontSize={6}>
                            {"s"}
                        </Text>
                    </Clock>

                    <CirclesRowContainer mb={4} mt={1}>
                        {this.minus_icon && (
                            <IconCircle
                                mx={3}
                                disabled={
                                    this.state.mins == 0 && this.state.secs == 0
                                }
                                onPress={this.onMinusPress}>
                                <CenterItem>{this.minus_icon}</CenterItem>
                            </IconCircle>
                        )}

                        {this.plus_icon && (
                            <IconCircle mx={3} onPress={this.onPlusPress}>
                                <CenterItem>{this.plus_icon}</CenterItem>
                            </IconCircle>
                        )}

                        {this.state.play_icon && (
                            <IconCircle
                                mx={3}
                                onPress={this.onPlayPress}
                                disabled={
                                    this.state.mins == 0 && this.state.secs == 0
                                }>
                                <CenterItem>{this.state.play_icon}</CenterItem>
                            </IconCircle>
                        )}

                        {this.replay_icon && (
                            <IconCircle mx={3} onPress={this.onReplayPress}>
                                <CenterItem>{this.replay_icon}</CenterItem>
                            </IconCircle>
                        )}
                    </CirclesRowContainer>
                </SafeAreaView>
            </Card>
        );
    }
}

WorkoutTimer.defaultProps = {
    percentage: 0
};
