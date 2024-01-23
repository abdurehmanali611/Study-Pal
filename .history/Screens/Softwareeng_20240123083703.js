import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Text } from "react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native";
import { Card } from "react-native-paper";

const Softwareeng = () => {

    const [newtitleflashcardsof, setNewTitleFlashcardsof] = useState('')
    const [newtextflashcardsof, setNewTextFlashcardsof] = useState('')
    const [titleflashcardssof, setTitleFlashcardssof] = useState([''])
    const [textflashcardssof, setTextFlashcardssof] = useState([''])
    const navigation = useNavigation()

    const savetitlecards = () => {
        AsyncStorage.setItem('titles', JSON.stringify(titleflashcardssof))
    }

    const savetextcards = () => {
        AsyncStorage.setItem('texts',JSON.stringify(textflashcardssof))
    }

    const saveflash = () => {
        if (newtitleflashcardsof != '' || newtextflashcardsof != ''){
            const updatedtitles = [[...titleflashcardssof, key = (item) => {item}], newtitleflashcardsof]
            setTitleFlashcardssof(updatedtitles)
            setNewTitleFlashcardsof('')
            savetitlecards()
            const updatedtexts = [...textflashcardssof, newtextflashcardsof]
            setTextFlashcardssof(updatedtexts)
            setNewTextFlashcardsof('')
            savetextcards()
            navigation.navigate('softwarecard', 
        {
            paramList1: updatedtitles, 
            paramList2: updatedtexts,
        }
        )
        }else {
            Alert.alert('Input required', 'All Inputs are required')
        }

    }

    return <View style = {{marginVertical: 10}}>
            <Text style = {styles.title}>Software engineering</Text>
          <Card style = {styles.card}>
            <Card.Content style = {styles.content}>
                <TextInput 
                 placeholder="your title here"
                 value={newtitleflashcardsof}
                 onChangeText={(newtitle4) => setNewTitleFlashcardsof(newtitle4)}
                 />
            </Card.Content>
            </Card>
            <Card style = {styles.card2}>
            <Card.Content>
                 <TextInput 
                 placeholder="your text here"
                 multiline
                 numberOfLines={10}
                 value={newtextflashcardsof}
                 onChangeText={(newtext4) => setNewTextFlashcardsof(newtext4)}
                 />
           </Card.Content> 
        </Card>
        <View style = {{alignItems: 'flex-end'}}>
         <TouchableOpacity
         onPress={saveflash}
         style = {styles.flip}
         >
             <Text>save</Text>
         </TouchableOpacity>
     </View>
     </View>
}

const randomRGB = () => {

    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create ({
    card: {
        width: 350,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: randomRGB(),
        borderRadius: 30,
        marginVertical: 10
    },
    flip: {
        alignItems: 'center',
        backgroundColor: randomRGB(),
        width: 150,
        height: 40,
        justifyContent: 'center',
        borderTopEndRadius: 20,
        borderBottomStartRadius: 20,
        marginVertical: 20,
        marginHorizontal: 15
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
    },
    card2: {
        width: 350,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: randomRGB(),
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    }
})


export default Softwareeng