import React from "react";
import { Text, TextInput, View } from "react-native";

const Create = () => {

    return <View>
        <Text>Group Name: </Text>
        <TextInput 
        placeholder="Your group name"
        textContentType="name"
        style = {styles}
        />
    </View>
}

export default Create