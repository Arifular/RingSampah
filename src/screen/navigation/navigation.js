import React from "react";

//import file screen
import Splashscreen from "../splashcreen/splashscreen";
import Login from "../Login/login";
import Register from "../Register/register";
import DashP1 from "../Dashboard/Dashboard_Pengurus1/dashP1";
import DashP2 from "../Dashboard/Dashboard_Pengurus2/dashP2";
import Menu from "../Menu/Menu";
import Profile from "../Profile/Profile";
import Nsb from "../Dashboard/dashboardNasabah/nasabahDash";

//import Library
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splashscreen" component={Splashscreen} options={{headerShown: false}} />
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
                <Stack.Screen name="Bottom" component={Bottom} options={{headerShown: false}} />
                <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
                <Stack.Screen name="DashP1" component={DashP1} options={{headerShown: false}} />
                <Stack.Screen name="DashP2" component={DashP2} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;

class Bottom extends React.Component{
    render() {
        return(
            <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#4AB767'}}>
                <Tab.Screen name="Home" component={Nsb} options={{
                    headerShown: false, tabBarIcon: ({color, size}) => {
                        <Ionicons color={color} size={size} />
                    }
                }} />
                <Tab.Screen name="Menu" component={Menu} options={{
                    headerShown: false, tabBarIcon: ({color, size}) => {
                        <Ionicons name="grid" color={color} size={size} />
                    }
                }} />
            </Tab.Navigator>
        )
    }
}