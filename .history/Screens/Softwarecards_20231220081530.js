import { useRoute } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const Softwarecards = ({method}) => {

    const router = useRoute()

    return <ScrollView>
       <View>
        <TouchableOpacity>
            <Text>Add Flashcard</Text>
        </TouchableOpacity>
       </View>
       <View>
        {method}
       </View>
    </ScrollView>

}

export default Softwarecards