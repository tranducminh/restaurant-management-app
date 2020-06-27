import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Color from '@constants/Color';
import normalize from 'react-native-normalize';

const zeroImage = require('@assets/event.png');

const StartScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.safearea}>
      <Image source={zeroImage} style={styles.image} />
      <Text style={styles.title}>Manage restaurant easier</Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.singupButton}
        onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: normalize(250),
  },
  title: {
    color: Color.MAIN_COLOR,
    fontFamily: 'Exo-Medium',
    fontSize: normalize(30),
    width: '80%',
    textAlign: 'center',
    marginBottom: normalize(20),
  },
  loginButton: {
    paddingVertical: normalize(10),
    backgroundColor: Color.MAIN_COLOR,
    width: '80%',
    marginTop: normalize(20),
    borderRadius: normalize(15),
    borderWidth: normalize(2),
    borderColor: Color.MAIN_COLOR,
  },
  loginText: {
    fontSize: normalize(18),
    fontFamily: 'Exo-Bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  singupButton: {
    paddingVertical: normalize(10),
    backgroundColor: '#ffffff',
    width: '80%',
    marginTop: normalize(20),
    borderRadius: normalize(15),
    borderWidth: normalize(2),
    borderColor: Color.MAIN_COLOR,
  },
  signupText: {
    fontSize: normalize(18),
    fontFamily: 'Exo-Bold',
    color: Color.MAIN_COLOR,
    textAlign: 'center',
  },
});
