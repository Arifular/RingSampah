import { Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { Component } from 'react';
import { StyleMenu } from './StyleMenu'

//IMPORT LIBRARY
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from 'react-native-vector-icons/Ionicons'

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

      <View style={StyleMenu.container}>
        <Text style={StyleMenu.textMenu}>Menu</Text>
        <View style={StyleMenu.containerBox}>
          <Ionicons name='person-outline' size={40} color='#000' />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
            <Text style={StyleMenu.textBox}>Profile</Text>
          </TouchableOpacity>
          <View />
        </View>
        <View style={StyleMenu.containerBox}>
          <Ionicons name='book-outline' size={40} color='#000' />
          <TouchableOpacity>
            <Text style={StyleMenu.textBox}>Panduan</Text>
          </TouchableOpacity>
          <View />
        </View>
        <TouchableOpacity style={StyleMenu.btn} onPress={() => this.logOut()}>
          <Text style={StyleMenu.textBtn}>Keluar</Text>
        </TouchableOpacity>
      </View>

    );
  }
}


