import { useRoute } from '@react-navigation/native';
import React from 'react';
import { SectionList } from 'react-native';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';

const Softwarecards = () => {

  const router = useRoute()
  const {paramList1, paramList2} = router.params

  return (
        <View>
         <SectionList 
         data={paramList1}
         renderItem={({item}) => {
          <Card>
            <Card.Content>
                <Text>{JSON.stringify(item)}</Text>
            </Card.Content>
          </Card>
         }}
         keyExtractor={(item, index) => index.toString}
         />
          <SectionList 
         data={paramList2}
         renderItem={({item}) => {
          <Card>
            <Card.Content>
                <Text>{JSON.stringify(item}</Text>
            </Card.Content>
          </Card>
         }}
         keyExtractor={(item, index) => index.toString}
         />
        </View>
    );
}

export default Softwarecards;