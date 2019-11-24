import React, { useState } from "react";
import { FlatList, View, Text, Dimensions } from "react-native";
import { color, space, layout, size, typography } from "styled-system";
import { ListItem } from "react-native-elements";
import styled from "styled-components";
import theme from "../theme";

const CenterList = styled.View`
    flexGrow: 1;
    justify-content: center;
    align-items: center;
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
`;

export class SingleSelectList extends React.Component {
    state = {
        selected: null
    };

    render() {
        return (
            <CenterList fontSize={8}>
                <FlatList
                    data={this.props.data}
                    style={{ flexGrow: 1, width: "100%" }}
                    renderItem={({ item, index }) => (
                        <ListItem
                            id={item.id}
                            style={{ flex: 1, width: "100%" }}
                            title={item.title}
                            containerStyle={{
                                backgroundColor:
                                    this.state.selected == item.title
                                        ? theme.colors.secondaryTints[3]
                                        : "#fff"
                            }}
                            contentContainerStyle={{
                                color:
                                    this.state.selected == item.title
                                        ? "#fff"
                                        : "#555"
                            }}
                            index={index}
                            description={item.description}
                            onPress={() => {
                                if (this.props.onItemPress) {
                                    this.setState({ selected: item.title });
                                    this.props.onItemPress(item);
                                }
                            }}
                            topDivider
                            bottomDivider
                            chevron
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </CenterList>
        );
    }
}
