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

const styles = StyleSheet.create ({
  card: {
     marginVertical: 20,
     width: 200
  }
})

export default Softwarecards;