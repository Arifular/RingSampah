import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage"

class DashP2 extends React.Component {

    logOut = () => {
        console.log('==> Confirmation Prompt');
        Alert.alert(
            'Perhatian!',
            'Apa anda yakin ingin Keluar?',
            [
                {
                    text: 'Oke',
                    onPress: () => this.removeDataStorage(),
                },
                {
                    text: 'Batal',
                    style: 'cancel'
                }
            ],
            {
                cancelable: true
            }
        )
    }

    removeDataStorage = async () => {
        try {
            await AsyncStorage.clear()
                .then(() => {
                    this.props.navigation.replace('Login')
                })
        } catch (error) {
            console.log(error);
        }
        console.log('==> Remove data from AsyncStorage [Done].');
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 30, textAlign: "center", color: "#000" }}>PENGURUS 2</Text>
                <TouchableOpacity onPress={() => this.logOut()}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: "red" }}>Keluar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default DashP2;