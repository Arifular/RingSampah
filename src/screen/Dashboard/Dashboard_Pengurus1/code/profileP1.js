import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {ProfileP1Style} from "../style/proP1"

// IMPORT LIBRARY
import Ionicons from "react-native-vector-icons/Ionicons"
import AsyncStorage from "@react-native-async-storage/async-storage"
import ImageCropPicker from "react-native-image-crop-picker"

export class ProfileP1 extends Component {
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
      .catch((err) => {
        console.log('error dari Edit ==> ' + err)
      })
      .finally(console.log('Edit berhasil'))
  }

  ndelok = () => {
    this.setState({ counter: !this.state.counter })
  }

  render() {
    return (
      <View style={ProfileP1Style.container}>
        <View style={ProfileP1Style.container2}>
          <TouchableOpacity onPress={() => this.props.navigation.replace('BottomP1')}>
            <Ionicons name='arrow-back-outline' size={40} color='#000' />
          </TouchableOpacity>
          <Text style={ProfileP1Style.textProfile}>Profile</Text>
          <View />
        </View>
        <View style={ProfileP1Style.boxPP}>
          <Image source={require('../../Dashboard_Pengurus2/assets/man.png')} style={ProfileP1Style.imagePP} />
          <View style={ProfileP1Style.boxBtn}>
            <TouchableOpacity onPress={() => this.selectFromCamera()} >
              <Image source={require('../../../Profile/asset/camera.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.selectFromGallery()} style={{ marginTop: 20 }}>
              <Image source={require('../../../Profile/asset/gallery(1).png')} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View>
            <Text style={ProfileP1Style.textAtas}>Nama Lengkap</Text>
            <View style={ProfileP1Style.boxEmail}>
              <TextInput
                style={ProfileP1Style.inputEmail}
                placeholder='Nama Lengkap'
                placeholderTextColor='#000'
                onChangeText={name => { this.setState({ name }) }}
                value={this.state.name}
              />
            </View>
          </View>
          <View>
            <Text style={ProfileP1Style.textAtas}>Email</Text>
            <View style={ProfileP1Style.boxEmail}>
              <TextInput
                style={ProfileP1Style.inputEmail}
                placeholder='Email'
                placeholderTextColor='#000'
                onChangeText={email => { this.setState({ email }) }}
                value={this.state.email}
              />
            </View>
          </View>
          <View>
            <Text style={ProfileP1Style.textAtas}>Nomor Telepon</Text>
            <View style={ProfileP1Style.boxEmail}>
              <TextInput
                style={ProfileP1Style.inputEmail}
                placeholder='Nomor Telepon'
                placeholderTextColor='#000'
                onChangeText={hp => { this.setState({ hp }) }}
                value={this.state.hp}
              />
            </View>
          </View>
          <View>
            <Text style={ProfileP1Style.textAtas}>Alamat</Text>
            <View style={ProfileP1Style.boxEmail}>
              <TextInput
                style={ProfileP1Style.inputEmail}
                placeholder='Alamat'
                placeholderTextColor='#000'
                onChangeText={address_address => { this.setState({ address_address }) }}
                value={this.state.address_address}
              />
            </View>
          </View>
          <Text style={ProfileP1Style.textAtas}>Kata Sandi</Text>
          <View style={ProfileP1Style.boxPass}>
              <TextInput
                style={ProfileP1Style.inputPass}
                placeholder='Kata Sandi'
                placeholderTextColor='#000'
                secureTextEntry={this.state.counter}
                onChangeText={password => this.setState({ password })} />
              <TouchableOpacity onPress={() => this.ndelok()}>
                <Ionicons name={this.state.counter ? "eye-off-outline" : "eye-outline"} size={30} color={"#000"} />
              </TouchableOpacity>
            </View>
          <TouchableOpacity style={ProfileP1Style.tombolMasuk} onPress={() => this.editUser()}>
            <Text style={ProfileP1Style.textButton}>Simpan</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

export default ProfileP1;
