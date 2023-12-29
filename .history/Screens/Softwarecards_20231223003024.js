import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';

const Softwarecards = () => {

  const router = useRoute()
  const {paramList1, paramList2} = router.params

  return (
    <View>
        {paramList1.map((item, index) => {
            const correspondingtxt = paramList2[index]
            return <Card style = {styles.card}>
              <Card.Content>
               <Text style = {{textAlign: 'center'}}>{item}</Text>
               <Text style = {{textAlign: 'center'}}>{correspondingtxt}</Text>
              </Card.Content>
            </Card>
          })}   
       </View>
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
     width: 300,
     alignSelf: 'center',
     backgroundColor: randomRGB(),
     borderTopLeftRadius: 50,
     
  }
})

export default Softwarecards;