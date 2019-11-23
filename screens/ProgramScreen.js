import React, { useState } from "react";
import {
    Image,
    Platform,
    StyleSheet,
    SafeAreaView,
    Dimensions
} from "react-native";
import styled from "styled-components";
import { color, space, layout, size, typography, flexbox } from "styled-system";
import { Icon } from "../components/Icon/Icon";
import { LibraryProgramCard } from "../components/cards/libraryProgramCard/LibraryProgramCard";
import { RoundCornersButton } from "../components/button/Button";
import { ActionButton } from "../components/button/Button";
import { default as MatIcon } from 'react-native-vector-icons/MaterialIcons';
import Navigator from "../components/navigation/TabNavigator";

const { width } = Dimensions.get("window");

const ScrollView = styled.ScrollView`
    ${space}
    ${layout}
    ${flexbox}
    ${color}
`;

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

export default class ProgramScreen extends React.Component {
    program = this.props.navigation.state.params.program;
    header = ["Workouts", "Analysis"];
    cycles = 6;

    getCycles() {
        const result = [];

        for (let i = 1; i <= this.cycles; i++) {
            result.push((
            <View mb={4}>
                <Text fontSize={4} opacity={0.5} mt={2} ml={3} fontWeight={'bold'}>#{i} cycle</Text>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    px={2}
                    pt={4}
                    pb={2}
                    contentInset={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 24
                    }}>
                    {workoutsCardData.map(workout => (
                        <LibraryProgramCard
                            programCardData={workout}
                            ml={4}
                        />
                    ))}
                </ScrollView>
            </View>
            ));
        }

        return result;
    }

    content = [
        (<ScrollView>
            <View px={4} mt={1}>
                <View
                    flexDirection='row'
                    justifyContent='space-between'
                    mt={3}>
                    <Text fontSize={2} mb={2}>
                        Length: {this.cycles} cycles.
                    </Text>
                    <RoundCornersButton text='Add' />
                </View>
            </View>
            <View>
                {this.getCycles()}
            </View>
        </ScrollView>),

        (<Text>
            Not implemented.
        </Text>)
    ]

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.state.params.program.title,
            headerLeft: (
                <TouchableOpacity ml={4} onPress={() => navigation.goBack()}>
                    <Icon
                        id='arrow-left'
                        size={18}
                        fill='#000'
                        opacity={0.7}
                    />
                </TouchableOpacity>
            ),
            headerRight: (
                <TouchableOpacity
                    mr={4}
                    disabled opacity={0.4}>
                    <MatIcon name={"more-horiz"} size={18} color={"#000"} />
                </TouchableOpacity>
            )
        };
    };

    render() {

        return (
            <React.Fragment>
                <Navigator width={width} header={this.header} tabContent={this.content} />
                {/* {this.content} */}
            </React.Fragment>
        );
    }
}


const workoutsCardData = [
    {
        id: 1,
        title: "workout name",
        value: [
            {
                id: 2,
                title: "Exercises",
                value: "6"
            },
            {
                id: 3,
                title: "Duration",
                value: "1h30min"
            },
            {
                id: 4,
                title: "Trained Muscles",
                value: "Chest and Triceps"
            }
        ]
    }
]