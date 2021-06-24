import React, { useState } from "react";
import { View, Button, Text, TextInput, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Timeline = () => {
  return (
    <View>
      <Text> Here shows the favorite items of the user in time sequence. Items can be
      added here by clicking 'add to favorite' button beside each event. </Text>
    </View>
  )
}

export default Timeline
