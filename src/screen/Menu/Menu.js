import { Text, View,TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import {StyleMenu} from './StyleMenu'

//IMPORT LIBRARY
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Menu extends Component {
  render() {
    return (
      
        <View style={StyleMenu.container}>
            <View style={StyleMenu.container2}>
              <TouchableOpacity>
                <Ionicons name='arrow-back-outline' size={40} color='#000'/>
              </TouchableOpacity>
              <Text style={StyleMenu.textMenu}>Menu</Text>
              <View/>
            </View>
            <View style={StyleMenu.containerBox}>
              <Ionicons name='person-outline' size={40} color='#000'/>
              <TouchableOpacity>
                <Text style={StyleMenu.textBox}>Profile</Text>
              </TouchableOpacity>
              <View/>
            </View>
            <View style={StyleMenu.containerBox}>
              <Ionicons name='book-outline' size={40} color='#000'/>
              <TouchableOpacity>
                <Text style={StyleMenu.textBox}>Panduan</Text>
              </TouchableOpacity>
              <View/>
            </View>
        </View>
      
    );
  }
}


