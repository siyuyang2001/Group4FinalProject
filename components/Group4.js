
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements'


export default function Group4Profile({route,navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Group4's Profile </Text>
      <Text style={styles.body}>Welcome to Group4!
      </Text>
      <Text>  {"\n"} </Text>
      <div>
      Siyu Yang：
      Cosi and econ major. Love cooking and anything related to fashion!
    <Text>  {"\n"} </Text>
      </div>
      <div>
      YiZhe Hong
    <Text>  {"\n"} </Text>
      </div>
      <div>
      Kingsley Zhang:
      Rising senior majoring in CS, Econ and Applied Mathematics. I have a cat named Java.
    <Text>  {"\n"} </Text>
      </div>
      <div>
      MinJun Song:
      Cosi and econ major, rising senior from Korea.
    <Text>  {"\n"} </Text>
      </div>
      <div>
      Ruyi Cai:
      I’m a junior majoring in COSI and IGS. I love reading comics and playing classical music in my free time.

    <Text>  {"\n"} </Text>
      </div>

      <Image
        style= {{ width: 305, height: 300}}
        source=  {require('../assets/cat.png')}
        alt = "Group pic"
      />

      <Button title="Go Home"
          onPress={() => navigation.navigate('Home')} />

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

  },
  headerText: {
    fontSize: 35,
  },
  body: {
    fontSize: 25,
  },

});
