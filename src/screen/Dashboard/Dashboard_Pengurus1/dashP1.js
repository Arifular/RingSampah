import React from "react";
import {View, Text, TouchableOpacity, Alert} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage"

class DashP1 extends React.Component{

    logOut = () => {
        console.log('==> Confirmation Prompt');
        Alert.alert(
            'Perhatian!',
            'Apa anda yakin ingin Keluar?',
            [
                {
                    text: "Oke",
                    onPress: () => this.removeDataStorage(),
                },
                {
                    text: "Batal",
                    style: "cancel"
                }
            ],
            {
                cancelable: true
            }
        )
    }

    removeDataStorage = async () => {
        try {
            await AsyncStorage.removeItem('role')
            await AsyncStorage.removeItem('token')
                .then(() => {
                    this.props.navigation.replace('Login')
                })
        } catch (error) {
            console.log(error);
        }
        console.log('==> Removedata from AsyncStorage [Done].')
    }

    render() {
        return(
            <View>
                <Text style={{fontSize: 30, textAlign: "center", color: "#000"}}>PENGURUS 1</Text>
                <TouchableOpacity onPress={() => this.logOut()}>
                    <Text style={{fontSize: 30, textAlign: "center", color: "red"}}>Keluar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default DashP1;