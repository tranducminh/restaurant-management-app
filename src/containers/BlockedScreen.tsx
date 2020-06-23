import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import color from '@constants/Color';

import actions from '@actions/index';

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
