import React, { useState } from "react";
import { Alert, PermissionsAndroid, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

const Setting = () => {

    const [notification, setNotification] = useState(false)
    const [allowance, setAllowance] = useState(false)
    const [locationpermission, setLocationPermission] = useState(false)

    const Notificationallow = () => {

        setNotification(!notification)
        setAllowance(!allowance)
        
    }

    const requestlocationaccess = async () => {

        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                title: 'Location Permission',
                message: 'App needs access to your location',
                buttonNeutral: 'Ask Me Later',
                buttonPositive: 'OK',
                buttonNegative: 'Cancel'
            }
        )

        if (granted == PermissionsAndroid.RESULTS.GRANTED) {
            setLocationPermission(true)
        }else {
            setLocationPermission(false)
        }
    }

    return <View style = {{backgroundColor: randomRGB(), flex: 1}}>
        <View style = {styles.notify}>
            <Text style = {styles.notifytxt}>Desktop Notification</Text>
            <View style = {styles.switch}>
                <Switch 
                 style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
                 value = {notification}
                 onValueChange={Notificationallow}
                 trackColor={{false: '#232323',  true: '#545454'}}
                />
            </View>
        </View>
        {allowance && (
           Alert.alert('Turned On', 'u have turned on desktop notification')
        )}
            <View>
                <Text>Location access</Text>
                {!locationpermission && (
                    <View>
                    <TouchableOpacity
                    onPress={requestlocationaccess}
                    >
                        <Text>Allow Location Access</Text>
                    </TouchableOpacity>
                    </View>
                )(

                )}
                {locationpermission && (
                    <View>
                    <Text>you have given a permission for location</Text>
                    </View>
                )} 
            </View>
    </View>

}

const randomRGB = () => {

    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green},${blue})`
}
const styles = StyleSheet.create ({

    switch: {
        width: 80,
        backgroundColor: randomRGB(),
        alignItems: 'center',
        marginHorizontal: 20,
        height: 50,
        justifyContent: 'center',
        borderRadius: 20
    },
    notify: {
        flexDirection: 'row',
        marginVertical: 15,
        backgroundColor: randomRGB(),
        width: 370,
        marginHorizontal: 10,
        alignItems: 'center',
        paddingHorizontal: 5,
        borderRadius: 30,
        height: 70
    },
    notifytxt: {
        fontSize: 19,
        textAlignVertical: 'center',
        fontWeight: 'bold'
    }
})

export default Setting