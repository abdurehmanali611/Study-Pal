import { View, Text, 
  Image, StyleSheet, 
  ScrollView, TouchableOpacity} 
  from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'

const Home = ({navigation}) =>{

  const router = useRoute()

  const [menubtn, setMenubtn] = useState(true)
  const [profilebtn, setProfilebtn] = useState(true)
  const [profiles, setProfiles] = useState(false)
  const [pages, setPages] = useState(false)

  const menupressed = () => {

      setMenubtn(!menubtn)
      setPages(!pages)

  }

  const registerprofile = () => {

     navigation.navigate('Profile')
  }

  const profilepressed = () => {

    setProfiles(!profiles)
    setProfilebtn(!profilebtn)

  }

  return <ScrollView>
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
          <View style = {{display: 'flex', flexDirection: 'row'}}>
          <TouchableOpacity onPress={registerprofile}>
            <Image
            source={require('../assets/profile.png')}
            style = {styles.back}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
            source={require('../assets/camera.jpg')}
            style = {styles.camera}
            />
          </TouchableOpacity>
          </View>
          <View style = {styles.parameter}>
          <Text style = {{textDecorationLine: 'underline', fontSize: 18}}>Profile Name: </Text>
          <Text>{router.params.param1}</Text>
          </View>
          <View style = {styles.parameter}>
          <Text style = {{textDecorationLine: 'underline', fontSize: 18}}>Last Name: </Text>
          <Text>{router.params.param2}</Text>
          </View>
          <View style = {styles.parameter}>
          <Text style = {{textDecorationLine: 'underline', fontSize: 18}}>Email: </Text>
          <Text>{router.params.param3}</Text>
          </View>
          <View style = {styles.parameter}>
          <Text style = {{textDecorationLine: 'underline', fontSize: 18}}>Password: </Text>
          <Text>{router.params.param4}</Text>
          </View>
          <View style = {styles.parameter}>
          <Text style = {{textDecorationLine: 'underline', fontSize: 18}}>University: </Text>
          <Text>{router.params.param5}</Text>
          </View>
          <View>
          <Text style = {{textAlign: 'center',textDecorationLine: 'underline', fontSize: 18}}>Biography: </Text>
          <Text style = {{marginHorizontal: 5}}>{router.params.param6}</Text>
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
              style = {styles.menuelement}
              >
                <Text style = {styles.textmenu}>Software Engineering</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style = {styles.menuelement}
              >
                <Text style = {styles.textmenu}>Computer Science</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style = {styles.menuelement}
              >
                <Text style = {styles.textmenu}>Infomation Technology</Text>
              </TouchableOpacity>
              <TouchableOpacity
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
    menuoption: {
      position: 'absolute',
      zIndex: 2
    },
    camera : {
     width: 50,
     height: 50,
     borderRadius: 40,
     marginTop: 19
    },
    profileelement: {
      marginHorizontal: 15,
      backgroundColor: '#994D1C',
      width: 310,
      borderRadius: 20,
      alignItems: 'center',
      height: 500
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
     flexDirection: 'row'
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