import { View, Text, Image, StyleSheet, ScrollView, Pressable, TextInput, FlatList, Alert} from 'react-native'
import React, { useState } from 'react'

const Home = () =>{

  return <ScrollView>
    <View>
    <View style = {styles.profile_search}>
        <View>
        <Pressable>
        <Image 
        source={require('../assets/profile.png')}
        style = {styles.profile}
        />
        </Pressable>
        </View>
        <View style = {styles.search}>
        <TextInput 
        style = {styles.searchtext}
        placeholder='search department'
        />
      </View>
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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus repellat totam repellendus eveniet quod debitis. Recusandae expedita commodi, autem, eveniet iure dignissimos exercitationem fugit praesentium, ipsum quasi nisi nemo placeat.
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
        marginVertical: 20
    },
    searchimage: {
      width: 50,
      height: 50,
      borderRadius: 20,
      marginHorizontal: 35
    },
    profile_search: {
      display: 'flex',
      flexDirection: 'row'
    },
    search: {
       marginHorizontal: 20,
       marginVertical: 20,
       backgroundColor: `rgb(10,10,10)`,
       borderRadius: 20,
       width: 270,
       height: 50,
       display: 'flex',
       flexDirection: 'row'
    },
    searchtext: {
       paddingLeft: 10
    },
    titleparent: {
      marginTop: 20
    },
    title: {
      textAlign: 'center', 
      fontSize: 20
    },
    study: {
      width: 350,
      height: 300,
      marginHorizontal: 20,
      marginVertical: 30
    },
    textpart: {
      textAlign: 'center'
    }
})

export default Home