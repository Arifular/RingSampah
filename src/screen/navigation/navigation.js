import React from "react";

//import file screen
import Splashscreen from "../splashcreen/splashscreen";
import Login from "../Login/login";
import Register from "../Register/register";
import Menu from "../Menu/Menu";
import Profile from "../Profile/Profile";
import Nsb from "../Dashboard/dashboardNasabah/nasabahDash";
import DashboardP2 from "../Dashboard/Dashboard_Pengurus2/code/dashboardP2";
import Sell from "../Dashboard/Dashboard_Pengurus2/code/sell";
import ProfileP2 from "../Dashboard/Dashboard_Pengurus2/code/profileP2";
import MenuP2 from "../Dashboard/Dashboard_Pengurus2/code/menuP2";
import Buy from "../Dashboard/Dashboard_Pengurus1/code/buy";
import ProfileP1 from "../Dashboard/Dashboard_Pengurus1/code/profileP1";
import DashboardP1 from "../Dashboard/Dashboard_Pengurus1/code/dashboardP1";
import MenuP1 from "../Dashboard/Dashboard_Pengurus1/code/menuP1";
import Chat from "../Chat/chat";
import Jemput from "../Jemput/jemput";
import Book from "../book/book";
import Harga from "../Harga/harga";


//import Library
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splashscreen" component={Splashscreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen name="Bottom" component={Bottom} options={{ headerShown: false }} />
                <Stack.Screen name="Book" component={Book} options={{headerShown: false}} />
                <Stack.Screen name="Harga" component={Harga} options={{headerShown: false}} />
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                <Stack.Screen name="BottomP2" component={BottomP2} options={{ headerShown: false }} />
                <Stack.Screen name="Sell" component={Sell} options={{ headerShown: false }} />
                <Stack.Screen name="ProfileP2" component={ProfileP2} options={{ headerShown: false }} />
                <Stack.Screen name="BottomP1" component={BottomP1} options={{ headerShown: false }} />
                <Stack.Screen name="Buy" component={Buy} options={{ headerShown: false }} />
                <Stack.Screen name="ProfileP1" component={ProfileP1} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;

class Bottom extends React.Component {
    render() {
        return (
            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: '#2c3e50',
                tabBarActiveBackgroundColor: "#16a085"
            }} >
                <Tab.Screen name="home" component={Nsb} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                    tabBarShowLabel: false
                }} />
                <Tab.Screen name="Jemput" component={Jemput} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="cube" color={color} size={size} />
                    ),
                    tabBarShowLabel: false
                }} />
                <Tab.Screen name="Chat" component={Chat} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbubble" color={color} size={size} />
                    ),
                    tabBarShowLabel: false
                }} />
                <Tab.Screen name="Menu" component={Menu} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="grid" color={color} size={size} />
                    ),
                    tabBarShowLabel: false
                }} />
            </Tab.Navigator>
        )
    }
}

class BottomP2 extends React.Component {
    render() {
        return (
            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: '#2c3e50',
                tabBarActiveBackgroundColor: "#16a085"
            }}>
                <Tab.Screen name="home" component={DashboardP2} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                    tabBarShowLabel: false
                }} />
                <Tab.Screen name="MenuP2" component={MenuP2} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="grid" color={color} size={size} />
                    ),
                    tabBarShowLabel: false
                }} />
            </Tab.Navigator>
        )
    }
}

class BottomP1 extends React.Component {
    render() {
        return (
            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: '#2c3e50',
                tabBarActiveBackgroundColor: "#16a085"
            }}>
                <Tab.Screen name="home" component={DashboardP1} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                    tabBarShowLabel: false
                }} />
                <Tab.Screen name="Jemput" component={Jemput} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="cube" color={color} size={size} />
                    ),
                    tabBarShowLabel: false
                }} />
                <Tab.Screen name="Chat" component={Chat} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbubble" color={color} size={size} />
                    ),
                    tabBarShowLabel: false
                }} />
                <Tab.Screen name="MenuP1" component={MenuP1} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="grid" color={color} size={size} />
                    ),
                    tabBarShowLabel: false
                }} />
            </Tab.Navigator>
        )
    }
}