/*

*/
import React from 'react';
import { Button,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Abs from './Abs'
import Back from './Back'
import Chest from './Chest'
import Legs from './Legs'
import Record from './Record'
import SmallM from './SmallM'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

  const MyFitnessScreen = () => {
   return (
     <Tab.Navigator>
     <Stack.Screen name="Fitness" component={FitnessPage}
           options={{ title: 'Fitness' }}/>
        <Stack.Screen name="Abs" component={Abs}
           options={{ title: 'Abs' }}/>
        <Stack.Screen name="Back" component={Back}
           options={{title: 'Back'}}/>
       <Stack.Screen name="Chest" component={Chest}
          options={{title: 'Chest'}}/>
        <Stack.Screen name="Legs" component={Legs}
           options={{title: 'Legs'}}/>
           <Stack.Screen name="Small_Muscle" component={SmallM}
               options={{title: 'Small_Muscle'}}/>
           <Stack.Screen name="Record" component={Record}
              options={{title: 'Record'}}/>

</Tab.Navigator>

   );
 };

 // Here is a homescreen with some navigation ...
 const FitnessPage = ({ navigation }) => {
   return (
     <View style={styles.container}>
     <View style={styles.buttonIconSeparatorStyle}>
       <TouchableOpacity
          style={styles.buttonChestStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://cdn1.iconfinder.com/data/icons/miscellaneous-156-line/128/chest_bosom_breastplate_body_man_human_anatomy_fit_health-512.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
           <Button
       title="Work On Chest"
       color='#fff'
       onPress={() =>
         navigation.navigate('Chest')
       }
     />
      </TouchableOpacity>
       <Text>  {"\n"} </Text>
       <TouchableOpacity
          style={styles.buttonBackStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://cdn4.iconfinder.com/data/icons/fitness-vol-2-glyph/512/Back_strong_muscle_exercise_body_parts_medical_sports_man_fitness_natomy-512.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
           <Button
       title="Work On Back"
       color='#fff'
       onPress={() =>
         navigation.navigate('Back')
       }
     />
      </TouchableOpacity>
         <Text>  {"\n"} </Text>
       <TouchableOpacity
          style={styles.buttonAbsStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://cdn0.iconfinder.com/data/icons/fitness-58/50/Fitness-06-512.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
           <Button
       title="Work On Abs"
       color='#fff'
       onPress={() =>
         navigation.navigate('Abs')
       }
     />
      </TouchableOpacity>

         <Text>  {"\n"} </Text>

          <TouchableOpacity
          style={styles.buttonLegsStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://cdn2.iconfinder.com/data/icons/fitness-outline-4/512/body_part_anatomy_leg_muscle_foot-512.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
           <Button
       title="Work on Legs"
       color='#fff'
       onPress={() =>
         navigation.navigate('Legs')
       }
     />
        </TouchableOpacity>
         <Text>  {"\n"} </Text>

        <TouchableOpacity
          style={styles.buttonSmallMStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://cdn.iconscout.com/icon/premium/png-256-thumb/strong-arm-1947587-1654772.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
           <Button
       title="Small Muscles"
       color='#fff'
       onPress={() =>
         navigation.navigate('SmallM')
       }
     />
      </TouchableOpacity>
         <Text>  {"\n"} </Text>

         <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://static.thenounproject.com/png/75540-200.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
           <Button
       title="Make A Record"
       color='#fff'
       onPress={() =>
         navigation.navigate('Record')
       }
     />

        </TouchableOpacity>
         </View>

     </View> //54 view
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
  buttonSmallMStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffe4c4',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
    buttonAbsStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dda0dd',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
      buttonLegsStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffa07a',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
       buttonChestStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#87cefa',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonBackStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0e68c',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  button: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
    width: '100%',
      height: '30%',
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
  },

 });

 export default MyFitnessScreen;
