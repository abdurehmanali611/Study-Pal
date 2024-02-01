import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Create = () => {

    return <View>
        <Text>Group Name: </Text>
        <TextInput 
        placeholder="Your group name"
        textContentType="name"
        style = {styles.nameinput}
        />
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
       height: 50
    }
})

export default Create