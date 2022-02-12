import React from "react";
import { View, Text, Image, ScrollView, FlatList } from "react-native"
import { StyleDashP1 } from "../style/dashP1Style";
import AsyncStorage from "@react-native-async-storage/async-storage"


class DashboardP1 extends React.Component{
    constructor(){
        super();
        this.state = {
            token: '',
            data: '',
            user: '',
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('token')
            .then(value => {
                this.setState({token: value})
                console.log(value)
            })
            .then(() => this.DataUser())
            .catch((err) => console.log("==> AsyncStrogae Error: " + err))
            .finally(console.log("==> Ambil Token Selesai"))
    }

    DataUser= async () => {
        await fetch('http://peaceful-castle-64522.herokuapp.com/api/driver/home', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.state.token}`,
                Accept: 'application/json'
            }
        })
            .then((response) => response.json())
            .then((respon) => {
                console.log("==> ambil data Pengurus 1 : " + respon)
                this.setState({
                    data: respon.data,
                    user: respon.user
                })
                console.log("ini dari data " + JSON.stringify(this.state.data))
                console.log("ini dari user " + JSON.stringify(this.state.user))
            })
            .catch((err) => console.log("==> error dari data pengurus 1 : " + err))
            .finally(console.log("==> Selesai Ambil data dari Pengurus 1"))
    }

    render(){
        return(
            <View style={StyleDashP1.container}>
                <Image source={require('../../dashboardNasabah/assets/logo.png')} style={StyleDashP1.img} />
                <View style={StyleDashP1.bcc}>
                    <Image source={require('../../Dashboard_Pengurus2/assets/man.png')} style={StyleDashP1.pp} />
                    <View style={StyleDashP1.boxText}>
                        <Text style={StyleDashP1.txt1}>{this.state.user.name}</Text>
                        <Text style={StyleDashP1.txt2}>{this.state.user.email}</Text>
                        <Text style={StyleDashP1.txt2}>{this.state.user.hp}</Text>
                    </View>
                </View>
                <View style={StyleDashP1.viewLine} />
                <View style={StyleDashP1.boxMinta}>
                    <Text style={StyleDashP1.txtMinta}>{this.state.data}</Text>
                </View>
            </View>
        )
    }
}

export default DashboardP1;