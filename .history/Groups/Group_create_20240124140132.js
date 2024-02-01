import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Group_create = () => {

    return <View>
        <Text>You can create a group here or join the non-default groups</Text>
        <Text>Non Default group means groups that all user joined them without asking these are: </Text>
        <View>
            <TouchableOpacity></TouchableOpacity>
        </View>
    </View>

}

export default Group_create