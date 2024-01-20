import React, { useState } from "react";
import { PermissionsAndroid, Switch, Text, TouchableOpacity, View } from "react-native";

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

    return <View>
        <View style = {{flexDirection: 'row'}}>
            <Text>Desktop Notification</Text>
            <View>
                <Switch 
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
                <View>
                <TouchableOpacity
                onPress={requestlocationaccess}
                >
                    <Text>Allow Location Access</Text>
                </TouchableOpacity>
                </View>
                {locationpermission && (
                    
                )}
            </View>
    </View>

}

export default Setting