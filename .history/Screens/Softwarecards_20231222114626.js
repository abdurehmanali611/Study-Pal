import React from 'react';
import { View, Text } from 'react-native';
import Softwareeng from './Softwareeng';
import { Card } from 'react-native-paper';

const Softwarecards = ({navigation}, {renderitems}) => {

  return (
    <Card>
      <Card.Content>
          <Softwareeng  title = {title}/>
          <Softwareeng  text = {text}/>
      </Card.Content>
     </Card>
  );
}

export default Softwarecards;