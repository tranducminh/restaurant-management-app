import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import normalize from 'react-native-normalize';
import color from '@constants/Color';
import { Toast } from 'native-base';
import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

import PrimaryButton from '@common/PrimaryButton';
import TextInput from '@common/TextInput';
import HeaderComponent from '@common/HeaderComponent';
import { createRestaurant, signUpWithEmailAndPassword } from '../api';

const googleIcon = require('@assets/google.png');

GoogleSignin.configure({
  webClientId:
    '975180937010-e3addcehrplvulrt7squntcl2i2aso49.apps.googleusercontent.com',
});
const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [address, setAddress] = useState('');
  const [restaurantNameGG, setRestaurantNameGG] = useState('');
  const [addressGG, setAddressGG] = useState('');

  const onSignUp = async () => {
    const hostID = await signUpWithEmailAndPassword(email, password);
    createRestaurant(hostID, restaurantName, address, email, '', '');
  };
  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth()
      .signInWithCredential(googleCredential)
      .then((data) => {
        if (data.additionalUserInfo?.isNewUser === true) {
          let { uid } = data.user;
          console.log(data);
          createRestaurant(
            uid,
            restaurantNameGG,
            addressGG,
            data.user.email,
            data.user.displayName,
            data.user.photoURL,
          );
        } else {
          Toast.show({
            text: `${data.user.email} was already registered.`,
            type: 'warning',
            position: 'top',
            duration: 3000,
          });
        }
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent type="BACK" />
      <Text style={styles.title}>Sign Up</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <TextInput title="Email" value={email} onChangeText={setEmail} />
          <TextInput
            title="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
          />
          <TextInput
            title="Restaurent name"
            value={restaurantName}
            onChangeText={setRestaurantName}
          />
          <TextInput
            title="Address"
            value={address}
            onChangeText={setAddress}
          />
          <PrimaryButton text="Sign up" onPress={onSignUp} />
          <Text style={styles.text}>OR</Text>
          <TextInput
            title="Restaurent name"
            value={restaurantNameGG}
            onChangeText={setRestaurantNameGG}
          />
          <TextInput
            title="Address"
            value={addressGG}
            onChangeText={setAddressGG}
          />
          <View style={styles.other}>
            <TouchableOpacity
              onPress={() => onGoogleButtonPress()}
              style={styles.button}>
              <Image source={googleIcon} style={styles.icon} />
              <Text style={styles.buttonText}>Sign up with Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  title: {
    color: color.MAIN_COLOR,
    fontFamily: 'Exo-Bold',
    fontSize: normalize(30),
    marginTop: normalize(20),
    marginBottom: normalize(50),
    paddingHorizontal: normalize(16),
  },
  image: {
    width: normalize(100),
    height: normalize(100),
    alignSelf: 'center',
    marginBottom: normalize(50),
  },
  form: {
    paddingHorizontal: normalize(25),
  },
  signinButton: {
    paddingVertical: normalize(10),
  },
  signupText: {
    textAlign: 'center',
    fontFamily: 'Exo-Medium',
    color: color.MAIN_COLOR,
  },
  text: {
    textAlign: 'center',
    paddingVertical: normalize(20),
    fontFamily: 'Exo-Italic',
    fontSize: normalize(16),
  },
  other: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: normalize(1),
    width: '100%',
    paddingVertical: normalize(10),
    marginBottom: normalize(50),
    borderRadius: normalize(10),
  },
  buttonText: {
    fontFamily: 'Exo-Bold',
    fontSize: normalize(16),
  },
  icon: {
    width: normalize(25),
    height: normalize(25),
    marginHorizontal: normalize(15),
  },
});
