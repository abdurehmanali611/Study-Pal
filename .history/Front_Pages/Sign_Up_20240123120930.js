import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import {RadioButton} from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Sign_Up = ({navigation}) => {

   const [sex, setSex] = useState('')
   const [name, setName] = useState('')
   const [fathername, setFatherName] = useState('')
   const [college, setCollege] = useState('')
   const [university, setUniversity] = useState('')
   const [department, setDepartment] = useState('')
   const [firsttime, setFirstTime] = useState(true)

   useLayoutEffect(() => 
   )

   const register = () => {

      if (name == '' || name.startsWith('_') || fathername == '' || 
       fathername.startsWith('_') || college == '' || 
      college.startsWith('_') || university == '' || 
      university.startsWith('_') || department == '' || 
      department.startsWith('_')) {
         
        Alert.alert(
            'Invalid Input',
            'You have entered an invalid input',
            [
                {text: 'OK'}
        ]
        )
      }else {
           navigation.navigate('Home')
      }
   }

  return <ScrollView 
  showsVerticalScrollIndicator = {false}
  style = {styles.overall}>
     <View style = {styles.title}>
        <Text style = {styles.texttitle}>Register Here: </Text>
     </View>
     <View>
        <Text style = {styles.objecttext}>Name: </Text>
        <TextInput 
        value={name}
        onChangeText={(newname) => setName(newname)}
        style = {styles.textinput}
        placeholder='Your Name'
        textContentType='name'
        />
     </View>
     <View>
        <Text style = {styles.objecttext}>Father Name: </Text>
        <TextInput 
        value={fathername}
        onChangeText={(newfather) => setFatherName(newfather)}
        style = {styles.textinput}
        placeholder='Your Father Name'
        textContentType='middleName'
        />
     </View>
     <View>
        <Text style = {styles.objecttext}>University: </Text>
        <TextInput 
        value={university}
        onChangeText={(newuniversity) => setUniversity(newuniversity)}
        style = {styles.textinput}
        placeholder='university'
        textContentType='givenName'
        />
     </View>
     <View>
        <Text style = {styles.objecttext}>college or school: </Text>
        <TextInput 
        value={college}
        onChangeText={(newcollege) => setCollege(newcollege)}
        style = {styles.textinput}
        placeholder='College or School'
        textContentType='givenName'
        />
     </View>
     <View>
        <Text style = {styles.objecttext}>Department: </Text>
        <TextInput 
        value={department}
        onChangeText={(newdepartment) => setDepartment(newdepartment)}
        style = {styles.textinput}
        placeholder='Department'
        textContentType='givenName'
        />
     </View>
     <View>
      <RadioButton.Group
      value={sex}
      onValueChange={(yoursex) => setSex(yoursex)}
      >
         <RadioButton.Item 
         style = {styles.radiogroup}
         label='male'
         value='male'
         color='green'
         />
         <RadioButton.Item 
         style = {styles.radiogroup}
         label='female'
         value='female'
         color='red'
         />
      </RadioButton.Group>
     </View>
     <View>
      <TouchableOpacity 
      style = {styles.press}
      onPress={register}
      >
         <Text>
            Register
         </Text>
      </TouchableOpacity>
     </View>
    </ScrollView>
  
}

const styles = StyleSheet.create ({

    overall : {
       marginVertical: 30,
       marginHorizontal: 20
    },
    title : {
        alignItems: 'center',
        marginVertical: 15
    },
    texttitle : {
        fontSize: 24,
        textDecorationLine: 'underline'
    },
    objecttext : {
        fontSize: 19,
        marginVertical: 10
    },
    textinput : {
        marginHorizontal: 40,
        borderRadius: 15,
        backgroundColor: '#1640D6',
        width: 300,
        height: 40,
        paddingLeft: 10
    },
    radiogroup : {
      marginHorizontal: 90,
      marginVertical: 10
    },
    press : {
      marginHorizontal: 220,
      borderRadius: 20,
      backgroundColor: `rgb(100,190,100)`,
      height: 50,
      width: 120,
      paddingLeft: 20,
      paddingTop: 8 
    }
})

export default Sign_Up