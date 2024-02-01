import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Group_create = () => {

    return <View style = {styles.overall}>
        <Text style = {styles.header}>You can create a group here or join the non-default groups</Text>
        <Text style = {styles.header}>Default group means groups that all user joined them without asking these are: </Text>
        <View style = {styles.buttonhome}>
            <TouchableOpacity>
                <Text>English</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.buttonhome}>
            <TouchableOpacity>
                <Text>Mathematics</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.buttonhome}>
            <TouchableOpacity>
                <Text>Qoutes and Inspirations</Text>
            </TouchableOpacity>
        </View>
        <Text style = {styles.header}>The Non default groups are the following to join one of them press the JOIN or to create new press CREATE</Text>
        <View style = {styles.buttonhome}>
            <TouchableOpacity>
                <Text>JOIN</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.buttonhome}>
            <TouchableOpacity>
                <Text>CREATE</Text>
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

const styles = StyleSheet.create({
   
    overall: {
       flex: 1,
       backgroundColor: randomRGB(),
       paddingVertical: 10,
       paddingHorizontal: 20
    },
    header: {
      fontSize: 18,
      marginVertical: 10,
      backgroundColor: randomRGB(),
      width: 350,
      height: 70
    },
    buttonhome: {

    }
})

export default Group_create