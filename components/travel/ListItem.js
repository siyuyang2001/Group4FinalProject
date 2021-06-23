import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';


export default function ListItem( props ) {
  return (

      <View style={styles.container}>
        <Image
          style= {styles.image}
          source=  {{uri: props.image}}
          alt = "image"
        />

        <View style={styles.subContainer}>
          <Text style={styles.title}> {props.title} </Text>
          <Text style={styles.date}> {props.date} </Text>
          <Text style={styles.location}> {props.location} </Text>
          <Text style={styles.content}> {props.content} </Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:20,
    padding:20,
  },
  subContainer: {
      flexDirection: 'column',
  },
  title: {
    fontSize: 40,
    color: '#222222',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 300,
    marginRight: 20,
    borderRadius: 20,

  },
  location: {
    marginBottom: 10,

  }

});
