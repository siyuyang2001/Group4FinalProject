import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const WeightGraph = (props)=>{
  const [Curr, setCurr] = useState(0);
  const [Target, setTarget] = useState(0);
  const [Cal, setCal] = useState(0);


      return (
  <View style={styles.container}>
    <Text style={styles.header}>
       Cat's daily calorie is {props.totalCalories}
    </Text>
    <View style ={styles.container2}>
      <Text>Current Weight</Text>
      <TextInput
            style={styles.textinput}
            onChangeText={text => {setCurr(parseFloat(text))}}
            defaultValue={props.totalCalories}
          />
    </View>
    <View style ={styles.container2}>
      <Text>Target Weight</Text>
      <TextInput
            style={styles.textinput}
            onChangeText={text => {setTarget(parseFloat(text))}}
          />
    </View>
    
    <Button
          color='orange' title='Calculate Daily Calories'
          onPress = {() =>
               setCal(Target*16)          }
      />

    <Text> Your cat should eat {Cal} Calories today</Text>


  </View>
      );
    }
  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      color:'red'
    },
    container2: {
      flex: 1,
      flexDirection:'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      color:'grey'
    },
    textinput:{
      margin:20,
      fontSize:20,
      height: 40,
      borderColor: 'grey',
      borderWidth: 1
    },
    header: {
      fontSize:40,
      color:'blue'
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });




export default WeightGraph;
