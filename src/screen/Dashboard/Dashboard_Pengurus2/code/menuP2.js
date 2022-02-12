import React from "react";
import {View, Text, TouchableOpacity, Image, Alert} from "react-native";
import { StyleSheet } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage"


const MenuP2 = ({navigation}) => {

    logOut = () => {
        console.log('==> Confirmation Prompt');
        Alert.alert(
            'Perhatian!',
            'Apa anda yakin ingin Keluar?',
            [
                {
                    text: 'Oke',
                    onPress: () => removeDataStorage(),
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
            await AsyncStorage.removeItem('role')
            await AsyncStorage.removeItem('token')
                .then(() => {
                    navigation.replace('Login')
                })
        } catch (error) {
            console.log(error);
        }
        console.log('==> Remove data from AsyncStorage [Done].');
    }

    return(
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('ProfileP2')}>
                <Image source={require('../assets/account.png')} style={Styles.img} />
                <Text style={Styles.txt}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.btnOut} onPress={() => logOut()}>
                <Image source={require('../assets/out.png')} style={Styles.img}/>
                <Text style={Styles.txt}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MenuP2;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2C3E50",
        padding: 25,
        flexDirection: "column",
        justifyContent: "center",
    },
    btn: {
        paddingVertical: 20,
        backgroundColor: "#2690A8",
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "center"
    },
    btnOut: {
        paddingVertical: 20,
        backgroundColor: "#4AB767",
        borderRadius: 10,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center"
    },
    txt: {
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
        color: "#FFF"
    },
    img: {
        height: 40,
        width: 40,
        marginRight: 10
    }
})