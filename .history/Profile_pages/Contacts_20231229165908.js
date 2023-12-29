import React from "react";
import { Image, Text, View } from "react-native";

const Contacts = () => {

    return <View>
        <Text>Contacts</Text>
        <View>
            <Text>Phone calling</Text>
            <View>
                <Image 
                source={require('../assets/phone.png')}
                />
            </View>
        </View>
    </View>

}

export default Contacts