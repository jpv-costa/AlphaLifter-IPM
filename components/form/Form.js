import { Dimensions, Platform } from "react-native";
import React, { useState } from "react";
import {
    FlatList,
    Text,
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SingleSelectList } from "./SingleSelectList";
import { color, space, layout, size, typography, flexbox } from "styled-system";
import { InputForm } from "./InputForm";
import Dots from "react-native-dots-pagination";
import { FormButtons } from "../button/FormButtons";
import styled from "styled-components";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

// const contentSizePercentage = 0.9;
// const paginationSizePercentage = 0.03;

// const paginationHeight = screenHeight * paginationSizePercentage;
// const contentHeight = screenHeight * contentSizePercentage;
// const formButtonsHeight = screenHeight - paginationHeight - contentHeight;

// console.log("pagination height " + paginationHeight);
// console.log("content height " + contentHeight);
// console.log("form buttons height " + formButtonsHeight);

const View = styled.View`
    ${space}
    ${layout}
    ${flexbox}
    ${color}
`;

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
            <KeyboardAvoidingView
                behavior='padding'
                style={{ flex: 1 }}
                keyboardVerticalOffset={"80"}>
                <View style={{ flexGrow: 1 }}>
                    <ScrollView
                        ref={this.scrollview}
                        horizontal={true}
                        scrollEnabled={false}
                        pagingEnabled={true}
                        pinchGestureEnabled={false}
                        style={{ flexGrow: 1 }}>
                        {this.props.children}
                    </ScrollView>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "flex-end"
                        }}>
                        <View style={{ height: 30 }}>
                            <Dots
                                length={this.props.children.length}
                                active={this.state.pageNum}
                            />
                        </View>
                        <View my={4} mx={1}>
                            <FormButtons
                                onNext={nextPage}
                                onPrevious={previousPage}
                                disableNext={
                                    this.state.pageNum ==
                                    this.props.children.length - 1
                                }
                                disablePrevious={this.state.pageNum == 0}
                            />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
