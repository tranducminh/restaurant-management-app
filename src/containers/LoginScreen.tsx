import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import normalize from 'react-native-normalize';
import color from '@constants/Color';

import PrimaryButton from '@common/PrimaryButton';
import TextInput from '@common/TextInput';
import HeaderComponent from '@common/HeaderComponent';
const facebookIcon = require('@assets/facebook.png');
const googleIcon = require('@assets/google.png');
import { signInWithEmailAndPassword } from '@api/index';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSingIn = async () => {
    await signInWithEmailAndPassword(email, password);
  };
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent type="BACK" />
      <View style={styles.content}>
        <Text style={styles.title}>Sign In</Text>
        <View style={styles.form}>
          <TextInput title="Email" value={email} onChangeText={setEmail} />
          <TextInput
            title="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
          />
          <PrimaryButton text="Sign in" onPress={onSingIn} />
          <Text style={styles.text}>OR</Text>
          <View style={styles.other}>
            <TouchableOpacity>
              <Image source={facebookIcon} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={googleIcon} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.signinButton}>
            <Text style={styles.signupText}>Have no account?</Text>
            <Text style={styles.signupText}>
              Contact to your restaurant manager for support
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  content: {
    height: '100%',
  },
  title: {
    color: color.MAIN_COLOR,
    fontFamily: 'Exo-Bold',
    fontSize: normalize(30),
    marginTop: normalize(20),
    marginBottom: normalize(50),
    paddingHorizontal: normalize(16),
  },
  form: {
    paddingHorizontal: normalize(25),
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: normalize(25),
    paddingHorizontal: normalize(10),
    fontSize: normalize(15),
  },
  signinButton: {
    paddingVertical: normalize(20),
  },
  signupText: {
    textAlign: 'center',
    fontFamily: 'Exo-Medium',
    color: color.MAIN_COLOR,
  },
  other: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    width: normalize(30),
    height: normalize(30),
    marginHorizontal: normalize(15),
  },
  text: {
    textAlign: 'center',
    paddingVertical: normalize(20),
    fontFamily: 'Exo-Medium',
  },
});
