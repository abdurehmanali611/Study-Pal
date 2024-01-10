import { View, Text, 
  Image, StyleSheet, 
  ScrollView, TouchableOpacity,
  Animated,
  Switch,
  TouchableWithoutFeedback,
  Alert} 
  from 'react-native'
import React, { useState } from 'react'
import * as imagepicker from 'expo-image-picker'

const Home = ({navigation}) =>{

  this.animtedvalue = new Animated.Value(0);

  const [menubtn, setMenubtn] = useState(true)
  const [profilebtn, setProfilebtn] = useState(true)
  const [profiles, setProfiles] = useState(false)
  const [pages, setPages] = useState(false)
  const [isenabled, setEnabled] = useState(false)
  const [avatar, setAvatar] = useState(require('../assets/profile.png'))
  const [isfirsttime, setFirstTime] = useState

startAnimation = () => {
  Animated.timing(this.animtedvalue, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true
  }).start() 
  
}

  const menupressed = () => {

      if (profilebtn == false) {
        setProfilebtn(true)
        setProfiles(false)
      }

      setMenubtn(!menubtn)
      setPages(!pages)
  }


  const profilepressed = () => {

     if (menubtn == false) {
      setMenubtn(true)
      setPages(false)
     }

     setProfiles(!profiles)
     setProfilebtn(!profilebtn) 
  }
  
  const enabledtoggle = () => {

    setEnabled(!isenabled)
  }
  
  const profilephoto = async () => {
     let result = await imagepicker.requestMediaLibraryPermissionsAsync()
     if (result.granted === false) {
      Alert.alert('u have no camera access to use this')
      return
     }
     let pickerresult = await imagepicker.launchImageLibraryAsync({
      mediaTypes: imagepicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
     })
     if (!pickerresult.canceled) {
      setAvatar(pickerresult.assets)
     }
  }

  const To_one_profile = () => {


  }

  return <ScrollView style = {[{animtedvalue}, isenabled && styles.nightmode]}>
  <TouchableWithoutFeedback onPress={() => {
    if (profiles == true || pages == true) {
      setProfiles(false)
      setPages(false)
      setMenubtn(true)
    }
  }}>  
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
          <View style = {[styles.profileelement, isenabled && styles.nightmode]}>
            <View>
            {avatar && (
            <TouchableOpacity onPress={To_one_profile}>
               <Image source={avatar}
               style = {styles.secprofile}
              />
            </TouchableOpacity>
            )}
            <TouchableOpacity onPress={profilephoto}>
              <Image 
              source={require('../assets/camera.jpg')}
              style = {styles.camera}
              />
            </TouchableOpacity>
            </View>
            <View>
              <View>
                <TouchableOpacity
                onPress={() => navigation.navigate('about')}
                style = {styles.profilepage}
                >
                <Text style = {{fontSize: 19}}>About Us</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                onPress={() => navigation.navigate('contact')}
                style = {styles.profilepage}
                >
                <Text style = {{fontSize: 19}}>Contacts</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                onPress={() => navigation.navigate('setting')}
                style = {styles.profilepage}
                >
                <Text style = {{fontSize: 19}}>Setting</Text>
                </TouchableOpacity>
              </View>
              <View style = {{flexDirection: 'row', display: 'flex'}}>
                <TouchableOpacity
                style = {styles.profilepage}
                onPress={enabledtoggle}
                >
                <Text style = {{fontSize: 19}}>Night Mode</Text>
                </TouchableOpacity>
                <Switch 
                  trackColor={{false: '#f5dd4b', true: '#f4f3f4'}}
                  thumbColor={isenabled ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor={'#3e3e3e'}
                  onValueChange={enabledtoggle}
                  value = {isenabled}
                  style = {{marginLeft: 70}}
                />
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
              style = {[styles.menuelement, isenabled && styles.nightmode]}
              >
                <Text style = {styles.textmenu}>Software Engineering</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => navigation.navigate('computer')}
              style = {[styles.menuelement, isenabled && styles.nightmode]}
              >
                <Text style = {styles.textmenu}>Computer Science</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => navigation.navigate('technology')}
              style = {[styles.menuelement, isenabled && styles.nightmode]}
              >
                <Text style = {styles.textmenu}>Infomation Technology</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => navigation.navigate('information')}
              style = {[styles.menuelement, isenabled && styles.nightmode]}
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
    </TouchableWithoutFeedback>
    </ScrollView>
}

const randomRGB = () => {

  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create ({
    profile : {
        width: 50, 
        height: 50,
        marginHorizontal: 20, 
        marginVertical: 20,
        borderRadius: 30
    },
    nightmode: {
        backgroundColor: '#3D3B40'
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
      borderRadius: 30, 
      marginTop: -38, 
      marginLeft: 55, 
      marginBottom: 20
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
      backgroundColor: randomRGB(),
      borderRadius: 20,
      flex: 1
    },
    profileoption: {
      position: 'absolute',
      zIndex: 2
    },
    menuelement: {
      backgroundColor: randomRGB(),
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
      width: 50,
      height: 50,
      marginTop: 20,
      marginHorizontal: 15,
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
      borderRadius: 30
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
    },
    profilepage: {
      backgroundColor: randomRGB(),
      marginVertical: 10,
      flex: 1,
      marginHorizontal: 10,
      borderBottomRightRadius: 20,
      borderTopLeftRadius: 20,
      alignItems: 'center'
    }
})

export default Home