import React from "react";

// IMPORT FILE ROUTE
import Splashscreen from "../screen/splashcreen/splashscreen";
import Login from "../screen/Login/login";
import DashP1 from "../screen/Dashboard/Dashboard_Pengurus1/dashP1";
import DashP2 from "../screen/Dashboard/Dashboard_Pengurus2/dashP2";
import Register from "../screen/Register/register";
import HomeNsb from "../screen/Dashboard/dashboardNasabah/nasabahDash";

// IMPORT LIBRARI
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

class Route extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Splashscreen" component={Splashscreen} options={{headerShown: false}}/>
                    <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                    <Stack.Screen name="HomeNsb" component={HomeNsb} options={{headerShown: false}}/>
                    <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
                    <Stack.Screen name="DashP1" component={DashP1} options={{headerShown: false}} />
                    <Stack.Screen name="DashP2" component={DashP2} options={{headerShown: false}} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Route;