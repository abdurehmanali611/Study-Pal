import { useRoute } from "@react-navigation/native";
import React from "react";
import { ScrollView, View } from "react-native";

const Profile = () => {

    const router = useRoute()

    return <ScrollView>
        <View>
            <Text>Your personal informations</Text>
            <View>
                <Image 
                 Source
                />
            </View>
        </View>
    </ScrollView>
}

export default Profile