import { Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

//IMPORT LIBRARY
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Menu extends Component {

  logOut = () => {
    console.log("==> Confirmation Prompt");
    Alert.alert(
      "Perhatian!",
      "Apa anda yakin ingin Keluar?",
      [
        {
          text: "Oke",
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
      await AsyncStorage.removeItem('role')
      await AsyncStorage.removeItem('token')
        .then(() => {
          this.props.navigation.replace('Login')
        })
        .catch(e => console.log(e))
    } catch (error) {
      console.log(error);
    }
    console.log('==> Remove data from AsyncStorage [Done].');
  }

  render() {
    return (
      <View style={Styles.container}>
        <TouchableOpacity style={Styles.btn} onPress={() => this.props.navigation.navigate('Profile')}>
          <Image source={require('../Dashboard/Dashboard_Pengurus2/assets/account.png')} style={Styles.img} />
          <Text style={Styles.txt}>Profile</Text>
          <View />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.btnPandu} onPress={() => this.props.navigation.navigate("Book")}>
          <Image source={require('../Dashboard/Dashboard_Pengurus2/assets/book.png')} style={Styles.img} />
          <Text style={Styles.txt}>Buku Panduan</Text>
          <View />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.btnJual} onPress={() => this.props.navigation.navigate("Harga")}>
          <Image source={require('../Dashboard/Dashboard_Pengurus2/assets/rp.png')} style={Styles.img} />
          <Text style={Styles.txt}>Harga Jual Sampah</Text>
          <View />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.btnOut} onPress={() => this.logOut()}>
          <Image source={require('../Dashboard/Dashboard_Pengurus2/assets/turn-off.png')} style={Styles.img} />
          <Text style={Styles.txt}>Keluar</Text>
          <View />
        </TouchableOpacity>
      </View>
    );
  }
}


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
  btnPandu: {
      paddingVertical: 20,
      backgroundColor: "#4AB767",
      borderRadius: 10,
      marginVertical: 30,
      flexDirection: "row",
      justifyContent: "center",
      justifyContent: "space-between",
      paddingHorizontal: 30,
  },
  btnJual: {
    paddingVertical: 20,
    backgroundColor: "#6c5ce7",
    borderRadius: 10,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "center",
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