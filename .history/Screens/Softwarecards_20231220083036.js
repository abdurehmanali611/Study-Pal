import { useRoute } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const Softwarecards = ({method}) => {

    const router = useRoute()

    const displaycards = () => {

        var titles = AsyncStorage.getItem('titles')
        var disptitle = JSON.parse(titles)
        var texts = AsyncStorage.getItem('texts')
        var disptext = JSON.parse(texts)
        {titleflashcardssof && (
            <Card>
            <Card.Content>
                 <Text>{disptitle}</Text>
            </Card.Content>


    return <ScrollView>
       <View>
        <TouchableOpacity>
            <Text>Add Flashcard</Text>
        </TouchableOpacity>
       </View>
    </ScrollView>

}

export default Softwarecards