import { useRoute } from '@react-navigation/native';
import React from 'react';
import { SectionList } from 'react-native';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';

const Softwarecards = () => {

  const router = useRoute()
  const {}

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
        <SectionList 
        data={[headers, sons]}
        renderItem={displaythings}
        keyExtractor={(item, index) => index.toString}
        />
       </View>
    );
}

export default Softwarecards;