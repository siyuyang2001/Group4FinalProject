import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



import Food from './Food'
import Profile from'./Profile'
import WeightGraph from './WeightGraph'
import Reminder from'./Reminder'
import Timer from './Timer'

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
          <Stack.Screen name="Rate" component={Rate} />
          <Stack.Screen name="Clock" component={Clock} />


        </Tab.Navigator>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Your kitten"
        color="black"
        alignItems= 'center'
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      />
      <Text>  {"\n"} </Text>

      <Button
        title="Shots Schedule"
        color="red"
        onPress={() =>
          navigation.navigate('Schedule')
        }
      />
      <Text>  {"\n"} </Text>

      <Button
        title="Weight Loss"
        color="green"
        onPress={() =>
          navigation.navigate('Weight')
        }
      />
      <Text>  {"\n"} </Text>

      <Button
        title="Meal Plan"
        color="orange"
        onPress={() =>
          navigation.navigate('Meal')
        }
      />
      <Text>  {"\n"} </Text>

      <Reminder/>
      <Text>  {"\n"} </Text>
      <Button
        title="Set a Timer"
        color="pink"
        alignItems= 'center'
        onPress={() =>
          navigation.navigate('Clock')
        }
      />
      <Text>  {"\n"} </Text>

      <Button
        title="About"
        color="grey"
        onPress={() =>
          navigation.navigate('About')
        }
      />
      <Text>  {"\n"} </Text>

      <Button
        title="Rate the APP"
        color="purple"
        alignItems= 'center'
        onPress={() =>
          navigation.navigate('Rate')
        }
      />

    </View>
  );
};


const Clock = ({ navigation, route }) => {

  return (
    <View>
    <Image
    style={{width:200, height:200}}
    source={require('./mycat.jpg')}
    />


    <Timer/>

    </View>
);
};

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View>
      <Profile/>
    </View>
);
};

const Rate = ({ navigation, route }) => {
  const [rate, setRate] = useState(true);

  return (
    <View style={{alignItems:'center'}}>
    <Text style={{fontSize:30}}> Rate the APP!</Text>
    <TextInput
      style={{
        height: 200,
        borderColor: 'black',
        borderWidth: 1
      }}
      placeholder="Comments"
    />
    <Text>  {"\n"} </Text>
      <Stars
        default={3}
        count={5}
        half={false}
        starSize={50} /* must be set to the size of the custom component if in selection mode */
        fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
        emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
      />
<Text>  {"\n"} </Text>
      <Button
        onPress={() => {
          setRate(false);
        }}
        disabled={!rate}
        title={rate ? "submit" : "Thank you so much!"}
        color="red"
      />

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
       <Button
         title="Go to Calories Plans"
         color="black"
         onPress={() =>
           navigation.navigate('Weight')
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
  rowContainer: {
    flexDirection:'row',
  },
  helloText: {
    fontSize: 40,
  },
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  }
});
export default MyPet;
