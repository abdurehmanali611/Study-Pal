import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Sign_Up from "./Front_Pages/Sign_Up";
import Home from "./Front_Pages/Home";
import Profile_create from "./Pushed_Pages/Profile_create";
import Softwareeng from "./Screens/Softwareeng";
import Computersci from "./Screens/Computersci";
import Informationsci from "./Screens/Informationsci";
import Informationtech from "./Screens/Informationtech";
import Softwarecards from "./Screens/Softwarecards";
import Computercards from "./Screens/Computercards";
import Sciencecards from "./Screens/Sciencecards";
import Technologycards from "./Screens/Technologycards";
import About_Us from "./Profile_pages/About_Us";
import Contacts from "./Profile_pages/Contacts";
import Setting from "./Profile_pages/Setting";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const stack = createStackNavigator();

const App = () => {

  useEffect(() => {
       
  }, 
  [])

  const [isfirsttime, setIsFirstTime] = useState(true)
  const Logging = () => {

    const value = AsyncStorage.getItem('isfirsttime')
  if (value == null) {
    setIsFirstTime(false)
    AsyncStorage.setItem('isfirsttime', 'false')
  }
  }

  return  <NavigationContainer>
       <stack.Navigator >
       <stack.Screen name="Sign" component={Sign_Up} options={{title: 'Study_Pal'}}/>
       <stack.Screen name = "Home" component={Home} options={{title: 'Study_Pal'}}/>
       <stack.Screen name= "Profile" component={Profile_create} options={{title: 'Study_Pal'}}/>
       <stack.Screen name="software" component={Softwareeng} options={{title: 'Study_Pal'}}/>
       <stack.Screen name="softwarecard" component={Softwarecards} options={{title: 'Study_Pal'}}/>
       <stack.Screen name="computer" component={Computersci} options={{title: 'Study_Pal'}}/>
       <stack.Screen name="computercard" component={Computercards} options={{title: 'Study_Pal'}}/>
       <stack.Screen name="information" component={Informationsci} options={{title: 'Study_Pal'}}/>
       <stack.Screen name="informationcard" component={Sciencecards} options={{title: 'Study_Pal'}}/>
       <stack.Screen name="technology" component={Informationtech} options={{title: 'Study_Pal'}}/>
       <stack.Screen name="technologycard" component={Technologycards} options={{title: 'Study_Pal'}}/>
       <stack.Screen name="about" component={About_Us} options={{title: 'Study_Pal'}}/>
       <stack.Screen name="contact" component={Contacts} options={{title: 'Study_Pal'}}/>
       <stack.Screen name="setting" component={Setting} options={{title: 'Study_Pal'}}/>
       </stack.Navigator>
   </NavigationContainer>
}

export default App