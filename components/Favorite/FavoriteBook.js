import React, { useState } from "react";
import { View, Button, Text, TextInput, StyleSheet, Alert} from "react-native";

const FavoriteBook = (props) => {
  const [visible, setVisible] = useState(true)

  const wait = (ms) => {
    var d = new Date();
    var d2 = null;
    do {d2 = new Date();}
    while (d2 - d < ms)
  }

  if (visible) {
    return (
      <View style={styles.favoriteItem}>
      <Text> {props.readDate} finished {props.readingTitle} at Episode # {props.episodeNum} -->> {props.comment} </Text>
      <Button
        title={"Delete"}
        color="orange"
        onPress = {() => {
          wait(500);
          props.favoriteBooks.splice(props.favoriteBooks.indexOf(props.item), 1)
          props.setFavoriteBooks(props.favoriteBooks)
          props.storeFavoriteBook(props.favoriteBooks)
          setVisible(false)
        }}
      />
      </View>
    )
  } else {
    return (
      <View></View>
    )
  }

}

const styles = StyleSheet.create({
  favoriteItem:{
    flexDirection:'row',
    justifyContent:'space-between',
    border:'thin solid black',
    margin: 5,
    marginRight: 80,
  }
})

export default FavoriteBook
