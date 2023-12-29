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
            const correspondingtxt = paramList2[index]
          })}
         <Text style = {{textAlign: 'center'}}>{item}</Text>
         <Text style = {{textAlign: 'center'}}>{correspondingtxt}</Text>
       </View>
    );
}

export default Softwarecards;