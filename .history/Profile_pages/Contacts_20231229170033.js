import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Contacts = () => {

    return <View>
        <Text>Contacts</Text>
        <View>
            <Text>Phone calling</Text>
            <View>
                <Image 
                source={require('../assets/phone.png')}
                style = {styles.callimages}
                />
            </View>
        </View>
    </View>

}

const styles = StyleSheet.create ({
    callimages: {
        width: 100,
        height: 
    }
})

export default Contacts