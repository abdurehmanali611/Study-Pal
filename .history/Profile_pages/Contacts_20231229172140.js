import React from "react";
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Contacts = () => {

    return <View>
        <Text>Contacts</Text>
        <View>
            <Text>Phone calling</Text>
            <View style = {{flexDirection: 'row'}}>
                <TouchableOpacity
                onPress={() => Linking.openURL('tel:+251935000642')}
                style = {styles.phonecall}
                >
                <Image 
                source={require('../assets/phone.png')}
                style = {styles.callimages}
                />
                <Text>Abdurehman Ali</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Linking.openURL('tel:+251715959354')}
                style = {styles.phonecall}
                >
                <Image 
                source={require('../assets/phone.png')}
                style = {styles.callimages}
                />
                <Text>Abdurehman Ali</Text>
                </TouchableOpacity>
            </View>
            <View style = {{flexDirection: 'row'}}>
                <TouchableOpacity
                onPress={() => Linking.openURL('tel:+251940512795')}
                style = {styles.phonecall}
                >
                <Image 
                source={require('../assets/phone.png')}
                style = {styles.callimages}
                />
                <Text>Rohobot Haile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Linking.openURL('tel:+251716512795')}
                style = {styles.phonecall}
                >
                <Image 
                source={require('../assets/phone.png')}
                style = {styles.callimages}
                />
                <Text>Rohobot Haile</Text>
                </TouchableOpacity>
            </View>
             <View style = {{flexDirection: 'row'}}>
                <TouchableOpacity
                onPress={() => Linking.openURL('tel:+251940512795')}
                style = {styles.phonecall}
                >
                <Image 
                source={require('../assets/phone.png')}
                style = {styles.callimages}
                />
                <Text>Eyob worku</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Linking.openURL('tel:+251716512795')}
                style = {styles.phonecall}
                >
                <Image 
                source={require('../assets/phone.png')}
                style = {styles.callimages}
                />
                <Text>Kalab Solomon</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View>
            <Text>Social Medias</Text>
            <View style = {{flexDirection: 'row'}}>
                <TouchableOpacity
                onPress={() => Linking.openURL('tel:+251940512795')}
                style = {styles.phonecall}
                >
                <Image 
                source={require('../assets/telegram.png')}
                style = {styles.telegramimages}
                />
                <Text>Eyob worku</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Linking.openURL('tel:+251716512795')}
                style = {styles.phonecall}
                >
                <Image 
                source={require('../assets/telegram.png')}
                style = {styles.telegramimages}
                />
                <Text>Kalab Solomon</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>

}

const styles = StyleSheet.create ({
    callimages: {
        width: 100,
        height: 50
    },
    phonecall: {
        marginHorizontal: 15,
        marginVertical: 10,
        flexGrow: 1
    },
    telegramimages: {
        width: 100,
        height: 
    }
})

export default Contacts