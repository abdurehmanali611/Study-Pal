import React from 'react';
import { View, Text } from 'react-native';
import Softwareeng from './Softwareeng';
import { Card } from 'react-native-paper';

const Softwarecards = ({navigation}, {title, text}) => {
  return (
    <Card>
        <Card.Content></Card.Content>
      <Text>{title}</Text>
     </Card>
  );
}

export default Softwarecards;