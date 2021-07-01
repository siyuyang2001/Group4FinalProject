import React, { useState, useEffect } from "react";
import { View, Button, Text, TextInput, StyleSheet, FlatList, SafeAreaView, ScrollView, Alert } from "react-native";
import { SpeedDial } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Favorite = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([])
  const [open, setOpen] = useState(false);

  useEffect(() => {getData()}
           ,[])

  const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@favoriteBook')
            let data = null
            if (jsonValue!=null) {
              data = JSON.parse(jsonValue)
              setFavoriteBooks(data)
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

  const storeFavoriteBook = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@favoriteBook', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
        }
  }

  const clearFavoriteBook = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.removeItem('@favoriteBook')
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
          // clear error
        }
  }

  const renderFavoriteBooks = ({item}) => {
    return (
      <View style={styles.favoriteItem}>
      <Text> {item.readDate} finished {item.readingTitle} at Episode # {item.episodeNum} -->> {item.comment} </Text>
      <Button
        title={"Delete"}
        color="orange"
        onPress = {() => {
          favoriteBooks.splice(favoriteBooks.indexOf(item), 1)
          setFavoriteBooks(favoriteBooks)
          storeFavoriteBook(favoriteBooks)

        }}
      />
      </View>
    )
  }

  return (
    <View style={{marginHorizontal: 20}}>
      <Text style={styles.headerText}> Here shows the user's favorite items. Items can be
      added here by clicking the 'add to favorite' button beside each record. </Text>
      <Text> </Text>
      <Text> </Text>
      <Text style={styles.subtitle}> Favorite Books </Text>
      <Text> </Text>
      <FlatList
        data={favoriteBooks}
        renderItem={renderFavoriteBooks}
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
            setFavoriteBooks([])
            clearFavoriteBook()
            alert("All favorite books deleted!")
          }}
        />
      </SpeedDial>
    </View>
  )
}

const styles = StyleSheet.create({
  headerText: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
    fontSize: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  favoriteItem:{
    flexDirection:'row',
    justifyContent:'space-between',
    border:'thin solid black',
    margin: 5,
    marginRight: 80,
  }
})
export default Favorite
