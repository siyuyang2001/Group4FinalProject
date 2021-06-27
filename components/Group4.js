
import React from 'react';
import { StyleSheet, Image, Text, View,SafeAreaView} from 'react-native';
import { Button, Icon } from 'react-native-elements'


export default function Group4Profile({route,navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}> Group4's Profile </Text>
      <Text style={styles.body}>  {"\n"}Welcome to Group4!
      </Text>

      <Text>  {"\n"} </Text>
      <div>
    <Text style={{fontWeight: "bold"}}>   Siyu Yang：</Text>
      Cosi and econ major. Love cooking and anything related to fashion!
    <Text>  {"\n"} </Text>
      </div>
      <div>
    <Text style={{fontWeight: "bold"}}>  YiZhe Hong: </Text>
     I am a junior majoring in Computer Science and Applied Mathematics. I will be a good programmer in the future!
    <Text>  {"\n"} </Text>
      </div>

      <div>
    <Text style={{fontWeight: "bold"}}>   Kingsley Zhang: </Text>
      Rising senior majoring in CS, Econ and Applied Mathematics. I have a cat named Java.
    <Text>  {"\n"} </Text>
      </div>
      <div>
    <Text style={{fontWeight: "bold"}}>   MinJun Song: </Text>
      Cosi and econ major, rising senior from Korea.
    <Text>  {"\n"} </Text>
      </div>
      <div>
     <Text style={{fontWeight: "bold"}}> Ruyi Cai: </Text>
      I’m a junior majoring in COSI and IGS. I love reading comics and playing classical music in my free time.
     <Text>  {"\n"} </Text>
      </div>
      <div>
     <Text style={{fontWeight: "bold"}}>   Richard Hu: </Text>
      Rising junior majoring in chemistry. Love playing soccer and reading novels.
     <Text>  {"\n"} </Text>
      </div>

      <Image
        style= {{ width: 305, height: 300}}
        source=  {require('../assets/cat.png')}
        alt = "Group pic"
      />
      Meet our group mascot Java!

      <Button title="Go Home"
          onPress={() => navigation.navigate('Home')} />

    </SafeAreaView >
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  headerText: {
    fontSize: 35,
  },
  body: {
    fontSize: 25,
  },
  middle:{
    alignItems: 'center',
      justifyContent: 'center',
  },

});
