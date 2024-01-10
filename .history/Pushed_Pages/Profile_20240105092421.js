import { useRoute } from "@react-navigation/native";
import React from "react";
import { ScrollView, View, Text, Image } from "react-native";

const Profile = () => {

    const router = useRoute()

    return <ScrollView>
        <View>
            <Text>Your personal informations</Text>
            <View>
                <Text>your name: {router.params.param1} {router.params.param2}</Text>
                <Text>your Email: {router.params.param3}</Text>
                <Text>{router.params.param4}</Text>
                <Text>{router.params.param5}</Text>
                <Text>{router.params.param6}</Text>
            </View>
        </View>
    </ScrollView>
}

export default Profile