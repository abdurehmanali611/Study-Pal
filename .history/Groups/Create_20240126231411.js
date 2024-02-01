import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Create = () => {

    const [groupemails, setGroupEmails] = useState([''])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const submitted = () => {

        if (name == '' || email == '' || name.startsWith('_') || 
        name.charAt(0) == Number || email.startsWith('_') || email.charAt) {
            Alert.alert('Input Failed', 'Please provide the correct input for the text inputs',
            [{text: "OK"}])
        }
    }

    return <View style = {styles.overall}>
        <View style = {{marginVertical: 15}}>
        <Text style = {{textAlignVertical: 'center'}}>Group Name: </Text>
        <TextInput 
        value={name}
        onChangeText={(newname) => setName(newname)}
        placeholder="Your group name"
        textContentType="name"
        style = {styles.nameinput}
        />
        </View>
        <View style = {{marginVertical: 10}}>
        <Text style = {{textAlignVertical: 'center'}}>Email: </Text>
        <TextInput 
        value={email}
        onChangeText={(newemail) => setEmail(newemail)}
        placeholder="Your Email"
        textContentType="emailAddress"
        style = {styles.emailinput}
        />
        </View>
        <View style = {{alignItems: 'center', marginVertical: 10}}>
            <TouchableOpacity
            onPress={submitted}
            style = {styles.press}
            >
                <Text>Submit</Text>
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
    nameinput: {
       backgroundColor: randomRGB(),
       width: 250,
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
    },
    press: {
        backgroundColor: randomRGB(),
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20
    }
})

export default Create