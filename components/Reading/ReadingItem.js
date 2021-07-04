import React, { useState } from "react";
import { View, Button, Text, TextInput, StyleSheet} from "react-native";
import Card from './Card'

const ReadingItem = (props) => {
  return (
    <Card>
      <View style={styles.recordItems}>
      <View>
        <Text> {props.readDate} </Text>
        <Text> finished {props.readingTitle} at Episode # {props.episodeNum} </Text>
        <Text> Comment: {props.comment} </Text>
      </View>
      <Button
        title={"Add to favorite"}
        color="orange"
        onPress = {() => {
          const newFavoriteBook =
          props.favoriteBook.concat(
            {'readDate':props.readDate,
             'readingTitle':props.readingTitle,
             'episodeNum':props.episodeNum,
             'comment':props.comment,
             'date':props.date
          })
          props.setFavoriteBook(newFavoriteBook)
          props.storeFavoriteBook(newFavoriteBook)
        }}
      />
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  recordItems:{
    flexDirection:'row',
    justifyContent:'space-between',
    border:'thin solid black',
    margin: 5,
  },
});


export default ReadingItem;
