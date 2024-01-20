import React, { useState } from "react";
import { Switch, Text, View } from "react-native";

const Setting = () => {

    const [notification, setNotification] = useState(false)
    const [allowance, setAllowance] = useState(false)

    const Notificationallow = () => {

        setNotification(!notification)
        setAllowance(!al)
        
    }

    return <View>
        <View style = {{flexDirection: 'row'}}>
            <Text>Desktop Notification</Text>
            <View>
                <Switch 
                 value = {notification}
                 onValueChange={Notificationallow}
                />
                <Text>{allowance}</Text>
            </View>
        </View>
    </View>

}

export default Setting