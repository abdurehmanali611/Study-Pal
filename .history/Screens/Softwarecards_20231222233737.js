import { useRoute } from '@react-navigation/native';
import React from 'react';
import { SectionList } from 'react-native';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';

const Softwarecards = () => {

  const router = useRoute()
  const {headers, sons} = router.params

  return (
       <View>
         <Text style = {{textAlign: 'center'}}>{JSON.stringify(headers)}</Text>
         <Text style = {{textAlign: 'center'}}>{JSON.stringify(sons)}</Text>
       </View>
    );
}

export default Softwarecards;