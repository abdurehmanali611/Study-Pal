import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Contacts = () => {

    return <View>
        <Text>Contacts</Text>
        <View>
            <Text>Phone calling</Text>
            <View>
                <TouchableOpacity>
                <Image 
                source={require('../assets/phone.png')}
                style = {styles.callimages}
                />
                <Text></Text>
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
    }
})

export default Contacts