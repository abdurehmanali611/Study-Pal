import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Sign_Up from "./Front_Pages/Sign_Up";
import Home from "./Front_Pages/Home";
import Profile_create from "./Pushed_Pages/Profile_create";

const stack = createStackNavigator();

const App = () => {

  return <NavigationContainer>
       <stack.Navigator initialRouteName="Profile" >
       <stack.Screen name="Sign" component={Sign_Up}/>
       <stack.Screen name="Home" component={Home} />
       <stack.Screen name="Profile" component={Profile_create} />
       </stack.Navigator>
  </NavigationContainer>
}

export default App