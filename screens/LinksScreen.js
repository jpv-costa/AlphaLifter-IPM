import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { ExpoLinksView } from "@expo/samples";

export function LinksScreen() {
    return (
        <ScrollView style={styles.container}>
            {/**
             * Go ahead and delete ExpoLinksView and replace it with your content;
             * we just wanted to provide you with some helpful links.
             */}
            <Text>Not implemented</Text>
        </ScrollView>
    );
}

LinksScreen.navigationOptions = {
    title: "Social"
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: "#fff"
    }
});
