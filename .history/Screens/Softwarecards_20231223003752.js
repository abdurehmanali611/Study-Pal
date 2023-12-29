import { useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import { Card } from 'react-native-paper';

const Softwarecards = ({navigation}) => {

  const router = useRoute()
  const {paramList1, paramList2} = router.params

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
        {paramList1.map((item, index) => {
            const correspondingtxt = paramList2[index]
            return <Card style = {styles.card}>
              <Card.Content>
               <Text style = {{textAlign: 'center'}}>{item}</Text>
               <Text style = {{textAlign: 'center'}}>{correspondingtxt}</Text>
              </Card.Content>
            </Card>
          })}   
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
      alig
  }
})

export default Softwarecards;