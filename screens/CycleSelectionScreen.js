import React from "react";
import { Dimensions, SafeAreaView } from "react-native";
import styled from "styled-components";
import { color, space, layout, size, typography, flexbox } from "styled-system";
import { List } from "../components/List/List";
import {} from "../components/inputs/InputQuestions/InputQuestions";
import { ActionButton } from "../components/button/Button";

const { width } = Dimensions.get("window");

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

const QuestionItem = styled.View`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${size}
`;

export default class CycleSelectionScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        };
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <QuestionItem pt={3} px={4}>
                    <Text fontSize={7} opacity={0.2}>
                        Select the cycles
                    </Text>
                </QuestionItem>
                <List
                    data={chooseNumberCycles}
                    selectList
                    multiselect
                    onItemPress={onItemPress}
                />
                <View px={4} mb={4}>
                    <ActionButton
                        mt={3}
                        secondaryDark
                        text='Next'
                        onPress={() =>
                            this.props.navigation.navigate("Search", {
                                type: "exercises"
                            })
                        }
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const onItemPress = item => {
    console.log("You pressed item '" + item.title + "'");
};

const chooseNumberCycles = [
    {
        id: 1,
        title: "1 cycle"
    },
    {
        id: 2,
        title: "2 cycle"
    },

    {
        id: 3,
        title: "3 cycle"
    }
];
