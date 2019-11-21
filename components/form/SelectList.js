import React, { useState } from "react";
import { FlatList } from "react-native";
import { ListItem } from 'react-native-elements'

export const SelectList = props => {
    const { data, onItemPress, ...other } = props;

    const [selected, setSelected] = useState(null);

    return (
        <FlatList
            data={data}
            style={{ width: "100%" }}
            renderItem={({ item, index }) => (
                <ListItem
                    id={item.id}
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
    );
};

SelectList.defaultProps = {
    height: 350
};
