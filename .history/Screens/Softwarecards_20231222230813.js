import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';

const Softwarecards = () => {

  const router = useRoute()
  const headers = [router.params.titles]
  const sons = [router.params.types]

  const displaythings = () => {

    headers.forEach((element) => {
      sons.forEach((item) => {
        <Card>
          <Card.Content>
            <Text>{element}</Text>
            <Text>{item}</Text>
          </Card.Content>
        </Card>
      })
    })
  }

  return (
       <View>
        <Fl
       </View>
    );
}

export default Softwarecards;