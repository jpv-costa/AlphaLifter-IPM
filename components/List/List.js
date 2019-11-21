import React, { useState } from "react";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";
import { FlatList, View, StyleSheet } from "react-native";
import { Icon } from "../Icon/Icon";
import { MuscleIcon } from "../Icon/MuscleIcon";

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
    justify-content: space-between;
`;

const Circle = styled.View`
    width: 44;
    height: 44;
    background-color: #00171f;
    border-radius: ${44 / 2};
    opacity: ${0.15};
    position: absolute;
`;

const IconCircle = styled.View`
    width: 44;
    height: 44;
`;

const CenterItem = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const ListItem = props => {
    const {
        iconData,
        index,
        numberedBullet,
        title,
        description,
        extraInfo,
        selected
    } = props;

    let icon;

    if (iconData) {
        if (numberedBullet) {
            icon = (
                <Text
                    fill='#00171f'
                    fontSize={4}
                    fontWeight='bold'
                    style={{ opacity: 0.8 }}>
                    {index + 1}
                </Text>
            );
        } else if (iconData.id.toLowerCase() == "muscles") {
            icon = (
                <MuscleIcon
                    primaryMuscles={iconData.primaryMuscles.map(m =>
                        m.toLowerCase()
                    )}
                    secondaryMuscles={iconData.secondaryMuscles.map(m =>
                        m.toLowerCase()
                    )}
                    size={105}
                    view={iconData.view}
                />
            );
        } else {
            icon = (
                <Icon id={iconData.id} size={28} fill='#00171f' opacity={0.8} />
            );
        }
    }

    return (
        <ListContainer
            px={3}
            py={3}
            selected={selected}
            onPress={props.onPress}>
            {icon && (
                <IconCircle>
                    <Circle />
                    <CenterItem>{icon}</CenterItem>
                </IconCircle>
            )}
            <ListContent ml={3} mr={3}>
                <ListHeader>
                    <Text fontSize={2} fontWeight='bold'>
                        {title}
                    </Text>
                    <Text fontSize={2} color='text.1'>
                        {extraInfo}
                    </Text>
                </ListHeader>
                {description && (
                    <Text
                        mt={2}
                        mr={2}
                        fontSize={2}
                        color={"text.1"}
                        ellipsizeMode='tail'
                        numberOfLines={1}>
                        {description}
                    </Text>
                )}
            </ListContent>
        </ListContainer>
    );
};

export const List = props => {
    const { data, onItemPress, selectList, numberedBullet, selectedId } = props;

    const [selected, setSelected] = useState(selectedId);

    return (
        <FlatList
            data={data}
            style={{ width: "100%" }}
            renderItem={({ item, index }) => {
                // if (selectedId == item.id) {
                //     onItemPress(item);
                // }

                return (
                    <ListItem
                        id={item.id}
                        iconData={item.icon}
                        title={item.title}
                        extraInfo={item.extraInfo}
                        description={item.description}
                        iconType={item.iconType}
                        selected={selected == item.id}
                        index={index}
                        numberedBullet={numberedBullet}
                        onPress={() => {
                            if (onItemPress) {
                                onItemPress(item);
                            }
                            if (selectList) {
                                setSelected(item.id);
                            }
                        }}
                    />
                );
            }}
            keyExtractor={item => item.id}
        />
    );
};
