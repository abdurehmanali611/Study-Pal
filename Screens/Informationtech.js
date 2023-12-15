import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native";
import { Card } from "react-native-paper";

const Informationtech = () => {

    const [title1, setTitle1] = useState('')
    const [title2, setTitle2] = useState('')
    const [title3, setTitle3] = useState('')
    const [title4, setTitle4] = useState('')
    const [text1 , setText1] = useState('')
    const [text2, setText2] = useState('')
    const [text3, setText3] = useState('')
    const [text4, setText4] = useState('')
    

    const saveflash = () => {

        
    }

    return <ScrollView>
        <Text style = {styles.title}>Information and technology</Text>
    <Card style = {styles.card}>
        <Card.Content style = {styles.content}>
            <TextInput 
             placeholder="your title here"
             value={title1}
             onChangeText={(newtitle1) => setTitle1(newtitle1)}
             />
             <TextInput 
             placeholder="your text here"
             multiline
             numberOfLines={10}
             value={text1}
             onChangeText={(newtext1) => setText1(newtext1)}
             />
        </Card.Content>
    </Card>
    <View>
     <TouchableOpacity
     onPress={saveflash}
     style = {styles.flip}
     >
         <Text>Save</Text>
     </TouchableOpacity>
 </View>
    <Card style = {styles.card}>
        <Card.Content style = {styles.content}>
            <TextInput 
             placeholder="your title here"
             value={title2}
             onChangeText={(newtitle2) => setTitle2(newtitle2)}
             />
             <TextInput 
             placeholder="your text here"
             multiline
             numberOfLines={10}
             value={text2}
             onChangeText={(newtext2) => setText2(newtext2)}
             />
        </Card.Content>
    </Card>
     <View>
     <TouchableOpacity
     onPress={saveflash}
     style = {styles.flip}
     >
         <Text>Save</Text>
     </TouchableOpacity>
 </View>
 <Card style = {styles.card}>
        <Card.Content style = {styles.content}>
            <TextInput 
             placeholder="your title here"
             value={title3}
             onChangeText={(newtitle3) => setTitle3(newtitle3)}
             />
             <TextInput 
             placeholder="your text here"
             multiline
             numberOfLines={10}
             value={text3}
             onChangeText={(newtext3) => setText3(newtext3)}
             />
        </Card.Content>
    </Card>
     <View>
     <TouchableOpacity
     onPress={saveflash}
     style = {styles.flip}
     >
         <Text>Save</Text>
     </TouchableOpacity>
 </View>
 <Card style = {styles.card}>
        <Card.Content style = {styles.content}>
            <TextInput 
             placeholder="your title here"
             value={title4}
             onChangeText={(newtitle4) => setTitle4(newtitle4)}
             />
             <TextInput 
             placeholder="your text here"
             multiline
             numberOfLines={10}
             value={text4}
             onChangeText={(newtext4) => setText4(newtext4)}
             />
        </Card.Content>
    </Card>
     <View>
     <TouchableOpacity
     onPress={saveflash}
     style = {styles.flip}
     >
         <Text>Save</Text>
     </TouchableOpacity>
 </View>
 </ScrollView>
}

const styles = StyleSheet.create ({
    card: {
        width: 250,
        height: 450,
        alignItems: 'center',
        alignSelf: 'center'
    },
    flip: {
        alignItems: 'center',
        backgroundColor: `rgb(10,150,100)`,
        width: 150,
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        borderTopEndRadius: 20,
        borderBottomStartRadius: 20,
        marginVertical: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
    }
})

export default Informationtech