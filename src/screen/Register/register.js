import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, ToastAndroid, Alert } from "react-native"
import { StyleRegister } from "./styleRegister";
import Ionicons from "react-native-vector-icons/Ionicons";

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: true,
            counter2: true,
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            hp: "",
            address_address: "",
        }
    }

    pencet1 = () => {
        this.setState({ counter: !this.state.counter })
    }

    pencet2 = () => {
        this.setState({ counter2: !this.state.counter2 })
    }

    register = () => {
        let dataRegister = {
            name : this.state.name,
            email : this.state.email,
            password : this.state.password,
            password_confirmation : this.state.password_confirmation,
            hp : this.state.hp,
            address_address : this.state.address_address,
        }

        fetch('https://peaceful-castle-64522.herokuapp.com/api/register', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(dataRegister)
        })
            .then((response) => response.json())
            .then((respon) => {
                if (respon.errors) {
                    alert(respon.errors.name + ' ' + respon.errors.email + ' ' + respon.errors.password + ' ' + respon.errors.password_confirmation + ' ' + respon.errors.hp + ' ' + respon.errors.address_address + ' ' + respon.message)
                } else {
                    console.log('SUCCESS => ' + JSON.stringify(respon));
                    // ToastAndroid.show('Register berhasil, Silahkan Login', ToastAndroid.SHORT)
                    Alert.alert(
                        "Account anda berhasil dibuat",
                        "Silahkan untuk Login",
                        [
                            {
                                text: "Oke",
                                onPress: () => this.props.navigation.replace('Login'),
                            },
                        ],
                        {
                            cancelable: true
                        }
                    )
                }
            })
            .catch((e) => console.log(e))
    }

    render() {
        return (
            <ScrollView>
                <View style={StyleRegister.container}>
                    <View style={StyleRegister.header}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Ionicons
                                name="arrow-back-outline"
                                size={50} color={"#000"} />
                        </TouchableOpacity>
                        <View style={StyleRegister.headerText}>
                            <Text style={{ fontSize: 32, color: "#000" }}>Daftar</Text>
                            <Text style={{ fontSize: 20, color: "#000" }}>Silahkan isi data anda</Text>
                        </View>
                        <View style={{ marginRight: 50 }} />
                    </View>
                    <View style={StyleRegister.boxEmail}>
                        <TextInput
                            style={StyleRegister.inputEmail}
                            placeholder="nama anda"
                            placeholderTextColor="#000"
                            onChangeText={name => this.setState({ name })} />
                    </View>
                    <View style={StyleRegister.boxEmail}>
                        <TextInput
                            style={StyleRegister.inputEmail}
                            placeholder="email"
                            placeholderTextColor="#000"
                            onChangeText={email => this.setState({ email })} />
                    </View>
                    <View style={StyleRegister.boxPass}>
                        <TextInput
                            style={StyleRegister.inputPass}
                            placeholder="kata sandi"
                            placeholderTextColor="#000"
                            secureTextEntry={this.state.counter}
                            onChangeText={password => this.setState({ password })} />
                        <TouchableOpacity onPress={() => this.pencet1()}>
                            <Ionicons name={this.state.counter ? "eye-off-outline" : "eye-outline"} size={30} color={"#000"} />
                        </TouchableOpacity>
                    </View>
                    <View style={StyleRegister.boxPass}>
                        <TextInput
                            style={StyleRegister.inputPass}
                            placeholder="Konfirmasi kata sandi"
                            placeholderTextColor="#000"
                            secureTextEntry={this.state.counter2}
                            onChangeText={password_confirmation => this.setState({ password_confirmation })} />
                        <TouchableOpacity onPress={() => this.pencet2()}>
                            <Ionicons name={this.state.counter2 ? "eye-off-outline" : "eye-outline"} size={30} color={"#000"} />
                        </TouchableOpacity>
                    </View>
                    <View style={StyleRegister.boxEmail}>
                        <TextInput
                            style={StyleRegister.inputEmail}
                            placeholder="no HP"
                            placeholderTextColor="#000"
                            onChangeText={hp => this.setState({ hp })} />
                    </View>
                    <View style={StyleRegister.boxEmail}>
                        <TextInput
                            style={StyleRegister.inputEmail}
                            placeholder="alamat"
                            placeholderTextColor="#000"
                            onChangeText={address_address => this.setState({ address_address })} />
                    </View>
                    <Text style={StyleRegister.text1}>Sudah punya akun? <Text style={StyleRegister.text2} onPress={() => this.props.navigation.goBack()}>Silahkan masuk</Text></Text>
                    <TouchableOpacity style={StyleRegister.btnDaftar} onPress={() => this.register()}>
                        <Text style={StyleRegister.text3}>Daftar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

export default Register;