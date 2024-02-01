import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const Create = () => {

    const [emails, setEmails] = useState([''])

    return <View style = {styles.overall}>
        <View style = {{marginVertical: 15}}>
        <Text style = {{textAlignVertical: 'center'}}>Group Name: </Text>
        <TextInput 
        placeholder="Your group name"
        textContentType="name"
        style = {styles.nameinput}
        />
        </View>
        <View style = {{marginVertical: 10}}>
        <Text style = {{textAlignVertical: 'center'}}>Email: </Text>
        <TextInput 
        placeholder="Your Email"
        textContentType="emailAddress"
        style = {styles.emailinput}
        />
        </View>
        <View>
            <Pressable>
                <Text></Text>
            </Pressable>
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
    nameinput: {
       backgroundColor: randomRGB(),
       width: 230,
       height: 50,
       paddingLeft: 30,
       borderRadius: 30,
       alignSelf: 'center'
    },
    emailinput: {
       backgroundColor: randomRGB(),
       width: 250,
       height: 50,
       paddingLeft: 30,
       borderRadius: 30,
       alignSelf: 'center'
    },
    overall: {
        paddingVertical: 10,
        paddingHorizontal: 13,
        flex: 1,
        backgroundColor: randomRGB(),
        justifyContent: 'center'
    }
})

export default Create