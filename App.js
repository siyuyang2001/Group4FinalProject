import React from 'react';
import {Button, Text, StyleSheet, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Travel from './components/travel/Travel.js'
import Fitness from './components/Fitness/Fitness.js'
import Reading from './components/Reading/ReadingScreen.js'
import Group4 from './components/Group4'
import Pets from './components/Pets/Pets.js'
import Timeline from './components/Timeline/Timeline.js'

//import  from './components/'

//import  from './components/'

//import  from './components/'


//
 const Stack = createStackNavigator();
   const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen}
            options={{ title: 'My LifeStyle' }}/>
         <Stack.Screen name="Travel" component={Travel}
            options={{title: 'Travel'}}/>
        <Stack.Screen name="Pets" component={Pets}
               options={{title: 'Pets'}}/>
        <Stack.Screen name="Fitness" component={Fitness}
           options={{title: 'Fitness'}}/>
        <Stack.Screen name="Reading" component={Reading}
           options={{title: 'Reading'}}/>
        <Stack.Screen name="Timeline" component={Timeline}
           options={{title: 'Timeline'}}/>
         <Stack.Screen name="Group4" component={Group4}
            options={{title: 'Group4'}}/>

       </Stack.Navigator>
      </NavigationContainer>
    );
  };

// Here is a homescreen with some navigation ...
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Explore Fitness"
        color="#e9967a"

        onPress={() =>
          navigation.navigate('Fitness')
        }
      />
      <Text>  {"\n"} </Text>
      <Button
        title="Explore Reading"
        color="#b0c4de"
        onPress={() =>
           navigation.navigate('Reading')
         }
      />
        <Text>  {"\n"} </Text>
      <Button
        title="Explore Pet/Family"
        color="#add8e6"
        onPress={() =>
           navigation.navigate('Pets')
         }
      />
        <Text>  {"\n"} </Text>
      <Button
        title="Explore TimeLine"
        color="#8fbc8f"
        onPress={() =>
           navigation.navigate('Timeline')
        }
      />
        <Text>  {"\n"} </Text>
      <Button
        title="Explore Travel"
        color="#add8e6"
        onPress={() =>
          navigation.navigate('Travel')
        }
      />
        <Text>  {"\n"} </Text>
      <Button
        title="Explore Group4"
        color="#d8bfd8"
        onPress={() =>
           navigation.navigate('Group4')
         }

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  headerText: {
    fontSize: 40,
    color: 'blue'
  },

});

export default MyStack;
