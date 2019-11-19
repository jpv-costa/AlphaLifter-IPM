import { Dimensions } from "react-native";
import React, { useState } from "react";
import { FlatList, View, Text, SafeAreaView } from "react-native";
import { SingleSelectList } from "./SingleSelectList";
import { InputForm } from "./InputForm";
import Dots from "react-native-dots-pagination";
import { FormButtons } from "../button/FormButtons";
import styled from "styled-components";

const ScrollView = styled.ScrollView`
    
`;

export class Form extends React.Component {
    state = {
        pageNum: 0
    };

    scrollview = React.createRef();

    render() {
        const nChildren = React.Children.count(this.props.children);
        const screenWidth = Dimensions.get("window").width;
        const screenHeight = Dimensions.get("window").height;

        //const screens =  props.childern.map((item) => {
        const previousPage = () => {
            this.scrollview.current.scrollTo({x: (this.state.pageNum - 1)*screenWidth, y: 0, animated: true});
            this.setState(previousState => ({
                pageNum: previousState.pageNum - 1
            }));
        };

        const nextPage = () => {
            this.scrollview.current.scrollTo({x: (this.state.pageNum + 1)*screenWidth, y: 0, animated: true});
            this.setState(previousState => ({
                pageNum: previousState.pageNum + 1
            }));
        };

        return (
            <View>
                <ScrollView
                    ref={this.scrollview}
                    horizontal={true}
                    scrollEnabled={true}
                    pagingEnabled={true}
                    pinchGestureEnabled={false}>
                    {this.props.children}
                </ScrollView>
                <View style={{ height: 80 }}>
                    <Dots
                        style={{
                            height: 100
                        }}
                        length={this.props.children.length}
                        active={this.state.pageNum}
                    />
                </View>
                <FormButtons
                    onNext={nextPage}
                    onPrevious={previousPage}
                    disableNext={this.state.pageNum == this.props.children.length - 1}
                    disablePrevious={
                        this.state.pageNum == 0
                    }
                />
            </View>
        );
        //})
    }
}

const chooseProgressionData = [
    {
        id: 1,
        title: "Load Progression"
    },
    {
        id: 2,
        title: "Double Progression"
    },
    {
        id: 3,
        title: "Linear Periodization"
    },
    {
        id: 4,
        title: "Set Progression"
    }
];
