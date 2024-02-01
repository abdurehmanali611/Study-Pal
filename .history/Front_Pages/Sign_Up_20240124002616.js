import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import {RadioButton} from 'react-native-paper'

const Sign_Up = ({navigation}) => {

   const [sex, setSex] = useState('')
   const [name, setName] = useState('')
   const [university, setUniversity] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [firsttime, setFirstTime] = useState(true)

   useLayoutEffect(() => {
      setFirstTime(false)
   })

   const register = () => {

      if (name == '' || name.startsWith('_') || university == '' || university.startsWith('_') ||
      email == '' || email.startsWith('_') || password == '' || password.length < 6 ||
      sex == '') {
         
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
  
  return {}
  
}

const randomRGB = () => {

   const red = Math.floor(Math.random() * 256)
   const green = Math.floor(Math.random() * 256)
   const blue = Math.floor(Math.random() * 256)

   return `rgb(${red},${green}, ${blue})`
}

const styles = StyleSheet.create ({

    overall : {
       paddingVertical: 10,
       backgroundColor: randomRGB(),
       paddingHorizontal: 20
    },
    title : {
        alignItems: 'center',
        marginVertical: 10
    },
    texttitle : {
        fontSize: 24,
        fontWeight: 'bold'
    },
    objecttext : {
        fontSize: 19,
        marginVertical: 10
    },
    textinput : {
        marginHorizontal: 30,
        borderRadius: 15,
        backgroundColor: randomRGB(),
        width: 300,
        height: 40,
        paddingLeft: 10,
        marginVertical: 7
    },
    press : {
      backgroundColor: randomRGB(),
      height: 50,
      width: 140,
      marginVertical: 10 ,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 20,
      alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent: 'center'
    }
})

export default Sign_Up