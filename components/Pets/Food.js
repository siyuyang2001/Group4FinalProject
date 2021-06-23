import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Food = (props)=>{
  const [Daily, setDaily] = useState(0);
  const [Breakfast, setBreakfast] = useState(0);
  const [Lunch, setLunch] = useState(0);
  const [Dinner, setDinner] = useState(0);
  const [Total, setTotal] = useState(0);

      return (
  <View style={styles.container}>
    <Text style={styles.header}>
       Cat's daily calorie is {props.totalCalories}
    </Text>
    <View style ={styles.container2}>
      <Text>Daily Calories</Text>
      <TextInput
            style={styles.textinput}
            onChangeText={text => {setDaily(parseFloat(text))}}
            defaultValue={props.totalCalories}
          />
    </View>
    <View style ={styles.container2}>
      <Text>Breakfast</Text>
      <TextInput
            style={styles.textinput}
            onChangeText={text => {setBreakfast(parseFloat(text))}}
          />
    </View>
    <View style ={styles.container2}>
      <Text>Lunch</Text>
      <TextInput
            style={styles.textinput}
            onChangeText={text => {setLunch(parseFloat(text))}}
          />
    </View>
    <View style ={styles.container2}>
      <Text>Dinner</Text>
      <TextInput
            style={styles.textinput}
            onChangeText={text => {setDinner(parseFloat(text))}}
          />
    </View>
    <Button
          color='red' title='Calculate Total Calories'
          onPress = {() =>
               setTotal(Breakfast+Lunch+Dinner)          }
      />

    <Text> Your cat ate {Total} Calories today</Text>
    <Text> Your cat can eat {Daily-Total} more Calories</Text>

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




export default Food;
