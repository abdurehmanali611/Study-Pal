import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Group_create = () => {

    return <View>
        <Text>You can create a group here or join the non-default groups</Text>
        <Text>Default group means groups that all user joined them without asking these are: </Text>
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
        <Text>The Non default groups are the following to join one of them press the JOIN or to create new press CREATE</Text>
        <View>
            <TouchableOpacity>
                <Text>JOIN</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity>
                <Text>CREATE</Text>
            </TouchableOpacity>
        </View>
    </View>

}

const randomRGB = () => {

    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create()

export default Group_create