import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { LineChart } from "./LineChart";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { SafeAreaView } from "react-native";
import { getDEMApoints } from "../../../utils";

const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

storiesOf("Charts", module)
    // The ThemeProvider feeds the theme options to the components scope
    // (therefore the component can use them),
    // and centers the component in the screen
    .addDecorator(story => (
        <SafeAreaView style={{ flex: 1 }}>
            <ThemeProvider theme={theme}>
                <CenteredView>{story()}</CenteredView>
            </ThemeProvider>
        </SafeAreaView>
    ))
    .addDecorator(withKnobs)
    .add("LineChart with DEMA", () => (
        <LineChart dataTrend={dataTrend} dataPoints={data} height={200} />
    ));

const data = [
    { date: new Date(2018, 10, 10), y: 74.1 },
    { date: new Date(2018, 10, 11), y: 72.7 },
    { date: new Date(2018, 10, 12), y: 73.2 },
    { date: new Date(2018, 10, 13), y: 73.2 },
    { date: new Date(2018, 10, 14), y: 72 },
    { date: new Date(2018, 10, 15), y: 72 },
    { date: new Date(2018, 10, 16), y: 73 },
    { date: new Date(2018, 10, 17), y: 72 },
    { date: new Date(2018, 10, 18), y: 98 },
    { date: new Date(2018, 10, 19), y: 110 },
    { date: new Date(2018, 10, 20), y: 100 },
    { date: new Date(2018, 10, 21), y: 102 },
    { date: new Date(2018, 10, 22), y: 108 },
    { date: new Date(2018, 10, 23), y: 105 },
    { date: new Date(2018, 10, 24), y: 115 },
    { date: new Date(2018, 10, 25), y: 120 }
];

const dataTrend = getDEMApoints(data, 7);
