import React, { useState } from "react";
import { Alert,
  Modal,
  StyleSheet,
   Text,
   Pressable,
   View ,
   Button,
     SafeAreaView,
     TouchableOpacity,} from "react-native";
import Fitness_Template from './Fitness_template.js'
     

export default function Chest({route,navigation}) {
  return (
    <View>
      <Fitness_Template Goal = 'Work!'/>
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
