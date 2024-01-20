import React, { useState } from "react";
import { Switch, Text, View } from "react-native";

const Setting = () => {

    const [notification, setNotification] = useState(false)
    const [allowance, setAllowance] = useState(null)

    const Notificationallow = () => {

        setNotification(!notification)
        notification ? 
        allowance =  'You allowed desktop notification': 

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