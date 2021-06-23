import React, { useState, useEffect }  from 'react';
import { SafeAreaView, ScrollView, View, Button,
         FlatList, StyleSheet, Text, TextInput, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReadingList = (props) => {
  const [readingTitle,setReadingTitle] = useState("")
  const [episodeNum, setEpisodeNum] = useState("")
  const [readDate,setReadDate] = useState("")
  const [comment,setComment] = useState("")
  const [records,setRecords]= useState([])

  useEffect(() => {getData()}
           ,[])

  const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@todo_list')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setRecords(data)
            console.log('just set Info, Name and Email')
          } else {
            console.log('just read a null value from Storage')
            setInfo({})
            setName("")
            setEmail("")
          }


        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
          // error reading value
        }
  }

  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@todo_list', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
          // saving error
        }
  }

  const clearAll = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.clear()
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
          // clear error
        }
  }


  const renderReadingItem = ({item}) => {
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
         readingTitle is ({readingTitle})
      </Text>
      <Text>
         readDate is ({readDate})
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
      <Text style={styles.headerText}> Reading List </Text>

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
           title={"store"}
           color="#BB68BE"
           onPress = {() => {
             const newRecords =
               records.concat(
                 {'readDate':readDate,
                  'readingTitle':readingTitle,
                  'episodeNum': episodeNum,
                  'comment':comment,
                  'date':new Date()
               })
             setRecords(newRecords)
             storeData(newRecords)
             setReadingTitle("")
             setReadDate("")
             setEpisodeNum("")
             setComment("")
           }}
           />
         <Button
            color='purple' title='Clear memory'
            onPress = {() => {
            console.log('clearing memory');
            clearAll()
          }}
         />
      </View>
      <FlatList
        data={records}
        renderItem={renderReadingItem}
        keyExtractor={item => item.date}
      />
      {debug?debugView: <Text>""</Text>}
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


export default ReadingList;
