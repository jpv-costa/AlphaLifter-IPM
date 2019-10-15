import React from "react";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";

//Constants that enumerate the available exercise equipment types
export const EquipmentTypes = Object.freeze({
    dumbbell: 1,
    cables: 2,
    barbell: 3
});

const View = styled.View`
    ${space}
    ${layout}
`;

const Text = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
`;

export const Card = styled.View`
  ${color}
  ${space}
  ${layout}
  border-radius: 6px;
  elevation: 3;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
`;

Card.defaultProps = {
    bg: "white.1",
    py: 3,
    px: 4
};

const TagGroup = ({ tags }) => {
    return (
        <React.Fragment>
            {Object.getOwnPropertyNames(tags).map(value => (
                <Tag key={tags[value].tag} ml={2} bg={tags[value].color}>
                    <Text
                        color='white.1'
                        fontSize={1}
                        ellipsizeMode='tail'
                        numberOfLines={1}>
                        {tags[value].tag.toUpperCase()}
                    </Text>
                </Tag>
            ))}
        </React.Fragment>
    );
};

const ListHeader = styled.View`
    flex-direction: row;
    justify_content: space-between;
`;

export const ConfiguredExercise = props => {
    const {
        name,
        completed,
        estimatedDuration,
        equipment,
        configuration
    } = props;
    return (
        <View>
            <ListHeader>
                <Text fontSize={1} fontWeight='bold'>
                    {name}
                </Text>
                <Text fontSize={1} color='#555'>
                    {estimatedDuration}
                </Text>
            </ListHeader>
            <Text mt={1} fontSize={1} color='#555'>
                {configuration}
            </Text>
        </View>
    );
};
