/*

*/
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import Fitness_Template from './Fitness_template.js'

export default function Legs({route,navigation}) {
  return (
    <View>
      <Fitness_Template Goal = 'Squat!' part = "Legs"/>
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
