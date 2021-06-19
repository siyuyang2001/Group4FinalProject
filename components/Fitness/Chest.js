/*

*/
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';


export default function Chest({route,navigation}) {
  return (
    <View>
      <Text>Chest</Text>
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
