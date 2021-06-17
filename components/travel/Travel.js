/*

*/
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import ListItem from './ListItem'


export default function Travel({route,navigation}) {
  return (
    <View>
      <ListItem
          title={'My Summer Vacation'}
          content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt'}
          date={'18 June 2020'}
          location={'Tokyo, Japan'}
          image={'Tokyo-2021.jpg'}
      />
      <ListItem
          title={'My Summer Vacation'}
          content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt'}
          date={'18 June 2020'}
          location={'Tokyo, Japan'}
          image={'Tokyo-2021.jpg'}
      />
      <ListItem
          title={'My Summer Vacation'}
          content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt'}
          date={'18 June 2020'}
          location={'Tokyo, Japan'}
          image={'Tokyo-2021.jpg'}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:'25%',
    marginTop:20,
    padding:20,
  },
  headerText: {
    fontSize: 40,
    color: 'blue'
  },

});
