import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

const About_Us = () => {

    return <ScrollView style={styles.container}>
    <Text style={styles.header}>About Us</Text>
    <Text style={styles.subHeader}>Welcome to our project!</Text>

    <View style={styles.memberContainer}>
      <Text style={styles.memberHeader}>Abdurehman</Text>
      <Text style={styles.memberDescription}>
        Abdurehman brings a wealth of expertise in [mention relevant skills or experience].
        With a keen eye for detail, he ensures our project meets the highest standards.
      </Text>
    </View>

    <View style={styles.memberContainer}>
      <Text style={styles.memberHeader}>Rohobot</Text>
      <Text style={styles.memberDescription}>
        Rohobot is a creative genius, specializing in [mention relevant skills or expertise].
        His innovative ideas and problem-solving skills drive our project's success.
      </Text>
    </View>

    <View style={styles.memberContainer}>
      <Text style={styles.memberHeader}>Eyob</Text>
      <Text style={styles.memberDescription}>
        Eyob is a versatile team member, proficient in [mention relevant skills].
        His dedication and adaptability make him an invaluable asset to our team.
      </Text>
    </View>

    <View style={styles.memberContainer}>
      <Text style={styles.memberHeader}>Kalab</Text>
      <Text style={styles.memberDescription}>
        Kalab is our technical guru, excelling in [mention relevant technical skills].
        His knowledge and commitment keep our project running smoothly.
      </Text>
    </View>

    <Text style={styles.summary}>
      Together, we collaborate, brainstorm, and strive for excellence, aiming to create impactful
      solutions that make a difference.
    </Text>
  </ScrollView>

}

const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingHorizontal: 20,
  paddingTop: 20
},
header: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 10,
},
subHeader: {
  fontSize: 18,
  marginBottom: 20,
},
memberContainer: {
  marginBottom: 20,
},
memberHeader: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 8,
},
memberDescription: {
  fontSize: 16,
  lineHeight: 24,
},
summary: {
  fontSize: 16,
  marginTop: 20,
  marginBottom: 20
}
})

export default About_Us