import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import RNFs from 'react-native-fs'
import { Card } from "react-native-paper";

const Softwarecards = () => {

    const [filecontent, setFileContent] = useState('')

    useEffect(() => {
        const filepath = RNFs.DocumentDirectoryPath + '/softwareeng.js'

        RNFs.readFile(filepath, 'utf8').then(content => {
            setFileContent(content)
        }).catch(error => {
            console.error(error)
        })
    }, [])

    return <ScrollView>
       <View>
        <TouchableOpacity>
            <Text>Add Flashcard</Text>
        </TouchableOpacity>
       </View>
       <Card>
           <Card.Content></Card.Content>
       </Card>
    </ScrollView>

}

export default Softwarecards