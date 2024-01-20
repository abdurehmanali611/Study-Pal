import React, { useState } from "react";
import { PermissionsAndroid, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

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
        <View style = {{flexDirection: 'row'}}>
            <Text>Desktop Notification</Text>
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
                    <Text>You have allowed a desktop notification</Text>
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
                )}
                {locationpermission && (
                    <Text>you have given a permission for location</Text>

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
        width: 100,
        backgroundColor: randomRGB(),
        alignItems: 'center',
        marginHorizontal: 80,
        height
    }
})

export default Setting