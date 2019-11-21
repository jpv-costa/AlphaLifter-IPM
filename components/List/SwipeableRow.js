import React, { Component } from "react";
import { Animated, StyleSheet, Text, View, I18nManager } from "react-native";

import { RectButton } from "react-native-gesture-handler";

import Swipeable from "react-native-gesture-handler/Swipeable";
import Icon from "react-native-vector-icons/MaterialIcons";

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export class SwipeableRow extends Component {
    renderRightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-80, 0],
            outputRange: [1, 0],
            extrapolate: "clamp"
        });
        return (
            <RectButton style={styles.rightAction} onPress={this.close}>
                <AnimatedIcon
                    name='delete-forever'
                    size={30}
                    color='#fff'
                    style={[styles.actionIcon, { transform: [{ scale }] }]}
                />
            </RectButton>
        );
    };
    updateRef = ref => {
        this._swipeableRow = ref;
    };
    close = () => {
        this._swipeableRow.close();
    };
    render() {
        const { children } = this.props;
        return (
            <Swipeable
                ref={this.updateRef}
                friction={2}
                leftThreshold={80}
                renderRightActions={this.renderRightActions}>
                {children}
            </Swipeable>
        );
    }
}

const styles = StyleSheet.create({
    leftAction: {
        flex: 1,
        backgroundColor: "#388e3c",
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: I18nManager.isRTL ? "row" : "row-reverse"
    },
    actionIcon: {
        width: 30,
        marginHorizontal: 10
    },
    rightAction: {
        alignItems: "center",
        flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
        backgroundColor: "#dd2c00",
        flex: 1,
        justifyContent: "flex-end"
    }
});
