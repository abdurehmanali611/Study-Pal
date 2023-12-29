import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Contacts = () => {

    return <View>
        <Text>Contacts</Text>
        <View>
            <Text>Phone calling</Text>
            <View style = {{flexDirection: 'row'}}>
                <TouchableOpacity
                style = {styles.phonecall}
                >
                <Image 
                source={require('../assets/phone.png')}
                style = {styles.callimages}
                />
                <Text>Abdurehman Ali</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.phonecall}
                >
                <Image 
                source={require('../assets/phone.png')}
                style = {styles.callimages}
                />
                <Text>Eyob Worku</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>

}

const styles = StyleSheet.create ({
    callimages: {
        width: 100,
        height: 50,
        marginVertical: 10
    },
    phonecall: {
        marginHorizontal: 15
    }
})

export default Contacts