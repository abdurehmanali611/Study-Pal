import React, { useState } from "react";
import { Switch, Text, View } from "react-native";

const Setting = () => {

    const [notification, setNotification] = useState(false)

    return <View>
        <View style = {{flexDirection: 'row'}}>
            <Text>Desktop Notification</Text>
            <View>
                <Switch 
                 value
                />
            </View>
        </View>
    </View>

}

export default Setting