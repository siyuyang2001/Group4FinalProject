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
          title={'My Favorite Place'}
          content={'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          date={'5 December 2018'}
          location={'New York, USA'}
          image={'NewYork.jpg'}
      />
      <ListItem
          title={'My Dream City'}
          content={'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
          date={'00 AAA 2050'}
          location={'Paris, France'}
          image={'paris.jpg'}
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
