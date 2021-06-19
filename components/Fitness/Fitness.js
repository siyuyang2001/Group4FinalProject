/*

*/
import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Abs from './Abs'
import Back from './Back'
import Chest from './Chest'
import Legs from './Legs'
import Record from './Record'
import SmallM from './SmallM'

const Stack = createStackNavigator();
  const MyFitnessScreen = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Abs" component={Abs}
           options={{ title: 'Abs' }}/>
        <Stack.Screen name="Back" component={Back}
           options={{title: 'Back'}}/>
       <Stack.Screen name="Chest" component={Chest}
          options={{title: 'Chest'}}/>
        <Stack.Screen name="Legs" component={Legs}
           options={{title: 'Legs'}}/>
           <Stack.Screen name="Record" component={Record}
              options={{title: 'Record'}}/>
            <Stack.Screen name="SmallM" component={SmallM}
               options={{title: 'SmallM'}}/>

      </Stack.Navigator>
     </NavigationContainer>
   );
 };

 // Here is a homescreen with some navigation ...
 const HomeScreen = ({ navigation }) => {
   return (
     <View style={styles.container}>
       <Button
         title="Work On Chest"
         color="#e9967a"
         onPress={() =>
           navigation.navigate('Chest')
         }
       />
       <Text>  {"\n"} </Text>
       <Button
         title="Work On Back"
         color="#b0c4de"
         onPress={() =>
           navigation.navigate('Back')
         }
       />
         <Text>  {"\n"} </Text>
       <Button
         title="Work On Abs"
         color="#add8e6"
         onPress={() =>
           navigation.navigate('Abs')
         }
       />
         <Text>  {"\n"} </Text>
       <Button
         title="Work On Legs"
         color="#8fbc8f"
         onPress={() =>
           navigation.navigate('Legs')
         }
       />
         <Text>  {"\n"} </Text>
       <Button
         title="Work On Small Muscle"
         color="#add8e6"
         onPress={() =>
           navigation.navigate('SmallM')
         }
       />
         <Text>  {"\n"} </Text>
         <View style={styles.container}>
         <TouchableOpacity
         <TouchableOpacity
        style={styles.buttonFacebookStyle}
        activeOpacity={0.5}>
        <EditOutlined style = {{height: 25,  width: 35,}}/>
        <View style={styles.buttonIconSeparatorStyle} />
        <Button
       title="Record"
       color='#485a96'
       onPress={() =>
         navigation.navigate('Record')
       }
     />
      </TouchableOpacity>
         </View>
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
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
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
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },

 });

 export default MyFitnessScreen;
