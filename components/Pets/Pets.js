import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Food from './Food'
import Profile from'./Profile'
import WeightGraph from './WeightGraph'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Header = (props) => {
  return (
    <View>
      <Text style={styles.helloText}>
      {props.text}
      </Text>
    </View>
    )
}

const MyPet = () => {
  return (
    <Tab.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home' }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Schedule" component={App2} />
          <Stack.Screen name="Weight" component={WeightChart} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Meal" component={Meal} />
        </Tab.Navigator>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Your kitten"
        color="grey"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      />
      <Button
        title="Schedule"
        color="black"
        onPress={() =>
          navigation.navigate('Schedule')
        }
      />
      <Button
        title="Weight"
        color="grey"
        onPress={() =>
          navigation.navigate('Weight')
        }
      />
      <Button
        title="Meal"
        color="black"
        onPress={() =>
          navigation.navigate('Meal')
        }
      />
      <Button
        title="About"
        color="grey"
        onPress={() =>
          navigation.navigate('About')
        }
      />

    </View>
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return (
    <View>
      <Image
      style={{width:200, height:200}}
      source={require('./mycat.jpg')}
      />
      <Profile/>
    </View>
);
};

const WeightChart = ({ navigation, route }) => {
  const [text, setText] = useState(0);

  return (
    <View>

          <WeightGraph/>

      </View>
  );
};

const AboutScreen = ({ navigation, route }) => {
  return (
    <View>
       <Text>This was created by Kaishuo Zhang</Text>
       <Text>Copyright 2021 All Rights Reserved</Text>
    </View>
  );
};

const App2 = ({navigation,route}) => {
  return (
    <View style={styles.container}>
      <Header text="Your cat's schedule" />
      <View style={{flexDirection:'row'}}>
        <Cat name="first shot" date="May 1st"/>
        <Cat name="Second shot" date="July 1st"/>
        <Cat name="Third shot" date="September 1st"/>
        <Cat name="Forth shot" date="October 1st"/>
        <Cat name="Fifth shot" date="November 1st"/>

      </View>

      <Button
        title="check weights"
        color="black"
        onPress={() =>
          navigation.navigate('Weight')
        }
      />
    </View>
  );
}

const Cat = (props) => {
  const [shotTaken, setShotTaken] = useState(true);
  const [text1, setText1] = useState(props.name);
  const [text2, setText2] = useState(props.date);


  return (
    <View>
      <Text>{text1}</Text>
      <Text>{text2}</Text>
      <Button
        onPress={() => {
          setShotTaken(false);
        }}
        disabled={!shotTaken}
        title={shotTaken ? "the kitten got the shot" : "already taken"}
        color="red"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        onChangeText={text1 => {setText1(text1);setShotTaken(true)}}
        placeholder="Name of the shot"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        onChangeText={text2 => {setText2(text2);setShotTaken(true)}}
        placeholder="Date of the shot"
      />
    </View>
  );
}

const Meal = ({ navigation, route }) => {
  return (
    <View>
       <Food totalCalories={200} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection:'row',
  },
  helloText: {
    fontSize: 40,
  }
});
export default MyPet;
