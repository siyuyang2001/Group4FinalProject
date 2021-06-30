import React, { useState, useEffect } from "react";
import { View, Button, Text, TextInput, StyleSheet, FlatList, SafeAreaView, ScrollView } from "react-native";
import { SpeedDial } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Timeline = () => {
  const [favoriteBook, setFavoriteBook] = useState([])
  const [open, setOpen] = useState(false);

  useEffect(() => {getData()}
           ,[])

  const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@favoriteBook')
            let data = null
            if (jsonValue!=null) {
              data = JSON.parse(jsonValue)
              setFavoriteBook(data)
              console.log('just set Favorite Book')
            } else {
              console.log('just read a null value from Storage')
            }


        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
          // error reading value
        }
  }

  const renderFavoriteBook = ({item}) => {
    return (
      <View>
      <Text> readDate: {item.date}, readingTitle: {item.readingTitle} </Text>

      </View>
    )
  }

  return (
    <View style={styles.favoriteBook}>
      <Text> Here shows the favorite items of the user in time sequence. Items can be
      added here by clicking 'add to favorite' button beside each record. </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <FlatList
        data={favoriteBook}
        renderItem={renderFavoriteBook}
        keyExtractor={item => item.date}
      />
      <SpeedDial
        isOpen={open}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
        icon={{ name: 'edit', color: 'white' }}
        openIcon={{ name: 'close', color: 'red' }}

      >
        <SpeedDial.Action
          icon={{ name: 'delete', color: 'gray' }}
          title="Delete All"
          onPress={() => {
            setFavoriteBook([])
          }}
        />
      </SpeedDial>
    </View>
  )
}

const styles = StyleSheet.create({
  favoriteBook: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20
  },
})
export default Timeline

