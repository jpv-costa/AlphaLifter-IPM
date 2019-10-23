import React, { useState } from "react";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";
import { FlatList } from "react-native";
import { Icon } from "../Icon/Icon";

const ListContainer = styled.TouchableOpacity`
    ${space}
    ${layout}
    flex-direction: row;
    align-items: center;
    background-color: ${props =>
        props.selected ? props.theme.colors.secondaryTints[4] : "transparent"};
`;

const Text = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
`;

const ListContent = styled.View`
    ${space}
    ${layout}
    flex-direction: column;
    flex-grow: 1;
`;

const ListHeader = styled.View`
    flex-direction: row;
    justify_content: space-between;
`;

const ListItem = props => {
    const { iconId, title, description, extraInfo, selected } = props;

    return (
        <ListContainer
            px={3}
            py={3}
            selected={selected}
            onPress={props.onPress}>
            <Icon id={iconId} size={45} fill='#4C5C62' />
            <ListContent ml={3}>
                <ListHeader>
                    <Text fontSize={2} fontWeight='bold'>
                        {title}
                    </Text>
                    <Text fontSize={2} color='text.1'>
                        {extraInfo}
                    </Text>
                </ListHeader>
                <Text mt={2} fontSize={2} color={"text.1"}>
                    {description}
                </Text>
            </ListContent>
        </ListContainer>
    );
};

export const List = props => {
    const { data } = props;

    const [selected, setSelected] = useState(null);

    return (
        <FlatList
            data={data}
            style={{ width: "100%" }}
            renderItem={({ item }) => (
                <ListItem
                    id={item.id}
                    iconId={item.iconId}
                    title={item.title}
                    extraInfo={item.extraInfo}
                    description={item.description}
                    selected={selected == item.id}
                    onPress={() => setSelected(item.id)}
                />
            )}
            keyExtractor={item => item.id}
        />
    );
};
