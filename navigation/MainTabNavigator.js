import React from "react";
import { Platform } from "react-native";
import {
    createStackNavigator,
    createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import { Icon } from "../components/Icon/Icon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import theme from "../components/theme";

const config = Platform.select({
    web: { headerMode: "screen" },
    default: {}
});

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: "Progress",
    tabBarIcon: ({ focused }) => (
        <Icon
            id={"bar-chart"}
            size={20}
            fill={focused ? theme.colors.secondaryShades[0] : "#aaa"}
        />
    )
};

HomeStack.path = "";

const LibraryScreen = createStackNavigator(
    {
        Links: LinksScreen
    },
    config
);

LibraryScreen.navigationOptions = {
    tabBarLabel: "Library",
    tabBarIcon: ({ focused }) => (
        <Icon
            id={"dumbbell"}
            size={30}
            fill={focused ? theme.colors.secondaryShades[0] : "#aaa"}
        />
    )
};

LibraryScreen.path = "";

const SocialScreen = createStackNavigator(
    {
        Links: LinksScreen
    },
    config
);

SocialScreen.navigationOptions = {
    tabBarLabel: "Social",
    tabBarIcon: ({ focused }) => (
        <Icon
            id={"users"}
            size={20}
            fill={focused ? theme.colors.secondaryShades[0] : "#aaa"}
        />
    )
};

SocialScreen.path = "";

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

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    LibraryScreen,
    SocialScreen,
    SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;
