import { useRoute } from '@react-navigation/native';
import React from 'react';
import { SectionList } from 'react-native';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';

const Softwarecards = () => {

  const router = useRoute()
  const {paramList1, paramList2} = router.params

  alert(paramList1,par)

  return (
       <View>
         <Text style = {{textAlign: 'center'}}>{JSON.stringify(paramList1)}</Text>
         <Text style = {{textAlign: 'center'}}>{JSON.stringify(paramList2)}</Text>
       </View>
    );
}

export default Softwarecards;