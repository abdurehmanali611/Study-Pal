import React from 'react';
import { View, Text } from 'react-native';

const Softwarecards = ({titles},{texts}) => {

  return (
    <View>
         <Text>{titles}</Text>
         <Text>{texts}</Text>
    </View>
  );
}

export default Softwarecards;