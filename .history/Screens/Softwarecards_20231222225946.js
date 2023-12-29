import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';

const Softwarecards = () => {

  const router = useRoute()

  return (
    <View>
         <Text>{router.params.titles}</Text>
         <Text>{router.params.ty}</Text>
    </View>
  );
}

export default Softwarecards;