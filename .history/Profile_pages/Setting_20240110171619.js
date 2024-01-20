import React, { useState } from "react";
import { Switch, Text, View } from "react-native";

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
                />
            </View>
            {allowance && (
                    <Text>You have allowed a desktop notification</Text>
                )}
        </View>
    </View>

}

export default Setting