import React, { useState } from "react";
import {
    Image,
    Platform,
    StyleSheet,
    SafeAreaView,
    Dimensions
} from "react-native";
import styled from "styled-components";
import { color, space, layout, size, typography, flexbox } from "styled-system";
import { Icon } from "../components/Icon/Icon";
import Search from "../components/Search/Search";
import { DashboardProgramList } from "../components/List/DashboardProgramList";
import { DashboardWorkoutList } from "../components/List/DashboardWorkoutList";
import { ActionButton } from "../components/button/Button";
import { SearchLibraryScreen } from "./SearchLibraryScreen";

import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

const { width } = Dimensions.get("window");

const ScrollView = styled.ScrollView`
    ${space}
    ${layout}
    ${flexbox}
    ${color}
`;

const TouchableOpacity = styled.TouchableOpacity`
    ${space}
    ${layout}
    ${flexbox}
    ${color}
`;

const View = styled.View`
    ${space}
    ${layout}
    ${flexbox}
    ${color}
`;

const Text = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
    opacity : ${props => (props.opacity ? props.opacity : 1)};
`;

export class ReOrderScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Edit Workout Order",
            headerLeft: (
                <TouchableOpacity ml={4} onPress={() => navigation.goBack()}>
                    <Icon
                        id={"arrow-left"}
                        size={18}
                        fill={"#000"}
                        opacity={0.7}
                    />
                </TouchableOpacity>
            )
        };
    };
    render() {
        const { navigation } = this.props;

        // const data = navigation.getParam("data");
        // const onSavePress = navigation.getParam("onSavePress");

        return (
            <View style={{ flex: 1 }}>
                <DashboardWorkoutList
                    data={this.props.workouts}
                    selectList
                    draggable
                    onItemPress={(item, index, selected) =>
                        {this.setState({workouts: index.slice(1)})}}
                />
                <View px={4} mb={4}>
                    <ActionButton
                        mt={3}
                        secondaryDark
                        text='Save'
                        onPress={() => {
                            this.props.navigation.goBack();
                            this.props.orderedWorkout(this.state.workouts),
                                console.log("Pressed Save button");
                        }}
                    />
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        orderedWorkout: workouts =>
            dispatch({
                type: actionTypes.REORDER,
                payload: { workouts: workouts }
            })
    };
};

export default connect(null, mapDispatchToProps)(ReOrderScreen);

const workoutData = [
    {
        id: 1,
        name: "Chest Flex",
        isCurrent: true,
        exercises: 3,
        muscles: "Chest, Shoulders"
    },
    {
        id: 2,
        name: "Chest Build",
        isCurrent: false,
        exercises: 3,
        muscles: "Chest, Triceps"
    },
    {
        id: 3,
        name: "Chest Strech",
        isCurrent: false,
        exercises: 5,
        muscles: "Chest, Shoulders"
    }
];
