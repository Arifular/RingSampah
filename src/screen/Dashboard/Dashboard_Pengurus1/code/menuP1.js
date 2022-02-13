import React from "react";
import {View, Text, TouchableOpacity, Image, Alert} from "react-native";
import { StyleSheet } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage"


const MenuP1 = ({navigation}) => {

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
            <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('ProfileP1')}>
                <Image source={require('../../Dashboard_Pengurus2/assets/account.png')} style={Styles.img} />
                <Text style={Styles.txt}>Profile</Text>
                <View />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.btnJual} onPress={() => navigation.navigate("Buy")}>
                <Image source={require('../../Dashboard_Pengurus2/assets/shop.png')} style={Styles.img}/>
                <Text style={Styles.txt}>Beli</Text>
                <View />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.btnOut} onPress={() => logOut()}>
                <Image source={require('../../Dashboard_Pengurus2/assets/turn-off.png')} style={Styles.img}/>
                <Text style={Styles.txt}>Keluar</Text>
                <View />
            </TouchableOpacity>
        </View>
    )
}

export default MenuP1;

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
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
    },
    btnJual: {
        paddingVertical: 20,
        backgroundColor: "#4AB767",
        borderRadius: 10,
        marginVertical: 30,
        flexDirection: "row",
        // justifyContent: "center",
        justifyContent: "space-between",
        paddingHorizontal: 30,
    },
    btnOut: {
        paddingVertical: 20,
        backgroundColor: "#ff4757",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        justifyContent: "space-between",
        paddingHorizontal: 30,
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