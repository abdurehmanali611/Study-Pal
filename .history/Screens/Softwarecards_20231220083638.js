import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import RNFs from 'react-native-fs'

const Softwarecards = () => {

    const [filecontent, setFileContent] = useState('')

    useEffect(() => {
        const filepath = RNFs.DocumentDirectoryPath + '/'
    })

    return <ScrollView>
       <View>
        <TouchableOpacity>
            <Text>Add Flashcard</Text>
        </TouchableOpacity>
       </View>
    </ScrollView>

}

export default Softwarecards