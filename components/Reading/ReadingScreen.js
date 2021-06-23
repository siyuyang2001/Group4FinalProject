import React, { useState } from "react";

import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Image, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ReadingCalculator from './ReadingCalculator';
import ReadingList from './ReadingList';

const Stack = createStackNavigator();

const ReadingScreen = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="ReadingHome"
          component={ReadingHome}/>
        <Stack.Screen
          name="ReadingCalculator"
          component={ReadingCalculator}
          options={{ title: 'Calculator' }} />
        <Stack.Screen
          name="ReadingList"
          component={ReadingList}
          options = {{title: 'List'}} />
      </Stack.Navigator>
  );
}

const ReadingHome = ({ navigation }) => {
  return (
    <View>
      <Text>Explore the Reading Tool!</Text>
      <Button
        title="Calculator"
        color="pink"
        onPress={() =>
          navigation.navigate('ReadingCalculator')
        }
      />
      <Button
        title="List"
        color="orange"
        onPress={() =>
          navigation.navigate('ReadingList')
        }
      />
    </View>
  )
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#C9F9F8',
    alignItems: 'left',
    justifyContent: 'left',
    textAlign:'left',
    padding:20,
  },
  textInput: {
    fontSize: 20,
    margin: 3,
    height: 40
  },
})

export default ReadingScreen;
