import React, { useState }  from 'react';
import { ImageBackground, SafeAreaView, ScrollView, View, Button,
         FlatList, StyleSheet, Text, TextInput, StatusBar } from 'react-native';

const Rating = () => {
  const [defaultRating, sefDefaultRating] = useState(2)
  const [maxRating, setMaxRating] = useState([1,2,3,4,5])

  const starFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
  const starBlank = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true'

  const ratingBar = () => {
    return (
      <View style={styles.ratingBarStyle}>
        {
          maxRating.map((item, key) => {
            return(
              <TouchableOpacity
                activeOpacity={0.7}
                key={item}
                onPress={() => sefDefaultRating(item)}
              >
              <Image
                style={styles.star}
                source={
                  item<=sefDefaultRating
                  ? {uri: starFilled}
                  : {uri: starBlank}
                }/>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }

  return (
    <SafeAreaView>
      <Text> Rate Here </Text>
      <ratingBar />
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  ratingBarStyle:{
    justifyContent: 'center',
    flexDirection:'row',
    marginTop:10,
    backgroundColor: 'green',
    height:10,
    width:10,
  },
  star:{
    resizeMode: 'cover'
  },
})

export default Rating;
