import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native";
import { Card } from "react-native-paper";

const Softwareeng = ({navigation}) => {

    const [newtitleflashcardsof, setNewTitleFlashcardsof] = useState('')
    const [newtextflashcardsof, setNewTextFlashcardsof] = useState('')
    const [titleflashcardssof, setTitleFlashcardssof] = useState([])
    const [textflashcardssof, setTextFlashcardssof] = useState([])

    const savetitlecards = () => {
        AsyncStorage.setItem('titles', JSON.stringify(titleflashcardssof))
    }

    const savetextcards = () => {
        AsyncStorage.setItem('texts',JSON.stringify(textflashcardssof))
    }

    const saveflash = () => {
        if (newtitleflashcardsof){
            const updatedtitles = [...titleflashcardssof, newtitleflashcardsof]
            setTitleFlashcardssof(updatedtitles)
            setNewTitleFlashcardsof('')
            savetitlecards()
        }else if(newtextflashcardsof){
            const updatedtexts = [...textflashcardssof, newtextflashcardsof]
            setTextFlashcardssof(updatedtexts)
            setNewTextFlashcardsof('')
            savetextcards()
        }
    }

    const displaycards = () => {

        try {
            const titlecard = AsyncStorage.getItem('titles')
            const text
            if (titlecard != null && ){
                return <Card>
                    <Card.Content>

                    </Card.Content>
                </Card>
            }
        } catch (error) {
            
        }
    }
    

    return <ScrollView>
        <View style = {{display: 'flex', flexDirection: 'row'}}>
     <TouchableOpacity
     onPress={displaycards}
     style = {[styles.flip, {alignSelf: 'flex-start'}]}
     >
         <Text>Flashcards</Text>
     </TouchableOpacity>
     <TouchableOpacity
     onPress={saveflash}
     style = {styles.flip}
     >
         <Text>save</Text>
     </TouchableOpacity>
 </View>
        <Text style = {styles.title}>Software engineering</Text>
      <Card style = {styles.card}>
        <Card.Content style = {styles.content}>
            <TextInput 
             placeholder="your title here"
             value={newtitleflashcardsof}
             onChangeText={(newtitle4) => setNewTitleFlashcardsof(newtitle4)}
             />
             <TextInput 
             placeholder="your text here"
             multiline
             numberOfLines={10}
             value={newtextflashcardsof}
             onChangeText={(newtext4) => setNewTextFlashcardsof(newtext4)}
             />
        </Card.Content>
    </Card>
     
 </ScrollView>
}

const styles = StyleSheet.create ({
    card: {
        width: 350,
        height: 400,
        alignItems: 'center',
        alignSelf: 'center'
    },
    flip: {
        alignItems: 'center',
        backgroundColor: `rgb(10,150,100)`,
        width: 150,
        height: 40,
        justifyContent: 'center',
        borderTopEndRadius: 20,
        borderBottomStartRadius: 20,
        marginVertical: 20,
        marginHorizontal: 25
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
    }
})


export default Softwareeng