import React, { useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";

const Setting = () => {

    const [notification, setNotification] = useState(false)
    const [allowance, setAllowance] = useState(false)

    const Notificationallow = () => {

        setNotification(!notification)
        setAllowance(!allowance)
        
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
                <TouchableOpacity
                
                >
                    <Text>Allow Location Access</Text>
                </TouchableOpacity>
            </View>
    </View>

}

export default Setting