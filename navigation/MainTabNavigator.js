import React from "react";
import { Platform } from "react-native";
import {
    createStackNavigator,
    createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import { Icon } from "../components/Icon/Icon";
import ProgressScreen from "../screens/ProgressScreen";
import LinksScreen from "../screens/LinksScreen";
import LibraryScreen from "../screens/LibraryScreen";
import SettingsScreen from "../screens/SettingsScreen";
import theme from "../components/theme";
import WorkoutLoggingScreen from "../screens/WorkoutLoggingScreen";
import WorkoutExerciseLogScreen from "../screens/WorkoutExerciseLogScreen";
import SearchLibraryScreen from "../screens/SearchLibraryScreen";
import CreateExerciseForm from "../screens/CreateExerciseForm";
import CreateProgretionForm from "../screens/CreateProgretionForm"

const config = Platform.select({
    web: { headerMode: "screen" },
    default: {}
});

const ProgressStack = createStackNavigator(
    {
        Home: ProgressScreen
    },
    config
);

ProgressStack.navigationOptions = {
    tabBarLabel: "Progress",
    tabBarIcon: ({ focused }) => (
        <Icon
            id={"bar-chart"}
            size={20}
            fill={focused ? theme.colors.secondaryShades[0] : "#aaa"}
        />
    )
};

ProgressStack.path = "";

const LibraryStack = createStackNavigator(
    {
        Library: LibraryScreen,
        Search: SearchLibraryScreen,
        Logging: WorkoutLoggingScreen,
        ExerciseForm: CreateExerciseForm,
        ProgretionForm: CreateProgretionForm,
        Exercise: WorkoutExerciseLogScreen
       
    },
    config
);

LibraryStack.navigationOptions = {
    tabBarLabel: "Library",
    tabBarIcon: ({ focused }) => (
        <Icon
            id={"dumbbell"}
            size={30}
            fill={focused ? theme.colors.secondaryShades[0] : "#aaa"}
        />
    )
};

LibraryStack.path = "";

const SocialStack = createStackNavigator(
    {
        Links: LinksScreen
    },
    config
);

SocialStack.navigationOptions = {
    tabBarLabel: "Social",
    tabBarIcon: ({ focused }) => (
        <Icon
            id={"users"}
            size={20}
            fill={focused ? theme.colors.secondaryShades[0] : "#aaa"}
        />
    )
};

SocialStack.path = "";

const SettingsStack = createStackNavigator(
    {
        Settings: SettingsScreen
    },
    config
);

SettingsStack.navigationOptions = {
    tabBarLabel: "Settings",
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-options" : "md-options"}
        />
    )
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator(
    {
        ProgressStack,
        LibraryStack,
        SocialStack,
        SettingsStack
    },
    {
        tabBarOptions: {
            showLabel: false
        }
    }
);

tabNavigator.path = "";

export default tabNavigator;
