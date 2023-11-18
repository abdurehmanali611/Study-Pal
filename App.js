import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Sign_Up from "./Front_Pages/Sign_Up";
import Home from "./Front_Pages/Home";

const stack = createStackNavigator();

const App = () => {

  return <NavigationContainer>
       <stack.Navigator initialRouteName="Sign" >
       <stack.Screen name="Sign" component={Sign_Up} />
       <stack.Screen name="Home" component={Home} />
       </stack.Navigator>
  </NavigationContainer>
}

export default App