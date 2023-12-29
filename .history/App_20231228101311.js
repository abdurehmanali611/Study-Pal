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
import { useEffect, useState } from "react";

const stack = createStackNavigator();

const App = () => {

  const [isfirsttime, setIsFirstTime] = useState(false)

  useEffect(() => {
      IsItFirst()
  }, [])

  const IsItFirst = async() => {

    const value = await AsyncStorage

  }

  return <NavigationContainer>
       <stack.Navigator initialRouteName="software">
       <stack.Screen name="Sign" component={Sign_Up}/>
       <stack.Screen name="Home" component={Home} />
       <stack.Screen name="Profile" component={Profile_create} />
       <stack.Screen name="software" component={Softwareeng} />
       <stack.Screen name="softwarecard" component={Softwarecards} />
       <stack.Screen name="computer" component={Computersci} />
       <stack.Screen name="computercard" component={Computercards}/>
       <stack.Screen name="information" component={Informationsci} />
       <stack.Screen name="informationcard" component={Sciencecards}/>
       <stack.Screen name="technology" component={Informationtech} />
       <stack.Screen name="technologycard" component={Technologycards}/>
       </stack.Navigator>
  </NavigationContainer>
}

export default App