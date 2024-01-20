import React, { useState } from "react";
import { Switch, Text, View } from "react-native";

const Setting = () => {

    const [notification, setNotification] = useState(false)
    const [allowance, setAllowance]

    const Notificationallow = () => {

        setNotification(!notification)
        notification ? 
        'You allowed desktop notification': 
        'you did not allowed desktop notification'

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