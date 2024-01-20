import React, { useEffect, useState } from 'react';
import {
  Switch,
  Text,
  Button,
  PermissionsAndroid,
  View,
  StyleSheet,
} from 'react-native';

const Setting = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [locationPermission, setLocationPermission] = useState(false);
  const [randomColor, setRandomColor] = useState(generateRandomColor());

  useEffect(() => {
    // Check for location permission when component mounts
    checkLocationPermission();
  }, []);

  const handleToggleNotifications = (value) => {
    // Handle logic for enabling or disabling notifications
    setNotificationsEnabled(value);
  };

  const checkLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      setLocationPermission(granted);
    } catch (err) {
      console.warn(err);
    }
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setLocationPermission(true);
      } else {
        setLocationPermission(false);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  }

  const changeRandomColor = () => {
    setRandomColor(generateRandomColor());
  };

  return (
    <View style={[styles.container, { backgroundColor: randomColor }]}>
      {/* Notification Settings */}
      <View style={styles.setting}>
        <Text style={styles.settingTitle}>Push Notifications</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={notificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleToggleNotifications}
          value={notificationsEnabled}
        />
      </View>

      {/* Location Permission Settings */}
      <View style={styles.setting}>
        <Text style={styles.settingTitle}>Location Access</Text>
        <Text>
          {locationPermission
            ? 'Location permission granted'
            : 'Location permission not granted'}
        </Text>
        {!locationPermission && (
          <Button
            title="Request Location Permission"
            onPress={requestLocationPermission}
          />
        )}
      </View>

      {/* Button to change background color */}
      <Button title="Change Color" onPress={changeRandomColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  setting: {
    marginBottom: 20,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Setting
