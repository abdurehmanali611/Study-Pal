import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';

const Softwarecards = () => {

  const router = useRoute()

  const displaythings = () => {

    router.params.title
  }

  return (

    );
}

export default Softwarecards;