import React, { useState,useEffect } from "react";
import { Alert,
  Modal,
  StyleSheet,
   Text,
   Pressable,
   View ,
   Button,
     SafeAreaView,
     TouchableOpacity,
     FlatList,
     TextInput,
     Image,
     ScrollView} from "react-native";
     import AsyncStorage from '@react-native-async-storage/async-storage';
     import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyFitnessScreen from './Fitness'

const Item = ({ ex, des,image }) => (
  <View style={styles.item}>
    <Text style={styles.title}>
    Name: {ex}{'\n'}</Text>
    <Text style={styles.title}>
    {image}</Text>
    <Image
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxr4WjK8VgcJPX4sEW4p3GNPrCaB9EY3_DA&usqp=CAU'
            }}
          />
          <Text style={styles.title}>
    Short Description: {'\n'}{des}{'\n'}</Text>
  </View>
);


const Fitness_Template = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [Goal, setGoal] = useState(props.Goal);
  const [part, setepart] = useState(props.part);
  const [ex, setex] = useState("add one");
  const [des, setdes] = useState("add one");
  const [image, setimage] = useState("link of your image");
  const [list,setlist] = React.useState([]);


useEffect(() => {getData()}
           ,[ ])
  const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@'+part+'_list')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setlist(data)
          } else {

            setlist([])

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
          await AsyncStorage.setItem('@'+part+'_list', jsonValue)
        } catch (e) {

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
  const renderItem = ({ item }) => (
    <Item ex={item.ex} des={item.des} image={item.image}/>
  );
const Tab = createBottomTabNavigator();
  return (

    <SafeAreaView style={styles.centeredView}>
    <ScrollView style={styles.scrollView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{Goal}!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}> Hide Goals</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Goals</Text>
      </Pressable>

    <Text style = {{ fontSize: 20, textAlign:'center'}}>
    Exercise on {part}
    </Text>

    <FlatList
        data={list}
        renderItem={renderItem}

      />
          <View style={styles.rowContainer}>
        <Text> Add Exercise: </Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => {setex(text)}}
          value={ex.toString()}
          />
      </View>
      <View style={styles.rowContainer}>
        <Text>URL of image: </Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => {setimage(text)}}
          value={image.toString()}
          />
      </View>
            <View style={styles.rowContainer}>
        <Text>Short Description</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => {setdes(text)}}
          value={des.toString()}
          />
      </View>
      <Button
        title="add"
        onPress={
          () => {
            const newlist =
               list.concat(
                 {'ex':ex, 'des':des, 'image':image})
            setlist(newlist)
          storeData(newlist)
          }}
      />
      <Button
        title="clear data base"
        onPress={
          () => {
            setlist([])
            storeData([])
          }}
      />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    textinput:{
      margin:20,
      fontSize:20
    },
    scrollView: {
    marginHorizontal: 20,
  },
});

export default Fitness_Template;
