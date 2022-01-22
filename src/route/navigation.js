import React from "react";
import Login from "../screen/Login/login";

// IMPORT FILE ROUTE
import DashNasabah from "../screen/Dashboard/Dashboard Nasabah/dashNasabah";
import DashP1 from "../screen/Dashboard/Dashboard_Pengurus1/dashP1";
import DashP2 from "../screen/Dashboard/Dashboard_Pengurus2/dashP2";
import Register from "../screen/Register/register";

// IMPORT LIBRARI
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

class Route extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                    <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
                    <Stack.Screen name="DashNasabah" component={DashNasabah} options={{headerShown: false}}/>
                    <Stack.Screen name="DashP1" component={DashP1} options={{headerShown: false}} />
                    <Stack.Screen name="DashP2" component={DashP2} options={{headerShown: false}} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Route;