import {StyleSheet, View, Image, ActivityIndicator, StatusBar } from 'react-native';
import React, { Component } from 'react';

import AsyncStorage from "@react-native-async-storage/async-storage"


export default class Splashscreen extends Component {
  /*constructor() {
    super();

    AsyncStorage.getItem('token', (error, result) => {
      if (result) {
        this.props.navigation.replace("DashNasabah")
        console.log(result);
      } else {
        this.props.navigation.replace("Login")
        console.log("Token Kosong");
      }
    })
  }*/

  constructor(props) {
    super(props)
    this.state = {
      tok : ''
    }
  }
  

 componentDidMount() {


    // setTimeout( async () => {

      AsyncStorage.getItem('token')
      .then(result => {
        this.setState({
          tok : result
        })
        console.log(this.state.tok);
      })
      .catch(err => {
        console.log(err);
      })


      AsyncStorage.getItem('role')
      .then(result => {
        console.log(result);
        if (result == "NSB") {
          if (this.state.tok == '' || this.state.tok == null) {
            this.props.navigation.replace('Login')
          } else {
            this.props.navigation.replace('DashNasabah')
          }
        } else if (result == 'P1') {
          if (this.state.tok == '' || this.state.tok == null) {
            this.props.navigation.replace('Login')
          } else {
            this.props.navigation.replace('DashP1')
          }
        } else if (result == 'P2') {
          if (this.state.tok == '' || this.state.tok == null) {
            this.props.navigation.replace('Login')
          } else {
            this.props.navigation.replace('DashP2')
          }
        } else if(result == null) {
          this.props.navigation.replace('Login')
        }
      })
      .catch(err => {
        console.log(err);
      })
    // }, 3000)
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <StatusBar backgroundColor="#FFF"/>
          <Image source={require('./asset/Logo.png')} style={styles.image} />
          <ActivityIndicator size='large' color='#cd6133'/>
        </View>
      </View>
    );
  }
} 


const styles = StyleSheet.create({
container: {
  backgroundColor: '#FFF',
  height: '100%',
  // width: '100%',
  justifyContent: 'center',
  alignItems: 'center',

},
image: {
  width: "40%", //170
  height: "25%", //198
  marginBottom: 10,
}
});