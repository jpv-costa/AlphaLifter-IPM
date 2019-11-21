import React from "react";
import styled from "styled-components";
import { color, flexbox, space, layout, typography } from "styled-system";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../theme";

const ScrollView = styled.ScrollView`
    ${space}
    ${layout}
`;

const Text = styled.Text`
    ${space}
    ${layout}
    ${color}
    ${typography}
`;

const View = styled.View`
    ${space}
    ${layout}
    ${color}
    ${typography}
`;

const itemSize = 80;

const SelectItem = props => {
    const { label, selected } = props;
    return (
        <View
            mr={5}
            py={2}
            style={{
                width: itemSize,
                justifyContent: "center"
            }}>
            <Text
                fontSize={2}
                numberOfLines={1}
                ellipsizeMode={"tail"}
                color={selected ? "#000" : "#aaa"}>
                {label}
            </Text>
        </View>
    );
};

const Line = styled.View`
    height: 2;
    width: 20;
    position: absolute;
    bottom: 0;
    background-color: #000;
`;

export class HorizontalSelect extends React.PureComponent {
    static SelectItem = SelectItem;

    scrollView = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            values: [],
            selectedValue: props.selectedValue
        };
    }

    render() {
        const { onSelected, width } = this.props;
        const snapInterval = itemSize + theme.space[5];
        return (
            <View
                style={{
                    width: width
                }}>
                <Line />
                <ScrollView
                    ref={this.scrollView}
                    onMomentumScrollEnd={evt => {
                        const index =
                            evt.nativeEvent.contentOffset.x / snapInterval;
                        const selectedValue = this.state.values[index];
                        this.setState({
                            selectedValue: selectedValue
                        });
                        onSelected(selectedValue);
                    }}
                    horizontal
                    contentInset={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: itemSize + theme.space[6] - 4
                    }}
                    snapToInterval={snapInterval}
                    showsHorizontalScrollIndicator={false}>
                    {React.Children.map(this.props.children, child => {
                        this.state.values.push(child.props.value);
                        const isSelected =
                            child.props.value == this.state.selectedValue;
                        return React.cloneElement(child, {
                            selected: isSelected
                        });
                    })}
                </ScrollView>
                <LinearGradient
                    style={{
                        position: "absolute",
                        right: 0,
                        width: itemSize,
                        height: 40
                    }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={[
                        "rgba(255, 255, 255, 0)",
                        "rgba(255, 255, 255, 1)"
                    ]}
                    pointerEvents={"none"}
                />
            </View>
        );
    }
}
