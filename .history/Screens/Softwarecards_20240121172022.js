import React, { useContext } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import { appProvider } from './Softwareeng';
import { Card } from 'react-native-paper';

const Softwarecards = ({navigation}) => {

  const {newtitleflashcardsof} = useContext(appProvider)

  return (
    <ScrollView>
       <View>
        <TouchableOpacity
        onPress={() => navigation.navigate('software')}
        style = {styles.touch}
        >
          <Text>Add FlashCards</Text>
        </TouchableOpacity>
       </View>  
       <Card>
        <Card.Content>
          <Text>{title}</Text>
        </Card.Content>
       </Card>
       </ScrollView>
    );
}

const randomRGB = () => {

  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red}, ${green}, ${blue})`
} 
const styles = StyleSheet.create ({
  card: {
     marginVertical: 20,
     width: 320,
     alignSelf: 'center',
     backgroundColor: randomRGB(),
     borderTopLeftRadius: 50,
     borderBottomRightRadius: 50
  },
  touch: {
      marginVertical: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: randomRGB(),
      width: 200,
      height: 60,
      alignSelf: 'center',
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 30
  }
})

export default Softwarecards;