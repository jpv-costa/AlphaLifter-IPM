import * as React from 'react';
import {
  StyleSheet,
  FlatList,
  Alert,
  View, Dimensions
} from 'react-native';
import { SearchBar } from 'react-native-elements';

import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";
const screenWidth = Math.round(Dimensions.get('window').width);


const ViewTouch = styled.TouchableOpacity`
    ${space}
    ${layout}
 
      borderRadius:10;
     
`;

const Text = styled.Text`
${space}
${layout}
${color}
${typography}
${size}
justifyContent: center;
alignItems: center;

  color: ${props =>props.selected ? props.theme.colors.secondaryTints[1] : "black"};
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

  color: ${props =>props.selected ? props.theme.colors.secondaryTints[1] : "black"};
`;
 


export default function Search (props) { 
 
  const { data,  selectedId, Workouts } = props;
   [search, Setsearch] = React.useState('');
   [dataSource,SetdataSource]= React.useState(data); 
   [currentEx, SetcurrentEx] = React.useState('');
   const arrayholder = data;
   const [selected, setSelected] = React.useState(selectedId);
  
   
  function SearchFilterFunction(text, array)  {
   return array.filter(function(item) {
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
  }

 
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle} >
        <SearchBar
        containerStyle = {styles.searchStyle}
          round
          lightTheme
          searchIcon={{ size: 24 }}
          onChangeText={text => {SetdataSource(SearchFilterFunction(text, array = arrayholder));Setsearch(text)}}
          onClear={text =>{ SetdataSource(SearchFilterFunction('',array = arrayholder));Setsearch('')}}
          placeholder="Type Here..."
          value={search}
        />
        <FlatList
          data={dataSource}
          renderItem={({ item }) => ( 
            <ViewTouch selected={selected == item.id} 
            onPress={() => { setSelected(item.id);SetcurrentEx(item.name);console.log(item.name)}}
            px = {2} py = {2} mx = {1}>
              <Text fontSize = {4} selected={selected == item.id}>{item.name}  </Text>
             
             {Workouts==true ? <TextDescription fontSize = {3} ml = {2} >
           {item.exercises} exercises wich involve {item.primaryMuscles}</TextDescription> : 
          <TextDescription fontSize = {3} ml = {2}  selected={selected == item.id} >
               {item.type} exercise wich involve {item.primaryMuscles} and {item.secondaryMuscles}</TextDescription>}
            </ViewTouch>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }


const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    width : screenWidth,
     justifyContent: 'center',
    alignItems: 'center'
  },
  searchStyle: {
    backgroundColor: 'white',
    width: 350, 

  }

});









