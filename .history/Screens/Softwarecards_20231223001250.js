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
          {paramList1.map((item, index) => {
            const correspondingte
          })}
       <Card>
        <Card.Content>
          
         <Text style = {{textAlign: 'center'}}>{paramList1}</Text>
         <Text style = {{textAlign: 'center'}}>{paramList2}</Text>
         </Card.Content>
       </Card>
       </View>
    );
}

export default Softwarecards;