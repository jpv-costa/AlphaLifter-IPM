import { Dimensions, Platform } from "react-native";
import React, { useState } from "react";
import { FlatList, View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SingleSelectList } from "./SingleSelectList";
import { InputForm } from "./InputForm";
import Dots from "react-native-dots-pagination";
import { FormButtons } from "../button/FormButtons";
import styled from "styled-components";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
console.log("Form height " + screenHeight);

const contentSizePercentage = 0.9;
const paginationSizePercentage = 0.03;

const paginationHeight = screenHeight * paginationSizePercentage;
const contentHeight = screenHeight * contentSizePercentage;
const formButtonsHeight = screenHeight-paginationHeight-contentHeight;

console.log("pagination height " + paginationHeight);
console.log("content height " + contentHeight);
console.log("form buttons height " + formButtonsHeight);

export class Form extends React.Component {
    state = {
        pageNum: 0
    };

    scrollview = React.createRef();

    render() {
        //const screens =  props.childern.map((item) => {
        const previousPage = () => {
            this.scrollview.current.scrollTo({
                x: (this.state.pageNum - 1) * screenWidth,
                y: 0,
                animated: true
            });
            this.setState(previousState => ({
                pageNum: previousState.pageNum - 1
            }));
        };

        const nextPage = () => {
            this.scrollview.current.scrollTo({
                x: (this.state.pageNum + 1) * screenWidth,
                y: 0,
                animated: true
            });
            this.setState(previousState => ({
                pageNum: previousState.pageNum + 1
            }));
        };

        return (
            <KeyboardAvoidingView>
                <ScrollView
                    ref={this.scrollview}
                    horizontal={true}
                    scrollEnabled={true}
                    pagingEnabled={true}
                    pinchGestureEnabled={false}
                    style={{height: contentHeight}}
                    >
                    {this.props.children}
                </ScrollView>
                <View style={{width: screenWidth, height:paginationHeight+formButtonsHeight }}>
                    <Dots
                        length={this.props.children.length}
                        active={this.state.pageNum}
                        style={{height: paginationHeight}}
                    />
                    <FormButtons
                        onNext={nextPage}
                        onPrevious={previousPage}
                        disableNext={this.state.pageNum == this.props.children.length - 1}
                        disablePrevious={
                            this.state.pageNum == 0
                        }
                        height={formButtonsHeight}
                    />
                </View>
            </KeyboardAvoidingView>
        );
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
