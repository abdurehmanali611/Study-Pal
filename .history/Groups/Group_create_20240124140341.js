import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Group_create = () => {

    return <View>
        <Text>You can create a group here or join the non-default groups</Text>
        <Text>Non Default group means groups that all user joined them without asking these are: </Text>
        <View>
            <TouchableOpacity>
                <Text>English</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity>
                <Text>Mathematics</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity>
                <Text>Qoutes and Inspirations</Text>
            </TouchableOpacity>
        </View>
        <Text></Text>
        <View>
            <TouchableOpacity>
                <Text>English</Text>
            </TouchableOpacity>
        </View>
    </View>

}

export default Group_create