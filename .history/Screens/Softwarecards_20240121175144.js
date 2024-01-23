import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import { Card } from 'react-native-paper';

const Softwarecards = ({navigation}) => {

  const router = useRoute()
  const {paramList1, paramList2} = router.params
  const [empty, setEmpty] = useState(true)

  paramList1 != [] ? setEmpty(false) :
  setEmpty(true)

  return (
    <ScrollView>
      {empty ? 
      }
          
          <View style = {{alignItems: 'flex-end'}}>
        <TouchableOpacity
        onPress={() => navigation.navigate('software')}
        style = {styles.touch}
        >
          <Text>Add FlashCards</Text>
        </TouchableOpacity>
       </View>
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
      width: 180,
      height: 60,
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 30
  }
})

export default Softwarecards;