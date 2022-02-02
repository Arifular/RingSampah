import { Text,
  View,
  TouchableOpacity, 
  Image, TextInput, 
  ScrollView
} from 'react-native';
import React, { Component } from 'react';
import { StyleProfile } from './styleProfile';

// IMPORT LIBRARY
import Ionicons from "react-native-vector-icons/Ionicons"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default class Profile extends Component {
  constructor(){
    super();
    this.state = {
        counter: true,
        namaLenkap: "",
        email:"",
        nomorTelepon: "",
        alamat: "",
        password: "",
    }
  }

  ndelok = () => {
    this.setState ({counter: !this.state.counter})
  } 

  // profile = () => {
  //   let dataProfile ={
  //     namaLenkap: this.state.namaLenkap,
  //     email:this.state.email,
  //     nomorTelepon: this.state.nomorTelepon,
  //     alamat: this.state.alamat,
  //     password: this.state.password,
  //   }

  //   fecth('http://peaceful-castle-64522.herokuapp.com/api/nasabah/profile/update', {
  //     method: "POST",
  //     headers: {
  //       'Accept': 'application/json',

  //     }
  //   })
  // }
  render() {
    return (
      <View style={StyleProfile.container}>
        <View style={StyleProfile.container2}>
            <TouchableOpacity>
                <Ionicons name='arrow-back-outline' size={40} color='#000'/>
            </TouchableOpacity>
            <Text style={StyleProfile.textProfile}>Profile</Text>
            <View/>
        </View>
        <Image source={require('./asset/PP.png')} style={StyleProfile.imagePP}/>
        <ScrollView>

          <View>
            <Text style={StyleProfile.textAtas}>Nama Lenkap</Text>
            <View style={StyleProfile.boxEmail}>
              <TextInput
              style={StyleProfile.inputEmail}
              placeholder='Nama Lenkap'
              placeholderTextColor='#000'
              />
            </View>
          </View>
          <View>
            <Text style={StyleProfile.textAtas}>Email</Text>
            <View style={StyleProfile.boxEmail}>
              <TextInput
              style={StyleProfile.inputEmail}
              placeholder='Email'
              placeholderTextColor='#000'
              />
            </View>
          </View>
          
          <View>
            <Text style={StyleProfile.textAtas}>Nomor Telepon</Text>
            <View style={StyleProfile.boxEmail}>
              <TextInput
              style={StyleProfile.inputEmail}
              placeholder='Nomor Telepon'
              placeholderTextColor='#000'
              />
            </View>
          </View>
          <View>
            <Text style={StyleProfile.textAtas}>Alamat</Text>
            <View style={StyleProfile.boxEmail}>
              <TextInput
              style={StyleProfile.inputEmail}
              placeholder='Alamat'
              placeholderTextColor='#000'
              />
            </View>
          </View>
          <View>
            <Text style={StyleProfile.textAtas}>Kata Sandi</Text>
            <View style={StyleProfile.boxPass}>
              <TextInput
              style={StyleProfile.inputPass}
              placeholder='Kata Sandi'
              placeholderTextColor='#000'
              secureTextEntry={this.state.counter}
              onChangeText={password => this.setState({password})}/>
              <TouchableOpacity onPress={() => this.ndelok()}>
                <Ionicons name={this.state.counter ? "eye-off-outline" : "eye-outline"} size={30} color={"#000"}/>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={StyleProfile.tombolMasuk}>
            <Text style={StyleProfile.textButton}>Simpan</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}


