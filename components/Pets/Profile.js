import React, { useState, useEffect }  from 'react';
import { SafeAreaView, ScrollView, View, Button,
         FlatList, StyleSheet, Text, TextInput, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CatList = (props) => {
  const [cat,setCat] = useState("")
  const [age,setAge] = useState("")
  const [breed,setBreed] = useState("")
  const [catItems,setCatItems]= useState([])

  useEffect(() => {getData()}
           ,[])

  const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@cat_list')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setCatItems(data)
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
          await AsyncStorage.setItem('@cat_list', jsonValue)
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


  const renderCatItem = ({item}) => {
    return (
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.catItem}>
           <Text>Name: {item.cat}  </Text>
           <Text> Age: {item.age} </Text>
           <Text> Breed: {item.breed} </Text>
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
         cat is ({cat})
      </Text>
      <Text>
         age is ({age})
      </Text>
      <Text>
         breed is ({breed})
      </Text>
      <Text>
         catItems is {JSON.stringify(catItems)}
      </Text>
  </View>);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> This is your cat profile </Text>
      <View style={{flexDirection:'column'}}>
      <View>
      <Text>Your Cat's Name:</Text>
        <TextInput
          style={{height: 20}}
          placeholder="name"
          onChangeText={text => {
               setCat(text);
             }}
          value = {cat}
        />
      </View>
      <View>
      <Text>Your Cat's Age:</Text>
        <TextInput
          style={{height: 20}}
          placeholder="age"
          onChangeText={text => {
               setAge(text);
             }}
          value = {age}
        />
      </View>
      <View>
      <Text>Your Cat's Breed:</Text>

        <TextInput
          style={{height: 20}}
          placeholder="breed"
          onChangeText={text => {
               setBreed(text);
             }}
          value = {breed}
        />
      </View>
      </View>
      <View>
        <Button
           title={"Add your new cat"}
           color="pink"
           onPress = {() => {
             const newCatItems =
               catItems.concat(
                 {'cat':cat,
                 'age':age,
                 'breed':breed,
                 'date':new Date()
               })
             setCatItems(newCatItems)
             storeData(newCatItems)
             setCat("")
             setAge("")
             setBreed("")
           }}
           />
      </View>
      <FlatList
        data={catItems}
        renderItem={renderCatItem}
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
    justifyContent: 'center',
    Align:'center',
    marginTop:20,
    padding:20,
  },
  catItem:{
    flexDirection:'row',
    fontSize: 20,
    color: 'purple',
    justifyContent:'space-between',
  },
  headerText: {
    textAlign:'center',
    backgroundColor:'white',
    fontSize: 30,
    padding:10,
    color: 'pink'
  },

});


export default CatList;
