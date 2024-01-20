import React, { useState } from "react";
import { Switch, Text, View } from "react-native";

const Setting = () => {

    const [notification, setNotification] = useState(false)
    const [allowance, setAllowance] = useState()

    const Notificationallow = () => {

        setNotification(!notification)
        notification ? 
        setAllowancellowance =  'You allowed desktop notification': 
        allowance = null
    }

    return <View>
        <View style = {{flexDirection: 'row'}}>
            <Text>Desktop Notification</Text>
            <View>
                <Switch 
                 value = {notification}
                 onValueChange={Notificationallow}
                />
                <Text>{notification}</Text>
            </View>
        </View>
    </View>

}

export default Setting