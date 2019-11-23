import * as React from "react";
import { StyleSheet, FlatList, Alert, View, Dimensions } from "react-native";
import { SearchBar } from "react-native-elements";
import theme from "../theme";
import styled from "styled-components";
import { color, space, layout, flexbox, size, typography } from "styled-system";

const Container = styled.View`
  ${space}
  ${layout}
  ${flexbox}
`;

export default function Search(props) {
    const { data, placeholder, children, searchProperties, ...other } = props;
    [search, Setsearch] = React.useState("");

    [dataSource, SetDataSource] = React.useState(data);

    const getProperty = (element, path) => {
        if (typeof element == "undefined") {
            return "";
        }

        if (path.length > 1) {
            return getProperty(element[path[0]], path.slice(1, path.length));
        } else {
            const propertyValue = element[path[0]];
            return typeof propertyValue == "undefined" ? "" : element[path[0]];
        }
    };

    function SearchFilterFunction(text, array) {
        const valueExistsInArray = (searchValue, array) => {
            let found = false;
            array.forEach(value => {
                if (
                    value.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
                ) {
                    found = true;
                }
            });
            return found;
        };

        return array.filter(function(item) {
            let found = true;

            const searchTerms = text.split(" ");

            searchTerms.forEach(searchTerm => {
                let foundInProperties = false;
                searchProperties.forEach(propertyPath => {
                    const splitProperty = propertyPath.split("@");

                    let pathIndex;

                    if (splitProperty.length == 1) {
                        pathIndex = 0;
                    } else {
                        pathIndex = 1;
                    }

                    const splitPath = splitProperty[pathIndex].split(".");
                    let propertyItems = getProperty(item, splitPath);

                    if (!Array.isArray(propertyItems)) {
                        propertyItems = [propertyItems];
                    }

                    if (valueExistsInArray(searchTerm, propertyItems)) {
                        foundInProperties = true;
                    }
                });
                found = found && foundInProperties;
            });

            return found;
        });
    }

    return (
        <Container {...other}>
            <SearchBar
                containerStyle={{
                    backgroundColor: "#fff",
                    paddingBottom: theme.space[0],
                    borderTopColor: "transparent",
                    paddingTop: theme.space[0],
                    paddingLeft: theme.space[1],
                    paddingRight: theme.space[1],
                    width: "100%"
                }}
                inputContainerStyle={{
                    backgroundColor: "#fff",
                    width: "100%",
                    fontSize: theme.fontSizes[1]
                }}
                lightTheme
                searchIcon={{ size: theme.fontSizes[5] }}
                onChangeText={text => {
                    SetDataSource(SearchFilterFunction(text, data));
                    Setsearch(text);
                }}
                onClear={text => {
                    SetDataSource(SearchFilterFunction("", data));
                    Setsearch("");
                }}
                placeholder={placeholder ? placeholder : "Type Here..."}
                value={search}
            />
            {React.Children.map(children, child => {
                return React.cloneElement(child, {
                    data: dataSource
                });
            })}
        </Container>
    );
}
