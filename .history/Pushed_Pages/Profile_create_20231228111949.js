import React, { useContext, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ProfileProvider } from "./ProfileProvider";

const Profile_create = ({navigation}) => {

    const {updateProfileData} = useContext(ProfileProvider)

    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [university, setUniversity] = useState('')
    const [bio, setBio] = useState('')

    const submitted = async () => {
      
      if (name == '' || lastname == '' || email == '' || 
      password == '' || university == '' || bio == '') {
        Alert.alert (
            'Input Required',
            'Please provide available input for all',
            [
                {
                    text: 'OK'
                }
            ]
        )
      }else if(name.startsWith('_' ) || lastname.startsWith('_') ||
      email.startsWith('_' ) || university.startsWith('_' ) || !isNaN(name.charAt(0)) || 
      !isNaN(lastname.charAt(0) || !isNaN(university.charAt(0)))){
        Alert.alert (
            'Invalid Starting',
            'Please start with a letter in names and email',
            [
                {text: 'OK'}
            ]
        )
      }else if(email.includes('@') == false){
        Alert.alert (
            'Invalid Email',
            'Please write your email correctly',
            [
                {text: 'OK'}
            ]
        )
      }else{
        navigation.navigate('Home')
      }

      const profile_element = {

        Name: {name},
        Lastname: {lastname},
        Email: {email},
        Password: {password},
        University: {university},
        Bio: {bio}
      }
    }
  
    return <ScrollView 
    showsVerticalScrollIndicator = {false}
    style = {styles.overall}>
        <View style = {styles.name}>
            <Text style = {styles.header}>Please create your Profile here</Text>
        <Text style = {styles.texts}>Profile Name</Text>
        <TextInput 
        placeholder="Profile name"
        style = {styles.inputs}
        textContentType="name"
        value={name}
        onChangeText={(newname) => setName(newname)}
        />
        
        </View>
        <View style = {styles.name}>
        <Text style = {styles.texts}>Last Name</Text>
        <TextInput 
        placeholder="Last name"
        style = {styles.inputs}
        textContentType="name"
        value={lastname}
        onChangeText={(newlast) => setLastName(newlast)}
        />
        </View>
        <View style = {styles.name}>
        <Text style = {styles.texts}>Email</Text>
        <TextInput 
        placeholder="Email"
        style = {styles.inputs}
        textContentType="emailAddress"
        value={email}
        onChangeText={(newemail) => setEmail(newemail)}
        />
        </View>
        <View style = {styles.name}>
        <Text style = {styles.texts}>Password</Text>
        <TextInput 
        placeholder="password"
        style = {styles.inputs}
        textContentType="password"
        value={password}
        onChangeText={(newpassword) => setPassword(newpassword)}
        />
        </View>
        <View style = {styles.name}>
        <Text style = {styles.texts}>University</Text>
        <TextInput 
        placeholder="university"
        style = {styles.inputs}
        textContentType="name"
        value={university}
        onChangeText={(newuniversity) => setUniversity(newuniversity)}
        />
        </View>
        <View style = {styles.name}>
        <Text style = {styles.texts}>BioGraphy</Text>
        <TextInput 
        placeholder="About You"
        multiline = {true}
        numberOfLines={7}
        style = {styles.inputs}
        value={bio}
        onChangeText={(newbio) => setBio(newbio)}
        />
        </View>
        <View style = {styles.button}>
            <TouchableOpacity onPress={submitted }>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>

}

const styles = StyleSheet.create ({
    overall: {
        marginVertical: 10,
        marginHorizontal: 20
    },
    texts : {
       textAlign: 'center',
       fontSize: 18
    },
    inputs : {
        backgroundColor: '#7071E8',
        width: 300,
        height: 50,
        marginHorizontal: 10,
        borderRadius: 20,
        textAlign: 'center',
        marginVertical: 10
    },
    header: {
       textAlign: 'center',
       marginVertical: 10,
       fontSize: 20,
       backgroundColor: '#7ED7C1',
       fontStyle: 'italic',
       borderRadius: 20,
       width: 340
    },
    button : {
        backgroundColor: '#508D69',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 50,
        marginHorizontal: 185,
        marginVertical: 10
    }
})

export default Profile_create