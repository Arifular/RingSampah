import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ToastAndroid } from "react-native";
import { styleLogin } from "./styleLogin";

// IMPORT LIBRARY
import Ionicons from "react-native-vector-icons/Ionicons"
import AsyncStorage from "@react-native-async-storage/async-storage"

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: true,
            email : "",
            password: "",
        }
    }

    pencet = () => {
        this.setState({counter: !this.state.counter})
    }

    login = () => {
        let dataLogin = {
            email : this.state.email,
            password : this.state.password
        }

        fetch('http://peaceful-castle-64522.herokuapp.com/api/login', {
            method: "POST",
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(dataLogin)
        })
            .then((response) => response.json())
            .then((respon) => {
                if (respon.errors) {
                    alert(respon.errors.email + ' ' + respon.errors.password + ' ' + respon.message)
                    console.log(respon);
                } else if (respon.message) {
                    alert(respon.message)
                    console.log(respon);
                } else if (respon.data.role  === "NSB") {
                    console.log('SUCCESS => ' + JSON.stringify(respon));
                    this.saveToken('token', respon.data.token)
                        .then(() => this.props.navigation.replace("DashNasabah"))
                        .catch ((e) => console.log('==> Token status: ' + e))
                } else if (respon.data.role  === "P1") {
                    console.log('SUCCESS => ' + JSON.stringify(respon));
                    this.saveToken('token', respon.data.token)
                        .then(() => this.props.navigation.replace("DashP1"))
                        .catch ((e) => console.log('==> Token status: ' + e))
                } else if (respon.data.role  === "P2") {
                    console.log('SUCCESS => ' + JSON.stringify(respon));
                    this.saveToken('token', respon.data.token)
                        .then(() => this.props.navigation.replace("DashP2"))
                        .catch ((e) => console.log('==> Token status: ' + e))
                } else {
                    ToastAndroid.show("ERROR LOGIN", ToastAndroid.SHORT)
                }
                
            })
            .catch((e) => console.log(e))
    }

    saveToken = async (key, value) => {
        try {
            let dataStringfy = JSON.stringify(value)
            await AsyncStorage.setItem(key, dataStringfy);
        } catch (error) {
            console.log("Error: " + error);
        }
    }

    render() {
        return(
            <View style={styleLogin.container}>
                <TouchableOpacity>
                    <Ionicons name="arrow-back-outline" size={50} color={"#000"}/>
                </TouchableOpacity>
                <Image source={require("./asset/Logo.png")} style={styleLogin.logo}/>
                <Text style={styleLogin.text1}>Belum punya akun? <Text style={styleLogin.text2}>Buat akun baru</Text></Text>
                <View style={styleLogin.boxEmail}>
                    <TextInput 
                    style={styleLogin.inputEmail} 
                    placeholder="email"
                    placeholderTextColor="#000"
                    onChangeText={email => this.setState({email})}/>
                </View>
                <View style={styleLogin.boxPass}>
                    <TextInput 
                    style={styleLogin.inputPass} 
                    placeholder="kata sandi" 
                    placeholderTextColor="#000"
                    secureTextEntry={this.state.counter}
                    onChangeText={password => this.setState({password})}/>
                    <TouchableOpacity onPress={() => this.pencet()}>
                        <Ionicons name={this.state.counter ? "eye-off-outline" : "eye-outline"} size={30} color={"#000"}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{alignSelf:"flex-end", marginBottom: 210}}>
                    <Text style={styleLogin.text2}>Lupa kata sandi?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleLogin.btnMasuk} onPress={() => this.login()}>
                    <Text style={styleLogin.text3}>Masuk</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Login;