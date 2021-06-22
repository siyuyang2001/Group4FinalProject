import React, { useState, useEffect }  from 'react';
import { SafeAreaView, ScrollView, View, Button,
         FlatList, StyleSheet, Text, TextInput, StatusBar } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';

const ReadingHistory = (props) => {
  const [readingTitle,setReadingTitle] = useState("")
  const [episodeNum, setEpisodeNum] = useState("")
  const [readDate,setReadDate] = useState("")
  const [comment,setComment] = useState("")
  const [records,setRecords]= useState([])

  const renderReadItem = ({item}) => {
    return (
      <View style={styles.recordItems}>
        <Text style={styles.records}>
           <Text> {item.readDate} </Text>
           <Text> finished {item.readingTitle} at </Text>
           <Text> Episode # {item.episodeNum} </Text>
           <Text> -->> {item.comment} </Text>
        </Text>
      </View>
    )
  }

  let debug=false
  const debugView =
    (<View>
      <Text style={styles.headerText}>
        DEBUGGING INFO
      </Text>
      <Text>
         readDate is ({readDate})
      </Text>
      <Text>
         readingTitle is ({readingTitle})
      </Text>
      <Text>
         episodeNum is ({episodeNum})
      </Text>
      <Text>
         comment is ({comment})
      </Text>
      <Text>
         records is {JSON.stringify(records)}
      </Text>
  </View>);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Reading History Memo </Text>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Enter today's date"
          onChangeText={text => {
               setReadDate(text);
             }}
          value = {readDate}
        />
      </View>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Enter title of the book/comic/magzine and episode number here"
          onChangeText={text => {
               setReadingTitle(text);
             }}
          value = {readingTitle}
        />
      </View>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Enter episode number here"
          onChangeText={text => {
               setEpisodeNum(text);
             }}
          value = {episodeNum}
        />
      </View>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your comment/short notes"
          onChangeText={text => {
               setComment(text);
             }}
          value = {comment}
        />
      </View>
      <View>
        <Button
           title={"go"}
           color="#BB68BE"
           onPress = {() => {
             setRecords(records.concat(
               {'readDate':readDate, 'readingTitle':readingTitle, 'episodeNum': episodeNum, 'comment':comment, 'date':new Date()}))
             setReadingTitle("")
             setReadDate("")
             setComment("")
           }}
           />
      </View>
      <FlatList
        data={records}
        renderItem={renderReadItem}
        keyExtractor={item => item.date}
      />
      {debug?debugView: ""}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#F7F7C5',
    alignItems: 'left',
    justifyContent: 'left',
    textAlign:'left',
    padding:20,
  },
  records:{
    justifyContent:'left',
    fontSize: 10,
    fontFamily: "Comic Sans MS",
  },
  textInput: {
    fontSize: 10,
    margin: 3,
    height: 20
  },
  headerText: {
    textAlign:'center',
    backgroundColor:'#DFCAE8',
    fontSize: 15,
    padding:10,
    color: '#B421F2',
    fontFamily: "Comic Sans MS",
  },
  recordItems:{
    border:'thin solid black',
    margin: 5,
  }

});


export default ReadingHistory;
