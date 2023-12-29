import { View, Text, 
  Image, StyleSheet, 
  ScrollView, TouchableOpacity,
  Animated} 
  from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = ({navigation}) =>{

  this.animtedvalue = new Animated.Value(0);

  const [menubtn, setMenubtn] = useState(true)
  const [profilebtn, setProfilebtn] = useState(true)
  const [profiles, setProfiles] = useState(false)
  const [pages, setPages] = useState(false)

startAnimation = () => {
  Animated.timing(this.animtedvalue, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true
  }).start() 
  
}
  const menupressed = () => {

      setMenubtn(!menubtn)
      setPages(!pages)

  }


  const profilepressed = () => {

     setProfiles(!profiles)
     setProfilebtn(!profilebtn) 
  }
  
  return <ScrollView style = {{animtedvalue}}>
    
    <View>
    <View style = {styles.header_images}>
        <View style = {styles.profileoption}> 
        {profiles ? (
          <View>
            <TouchableOpacity onPress={profilepressed}>
            <Image 
            source={require('../assets/back.jpg')}
            style = {styles.back}
            />
          </TouchableOpacity>
          <View style = {styles.profileelement}>
            <View>
            <TouchableOpacity>
               <Image source={require('../assets/profile.png')}
               style = {styles.secprofile}
            />
            </TouchableOpacity>
            </View>
            <View>
              <Text>About Us</Text>
              <Text>Contacts</Text>
              <Text>Setting</Text>
              <View>
                <Text>Night Mode</Text>
              </View>
            </View>
          </View>
          </View>
        ):
        <TouchableOpacity onPress={profilepressed}>
          <Image 
          source={require('../assets/profile.png')}
          style = {styles.profile}
          />
          </TouchableOpacity>}
        </View>
        <View>
          {menubtn ? (
            <TouchableOpacity onPress={menupressed}>
              <Image 
              source={require('../assets/menu.jpg')}
              style = {styles.menuimage}
              />
            </TouchableOpacity>
          ):
           pages && (
            <View style = {styles.menuoption}>
              <TouchableOpacity onPress={menupressed}>
               <Image 
                source={require('../assets/close.jpg')}
                style = {styles.menuimage}
               />
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={() => navigation.navigate('software')}
              style = {styles.menuelement}
              >
                <Text style = {styles.textmenu}>Software Engineering</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => navigation.navigate('computer')}
              style = {styles.menuelement}
              >
                <Text style = {styles.textmenu}>Computer Science</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => navigation.navigate('technology')}
              style = {styles.menuelement}
              >
                <Text style = {styles.textmenu}>Infomation Technology</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => navigation.navigate('information')}
              style = {styles.menuelement}
              >
                <Text style = {styles.textmenu}>Information System</Text>
              </TouchableOpacity>
              </View>
           )
           }
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
    <View>
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
    camerahome: {
     marginTop: -19,
     marginBottom: 10,
     marginLeft: 35
    },
    menuoption: {
      position: 'absolute',
      zIndex: 2
    },
    camera : {
     width: 40,
     height: 40,
     borderRadius: 40
    },
    secprofile: {
      width: 70,
      height: 60,
      borderRadius: 30,
      marginVertical: 15,
      marginHorizontal: 10
    },
    profileelement: {
      marginHorizontal: 15,
      backgroundColor: '#994D1C',
      width: 250,
      borderRadius: 20,
      height: 300
    },
    profileoption: {
      position: 'absolute',
      zIndex: 2
    },
    menuelement: {
      backgroundColor: '#7ED7C1',
      height: 70,
      borderRadius: 20,
      width: 280,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 80,
      marginVertical: 5
    },
    textmenu: {
      fontSize: 17,
      fontStyle: 'italic'
    },
    back: {
      width: 60,
      height: 50,
      marginTop: 20,
      marginHorizontal: 10,
      borderRadius: 30,
      marginVertical: 10
    },
    header_images: {
      display: 'flex',
      flexDirection: 'row'
    },
    menuimage: {
      marginHorizontal: 320,
      marginVertical: 20,
      width: 50,
      height: 50,
    },
    titleparent: {
      marginTop: 10
    },
    parameter: {
     display: 'flex',
     flexDirection: 'row',
     marginHorizontal: 20
    },
    title: {
      textAlign: 'center', 
      fontSize: 20,
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