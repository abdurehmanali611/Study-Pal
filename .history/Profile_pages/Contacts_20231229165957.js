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
                style = {styles.callimages}
                />
            </View>
        </View>
    </View>

}

const styles = stylsh

export default Contacts