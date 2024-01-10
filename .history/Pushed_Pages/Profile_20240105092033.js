import { useRoute } from "@react-navigation/native";
import React from "react";
import { ScrollView, View, Text, Image } from "react-native";

const Profile = () => {

    const router = useRoute()

    return <ScrollView>
        <View>
            <Text>Your personal informations</Text>
            <View>
                <Text>{router.params.param1}</Text>
            </View>
        </View>
    </ScrollView>
}

export default Profile