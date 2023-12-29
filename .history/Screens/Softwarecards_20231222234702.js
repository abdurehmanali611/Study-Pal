import { useRoute } from '@react-navigation/native';
import React from 'react';
import { SectionList } from 'react-native';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';

const Softwarecards = () => {

  const router = useRoute()
  const {paramList1, paramList2} = router.params

  return (
        
         <SectionList 
         data={[paramList1, paramList2]}
         renderItem={({item}) => {
          <Card>
            <Card.Content>

            </Card.Content>
          </Card>
         }}
         />
        </Card.Content>
       </Card>
    );
}

export default Softwarecards;