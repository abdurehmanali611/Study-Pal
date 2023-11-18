import { View, Text, Image, StyleSheet, ScrollView, Pressable} from 'react-native'
import React from 'react'

const Home = () =>{
  return <ScrollView>
    <View>
      <View>
        <Pressable>
        <Image 
        source={require('../assets/profile.png')}
        style = {styles.profile}
        />
        </Pressable>
    </View>
    <View style = {styles.titleparent}>
        <Text style = {styles.title}>Study Pal</Text>
    </View>
    <View>
      <Image
      source= {require('../assets/study-group.png')}
      style = {styles.study}
      />
    </View>
    <View>
      <Image
      source= {require('../assets/study-computers.png')}
      style = {styles.study}
      />
    </View>
    <View style = {styles.textparent}>
      <Text style = {styles.textpart}>
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Totam officiis deserunt, 
        ducimus nobis nam rerum corporis! Veritatis, 
        voluptatem! Commodi dolorum consequuntur 
        aliquid cumque. Deleniti aliquam reprehenderit 
        possimus, totam natus odio?
      </Text>
    </View>
    </View>
    </ScrollView>
}

const styles = StyleSheet.create ({
    profile : {
        width: 50, 
        height: 50,
        marginHorizontal: 20, 
        marginVertical: 10
    },
    titleparent: {
      marginTop: 10
    },
    title: {
      textAlign: 'center', 
      fontSize: 20
    },
    study: {
      width: 350,
      height: 300,
      marginHorizontal: 20,
      marginVertical: 40
    },
    textpart: {
      textAlign: 'center'
    },
    textparent: {
      marginBottom: 20
    }
})

export default Home