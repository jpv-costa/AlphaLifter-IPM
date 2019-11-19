import React, { useState } from "react";
import { FlatList, View, Text, Dimensions } from "react-native";
import { ListItem } from 'react-native-elements'
import styled from "styled-components";

const CenterList = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 10%;
    height: 350;
    width: 100%;
`;

export const SingleSelectList = props => {
    const { data, onItemPress, ...other } = props;

    const [selected, setSelected] = useState(null);

    return (
        <CenterList>
            <FlatList
                data={data}
                style={{ width: "100%"}}
                renderItem={({ item, index }) => (
                    <ListItem
                        id={item.id}
                        style={{ width: "100%"}}
                        title={item.title}
                        selected={selected == item.id}
                        index={index}
                        description={item.description}
                        onPress={() => {
                            if (onItemPress) {
                                onItemPress(item);
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
};
