import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Sign_Up from "./Front_Pages/Sign_Up";
import Home from "./Front_Pages/Home";
import Profile_create from "./Pushed_Pages/Profile_create";
import Softwareeng from "./Screens/Softwareeng";
import Computersci from "./Screens/Computersci";
import Informationsci from "./Screens/Informationsci";
import Informationtech from "./Screens/Informationtech";

const stack = createStackNavigator();

const App = () => {

  return <NavigationContainer>
       <stack.Navigator initialRouteName="software">
       <stack.Screen name="Sign" component={Sign_Up}/>
       <stack.Screen name="Home" component={Home} />
       <stack.Screen name="Profile" component={Profile_create} />
       <stack.Screen name="software" component={Softwareeng} />
       <stack.Screen name="computer" component={Computersci} />
       <stack.Screen name="information" component={Informationsci} />
       <stack.Screen name="technology" component={Informationtech} />
       </stack.Navigator>
  </NavigationContainer>
}

export default App