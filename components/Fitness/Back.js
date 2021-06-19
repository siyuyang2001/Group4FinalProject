/*

*/
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';


export default function Back({route,navigation}) {
  return (
    <View>
      <Text>Back</Text>
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
