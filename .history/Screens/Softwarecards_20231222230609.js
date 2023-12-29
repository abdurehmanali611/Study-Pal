import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';

const Softwarecards = () => {

  const router = useRoute()
  const headers = [router.params.titles]
  const sons = [router.params.types]

  const displaythings = () => {

    headers.forEach(())
  }

  return (

    );
}

export default Softwarecards;