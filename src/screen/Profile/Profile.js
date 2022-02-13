import {
  Text,
  View,
  TouchableOpacity,
  Image, TextInput,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, { Component } from 'react';
import { StyleProfile } from './styleProfile';

// IMPORT LIBRARY
import Ionicons from "react-native-vector-icons/Ionicons"
import AsyncStorage from "@react-native-async-storage/async-storage"
import ImageCropPicker from "react-native-image-crop-picker"


export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      counter: true,
      name: "",
      email: "",
      hp: "",
      address_address: "",
      password: "",
      // profile: null,
      token: "",
    }
  }

  componentDidMount = () => {
    AsyncStorage.getItem('token')
      .then(value => {
        this.setState({ token: value })
        console.log(value);
      })
      .then(() => this.dataUser())
      .catch(err => {
        console.log('AsyncStrogae ERROR: ' + err);
      })
      .finally(console.log('==> Get Token Done'))
  }

  dataUser = () => {
    fetch('https://peaceful-castle-64522.herokuapp.com/api/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.state.token}`,
        Accept: 'application/json',
      }
    })
      .then((response) => response.json())
      .then((respon) => {
        console.log('==> Tampilkan data: ' + JSON.stringify(respon))
        this.setState({
          name: respon.data.name,
          email: respon.data.email,
          hp: respon.data.hp,
          address_address: respon.data.address_address,
          // profile: respon.data.profile,
        })
        console.log(this.state.name)
        console.log(this.state.email)
        console.log(this.state.hp)
        console.log(this.state.address_address)
        // console.log(this.state.profile);
      })
      .catch((err) => console.log('==> Tampilkan Error data: ' + err))
      .finally(console.log('==> Selesai ambil data'))
  }

  editUser = () => {
    fetch(`https://peaceful-castle-64522.herokuapp.com/api/profile/update?name=${this.state.name}&email=${this.state.email}&hp=${this.state.hp}&address_address=${this.state.address_address}&password=${this.state.password}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.state.token}`,
        Accept: 'application/json',
      }
    })
      .then((response) => response.json())
      .then((respon) => {
        console.log(respon)
        if (respon.status == 'sukses') {
          ToastAndroid.show('Berhasil di Edit', ToastAndroid.SHORT, ToastAndroid.CENTER)
          this.dataUser()
        } else {
          console.log('==> Edit Error')
        }
      })
      .catch((err) => console.log('error ==> ' + err))
      .finally(console.log('Edit berhasil'))
  }

  ndelok = () => {
    this.setState({ counter: !this.state.counter })
  }

  selectFromGallery = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      cropperCircleOverlay: true,
    })
      .then(image => {
        console.log(image)
        this.setState({ profile: image.path })
      }).catch((err) => console.log("error from Gallery" + err))
  }

  selectFromCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      cropperCircleOverlay: true,
    })
      .then(image => {
        console.log("data foto : " + JSON.stringify(image))
        this.setState({ profile: image.path })
      }).catch((err) => console.log("==> error from Camera : " + err))
  }
   
  render() {
    return (
      <View style={StyleProfile.container}>
        <View style={StyleProfile.container2}>
          <TouchableOpacity onPress={() => this.props.navigation.replace('Bottom')}>
            <Ionicons name='arrow-back-outline' size={40} color='#000' />
          </TouchableOpacity>
          <Text style={StyleProfile.textProfile}>Profile</Text>
          <View style={{ padding: 20 }} />
        </View>
        <View style={StyleProfile.boxPP}>
          <Image source={require('./asset/pp.jpg')} style={StyleProfile.imagePP} />
          <View style={StyleProfile.boxBtn}>
            <TouchableOpacity onPress={() => this.selectFromCamera()} >
              <Image source={require('./asset/camera.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.selectFromGallery()} style={{ marginTop: 20 }}>
              <Image source={require('./asset/gallery(1).png')} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View>
            <Text style={StyleProfile.textAtas}>Nama Lengkap</Text>
            <View style={StyleProfile.boxEmail}>
              <TextInput
                style={StyleProfile.inputEmail}
                placeholder='Nama Lenkap'
                placeholderTextColor='#000'
                onChangeText={name => { this.setState({ name }) }}
                value={this.state.name}
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
                onChangeText={email => { this.setState({ email }) }}
                value={this.state.email}
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
                onChangeText={hp => { this.setState({ hp }) }}
                value={this.state.hp}
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
                onChangeText={address_address => { this.setState({ address_address }) }}
                value={this.state.address_address}
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
                onChangeText={password => this.setState({ password })} />
              <TouchableOpacity onPress={() => this.ndelok()}>
                <Ionicons name={this.state.counter ? "eye-off-outline" : "eye-outline"} size={30} color={"#000"} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={StyleProfile.tombolMasuk} onPress={() => this.editUser()}>
            <Text style={StyleProfile.textButton}>Simpan</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}


