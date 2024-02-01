import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Sign_Up from "./Front_Pages/Sign_Up";
import Home from "./Front_Pages/Home";
import About_Us from "./Profile_pages/About_Us";
import Contacts from "./Profile_pages/Contacts";
import Setting from "./Profile_pages/Setting";
import Group_create from "./Groups/Group_create";

const stack = createStackNavigator();

const App = () => {

  return  <NavigationContainer>
       <stack.Navigator initialRouteName="group_create">
       <stack.Screen name="Sign" component={Sign_Up} options={{title: 'Study_Pal'}} />
       <stack.Screen name ="Home" component={Home} options={{title: 'Study_Pal'}}/>
       <stack.Screen name="about" component={About_Us} options={{title: 'Study_Pal'}}/>
       <stack.Screen name="contact" component={Contacts} options={{title: 'Study_Pal'}}/>
       <stack.Screen name="setting" component={Setting} options={{title: 'Study_Pal'}}/>
       <stack.Screen name="group_create" component={Group_create} options={{title: 'Study_Pal'}}/>
       <stack.Screen name="create" component={Cre} options={{title: 'Study_Pal'}}/>
       <stack.Screen name="join" component={Group_create} options={{title: 'Study_Pal'}}/>
       </stack.Navigator>
   </NavigationContainer>
}

export default App