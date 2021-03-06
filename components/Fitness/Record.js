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
import { Card, ListItem,Tile } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { Constants } from 'expo';
import * as Permissions from 'expo-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyFitnessScreen from './Fitness'


const Item = ({ ex, des,image }) => (
<SafeAreaView>
<Tile
  imageSrc= {{
              uri:
                image
            }}
  title={ex}
  featured
  caption={des}
/>
</SafeAreaView>
);


const Fitness_Template = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [ex, setex] = useState("add one");
  const [des, setdes] = useState("add one");
  const [image, setImage] = useState("link of your image");
  const [list,setlist] = React.useState([]);


useEffect(() => {getData()}
           ,[ ])
  const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@Record_list')
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
          await AsyncStorage.setItem('@Record_list', jsonValue)
        } catch (e) {

        }
  }
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

     let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        base64: true,
        aspect: [10, 20],})
    if (pickerResult.cancelled === true) {
      return;
    }

    setImage(pickerResult.uri);
  };
  let TakePhoto = async () => {
    let cameraPerm = await Permissions.askAsync(Permissions.CAMERA);
    let cameraRollPerm = await Permissions.askAsync(Permissions.CAMERA_ROLL);
if (cameraPerm.granted === false || cameraRollPerm.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }


      let pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [10, 20],
      });
      setImage(pickerResult.uri);
       if (pickerResult.cancelled === true) {
      return;
    }




  };
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
    <Text style = {{ fontSize: 20, textAlign:'center'}}>
    Record of My Days
    </Text>

    <FlatList
        data={list}
        renderItem={renderItem}

      />
          <View style={styles.rowContainer}>
        <Text>What I did: </Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => {setex(text)}}
          value={ex.toString()}
          />
      </View>
      <View style={styles.rowContainer}>
        <Text>My emotion</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => {setdes(text)}}
          value={des.toString()}
          />
      </View>
      <Button title="Pick a photo from your Phone" onPress={openImagePickerAsync} style={styles.button}>
      </Button>
       <Button title="Take a Photo" onPress={TakePhoto}>
      </Button>
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
  image: {
    width: 300,
    height: 300,
    marginRight: 20,
    borderRadius: 20,

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
