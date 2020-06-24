import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import normalize from 'react-native-normalize';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import color from '@constants/Color';

import actions from '@actions/index';
const security = require('@assets/security.png');

export default function BlockedScreen() {
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(
      actions.setUserInfo({
        uid: '',
        position: '',
        restaurantID: '',
      }),
    );
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <View style={styles.container}>
      <Image source={security} style={styles.image} />
      <Text style={styles.text}>You was blocked by restaurant manager</Text>
      <Text style={styles.text}>Please contact for more information</Text>
      <TouchableOpacity onPress={signOut}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: normalize(230),
    marginBottom: normalize(20),
  },
  text: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(16),
  },
  buttonText: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(16),
    textDecorationLine: 'underline',
    color: color.MAIN_COLOR,
  },
});
