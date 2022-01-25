import {StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import React, { Component } from 'react';

export default class splashscreen extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Image source={require('./asset/Logo.png')} style={styles.image}/>
          <ActivityIndicator size='small' color='#cd6133'/>
        </View>
      </View>
    );
  }
} 


const styles = StyleSheet.create({
container: {
  backgroundColor: '#fff',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
},
image: {
  width: '27%',
  height: '20%',
  
}
});