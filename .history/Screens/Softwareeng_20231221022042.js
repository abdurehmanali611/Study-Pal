import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { FlatList, ScrollView, Text } from "react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native";
import { Card } from "react-native-paper";

const Softwareeng = ({navigation}) => {

    const [newtitleflashcardsof, setNewTitleFlashcardsof] = useState('')
    const [newtextflashcardsof, setNewTextFlashcardsof] = useState('')
    const [titleflashcardssof, setTitleFlashcardssof] = useState([])
    const [textflashcardssof, setTextFlashcardssof] = useState([])
    const [datatit, setDatatit] = useState(null)
    const [datatxt, setDatatxt] = useState(null)
    const [isLoading, setLoading] = useState(true)

    const savetitlecards = () => {
        AsyncStorage.setItem('titles', JSON.stringify(titleflashcardssof))
    }

    const savetextcards = () => {
        AsyncStorage.setItem('texts',JSON.stringify(textflashcardssof))
    }

    const saveflash = () => {
        if (newtitleflashcardsof || newtextflashcardsof){
            const updatedtitles = [...titleflashcardssof, newtitleflashcardsof]
            setTitleFlashcardssof(updatedtitles)
            setNewTitleFlashcardsof('')
            savetitlecards()
            const updatedtexts = [...textflashcardssof, newtextflashcardsof]
            setTextFlashcardssof(updatedtexts)
            setNewTextFlashcardsof('')
            savetextcards()
        }
        if (titleflashcardssof.length != 0 || textflashcardssof != 0){
           setLoading(false)
           setDatatit(titleflashcardssof)
           setDatatxt(textflashcardssof)
        }
            
    }

    const my_titles = [[titleflashcardssof]]
    const my_texts = [[textflashcardssof]]
    const rendercards = ({item}) => (
        my_titles.forEach((element) => {
            my_texts.forEach()
        })
    )
    datatit == null || datatxt == null || isLoading == true ? <View>
      <Text>Is Loading ...</Text>
    </View>: rendercards
        
        
        
    
    

    return <ScrollView style = {{flex: 1}}>
         <View>
        <View>
         <View>
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
        </View>
    <Card>
        <Card.Content>
            <FlatList 
            nestedScrollEnabled = {true}
            data={[titleflashcardssof,textflashcardssof]}
            renderItem={rendercards}
            />
            </Card.Content>
    </Card>
</View>
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
        alignSelf: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
    }
})


export default Softwareeng