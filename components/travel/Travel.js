/*

*/
import React, { useState, useEffect }  from 'react';
import { StyleSheet, Image, Text, View, Button, FlatList, StatusBar, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListItem from './ListItem'


export default function Travel({route, navigation}) {
  const [image, setImage] = useState("")
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [location, setLocation] = useState("")
  const [content, setContent] = useState("")
  const [travelData, setTravelData] = useState([])

  useEffect(() => {getData()}, [])

  const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@travel_data')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setTravelData(data)
          } else {
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
          await AsyncStorage.setItem('@travel_data', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
          // saving error
        }
  }

  const renderTravelItem = ({ item }) => (
    <ListItem
      title={item.title}
      content={item.content}
      date={item.date}
      location={item.location}
      image={item.image}
    />
  );

  return (
    <View>

      <FlatList
        data={travelData}
        renderItem={renderTravelItem}
        keyExtractor={item => item.title}
      />

          <Text style={styles.headerText}> Add a New Travel </Text>



          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Image URL"
              onChangeText={text => {
                   setImage(text);
                 }}
              value = {image}
            />
          </View>

          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Title"
              onChangeText={text => {
                   setTitle(text);
                 }}
              value = {title}
            />
          </View>

          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Date"
              onChangeText={text => {
                   setDate(text);
                 }}
              value = {date}
            />
          </View>



          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Location"
              onChangeText={text => {
                   setLocation(text);
                 }}
              value = {location}
            />
          </View>

          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Content"
              onChangeText={text => {
                   setContent(text);
                 }}
              value = {content}
            />
          </View>

          <View>
            <Button
               title={"Add"}
               color="#87CEEB"
               onPress = {() => {
                 const newTravel =
                   travelData.concat(
                     {'title':title,
                      'content':content,
                      'date': date,
                      'location':location,
                      'image':image
                   })
                 setTravelData(newTravel)
                 storeData(newTravel)
                 setImage("")
                 setTitle("")
                 setDate("")
                 setLocation("")
                 setContent("")
               }}
               />
          </View>
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
