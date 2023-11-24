import { View, Text, Image, StyleSheet, FlatList, Alert, ScrollView, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

const Home = () =>{

  const [menubtn, setMenubtn] = useState(true)
  const [pages, setPages] = useState(false)
  const menupressed = () => {

      setMenubtn(!menubtn)
      setPages(!pages)

  }

  return <ScrollView>
    <View>
    <View style = {styles.header_images}>
        <View>
        <TouchableOpacity>
        <Image 
        source={require('../assets/profile.png')}
        style = {styles.profile}
        />
        </TouchableOpacity>
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
            <View>
              <TouchableOpacity onPress={menupressed}>
               <Image 
                source={require('../assets/close.jpg')}
                style = {styles.menuimage}
               />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Software Engineering</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Computer Science</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Infomation Technology</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Information System</Text>
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
    header_images: {
      display: 'flex',
      flexDirection: 'row'
    },
    menuimage: {
      marginHorizontal: 220,
      marginVertical: 20,
      width: 50,
      height: 50,
      
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
      marginVertical: 30
    },
    textpart: {
      textAlign: 'center'
    }
})

export default Home