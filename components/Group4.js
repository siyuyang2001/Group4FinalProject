import React from 'react';
import { StyleSheet, Image, Text, View,SafeAreaView} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';



export default function Group4Profile({route,navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerText}> Group4's Profile </Text>
      <Text style={styles.body}>  {"\n"}Welcome to Group4!
      </Text>
      <Image
        style= {{ width: 305, height: 300}}
        source=  {require('../assets/cat.png')}
        alt = "Group pic"
      />
      <Text style={styles.body}>  {"\n"}  Meet our group mascot Java!</Text>


                <Card>
                  <Card.Content>
                    <Title style={{fontSize: 30, fontWeight: "bold",marginTop:10}}>Yizhe Hong</Title>
                    <Paragraph>  I am a junior majoring in Computer Science and Applied Mathematics. {'\n'}I will be a good programmer in the future!</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/701' }} />
                </Card>

        <Card>
          <Card.Content>
            <Title style={{fontSize: 30, fontWeight: "bold",marginTop:10}}>Ruyi Cai</Title>
            <Paragraph> I’m a junior majoring in COSI and IGS. {'\n'}I love reading comics and playing classical music in my free time.</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/701' }} />
        </Card>


        <Card>
          <Card.Content>
            <Title style={{fontSize: 30, fontWeight: "bold",marginTop:10}}>Kingsley Zhang </Title>
            <Paragraph> Rising senior majoring in CS, Econ and applied Mathematics.{'\n'}I have a cat named Java.</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/701' }} />
        </Card>
        <Card>
          <Card.Content>
            <Title style={{fontSize: 30, fontWeight: "bold",marginTop:10}}>Richard Hu</Title>
            <Paragraph>   Rising junior majoring in chemistry.{'\n'} Love playing soccer and reading novels.</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/701' }} />
        </Card>

        <View style={{flex: 5, flexDirection: 'row'}}>
          <Card>
              <Card.Content>
                <Title style={{fontSize: 30, fontWeight: "bold",marginTop:10}}>Minjun Song</Title>
                <Paragraph>   Cosi and econ major, rising senior from Korea.</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: 'https://picsum.photos/701' }} />
            </Card>

        </View>
          
        <Card>
            <Card.Content>
              <Title style={{fontSize: 30, fontWeight: "bold",marginTop:10}}>Siyu Yang</Title>
              <Paragraph> Rising junior with cosi and econ major.{'\n'}I Love cooking and anything related to fashion!</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/701' }} />
        </Card>


      <Button title="Go Home"
          onPress={() => navigation.navigate('Home')} />


      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  headerText: {
    fontSize: 35,
  },
  body: {
    fontSize: 25,
  },

});
