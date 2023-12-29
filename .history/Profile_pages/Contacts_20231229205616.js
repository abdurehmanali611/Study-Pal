import React from "react";
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Contacts = () => {

    return <ScrollView>
        <Text style = {{textAlign: 'center', fontSize: 19, marginVertical: 10}}>Contacts</Text>
        <View>
            <Text style = {{textAlign: 'center', fontSize: 19, marginVertical: 10}}>Phone calling</Text>
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
                onPress={() => Linking.openURL('tel:+251962152323')}
                style = {styles.phonecall}
                >
                <Image 
                source={require('../assets/phone.png')}
                style = {styles.callimages}
                />
                <Text>Eyob worku</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Linking.openURL('tel:+251978471411')}
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
            <Text style = {{textAlign: 'center', fontSize: 19, marginVertical: 10}}>Social Medias</Text>
            <Text>Telegram</Text>
            <View style = {{flexDirection: 'row'}}>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://t.me/+251935000642')}
                style = {styles.telegram}
                >
                <Image 
                source={require('../assets/telegram.png')}
                style = {styles.telegramimages}
                />
                <Text>Abdurehman Ali</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://t.me/+251940512795')}
                style = {styles.telegram}
                >
                <Image 
                source={require('../assets/telegram.png')}
                style = {styles.telegramimages}
                />
                <Text>Rohobot Haile</Text>
                </TouchableOpacity>
            </View>
            <View style = {{flexDirection: 'row'}}>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://t.me/+251962152323')}
                style = {styles.telegram}
                >
                <Image 
                source={require('../assets/telegram.png')}
                style = {styles.telegramimages}
                />
                <Text>Eyob worku</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://t.me/+251978471411')}
                style = {styles.telegram}
                >
                <Image 
                source={require('../assets/telegram.png')}
                style = {styles.telegramimages}
                />
                <Text>Kalab Solomon</Text>
                </TouchableOpacity>
            </View>
            <Text>Emails</Text>
            <View style = {{flexDirection: 'row'}}>
                <TouchableOpacity
                onPress={() => Linking.openURL('mailto:abdurehmanali@g-mail.com')}
                style = {styles.telegram}
                >
                <Image 
                source={require('../assets/email.png')}
                style = {styles.telegramimages}
                />
                <Text>Abdurehman Ali</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://t.me/+251940512795')}
                style = {styles.telegram}
                >
                <Image 
                source={require('../assets/email.png')}
                style = {styles.telegramimages}
                />
                <Text>Rohobot Haile</Text>
                </TouchableOpacity>
            </View>
            <View style = {{flexDirection: 'row'}}>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://t.me/+251962152323')}
                style = {styles.telegram}
                >
                <Image 
                source={require('../assets/email.png')}
                style = {styles.telegramimages}
                />
                <Text>Eyob worku</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://t.me/+251978471411')}
                style = {styles.telegram}
                >
                <Image 
                source={require('../assets/email.png')}
                style = {styles.telegramimages}
                />
                <Text>Kalab Solomon</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>

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
        width: 50,
        height: 50,
        marginHorizontal: 35
    },
    telegram: {
        marginVertical: 15,
        marginHorizontal: 20,
        flexGrow: 1
    }
})

export default Contacts