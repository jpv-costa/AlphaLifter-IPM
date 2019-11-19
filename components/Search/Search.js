import * as React from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';
import { SearchBar } from 'react-native-elements';

import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";


const Text = styled.Text`
${space}
${layout}
${color}
${typography}
${size}
justifyContent: center;
alignItems: center;
`;
const View = styled.TouchableOpacity`
    ${space}
    ${layout}
   
`;

const TextDescription = styled.Text`
${space}
${layout}
${color}
${typography}
${size}
justifyContent: center;
alignItems: center;
opacity: 0.7;
`;

export  class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {search: '', dataSource: props.data};
        this.arrayholder = props.data;
      }


     
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemName = item.name ? item.name.toUpperCase() : '';
      const itemPMuscle = item.primaryMuscles ? item.primaryMuscles.toUpperCase() : '';
      const itemSMuscle = item.secondaryMuscles ? item.secondaryMuscles.toUpperCase() : '';
      const itemType = item.type? item.type.toUpperCase(): '';
      const textData = text.toUpperCase();
      return itemName.indexOf(textData) > -1||
             itemPMuscle.indexOf(textData) > -1||
             itemSMuscle.indexOf(textData) > -1||
             itemType.indexOf(textData)>-1 ;
    });

    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });
  }

  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };

  render() {
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle} >
        <SearchBar
        containerStyle = {styles.searchStyle}
          round
          lightTheme
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={this.state.search}
        />
        <FlatList
          data={this.state.dataSource}
          
          //Item Separator View
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <View>
              <Text fontSize = {4} pt = {2}>{item.name}</Text>
              <TextDescription fontSize = {3} ml = {2}>
                 {item.type} exercise wich involve {item.primaryMuscles} and {item.secondaryMuscles}</TextDescription>
            </View>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  searchStyle: {
    backgroundColor: 'white',
    width: 350
  }

});





