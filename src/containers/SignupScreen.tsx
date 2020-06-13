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

import PrimaryButton from '@common/PrimaryButton';
import TextInput from '@common/TextInput';
import { createRestaurant, signUpWithEmailAndPassword } from '../api';

const SignupScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [address, setAddress] = useState('');

  const onSignUp = async () => {
    const hostID = await signUpWithEmailAndPassword(email, password);
    createRestaurant(hostID, restaurantName, address, email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('@assets/shop.png')} style={styles.image} />
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
        <TextInput title="Address" value={address} onChangeText={setAddress} />
        <PrimaryButton text="Sign up" onPress={onSignUp} />
        <TouchableOpacity
          style={styles.signinButton}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.signupText}>
            Have already account? Sign in now!
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
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
    color: '#2c9ced',
  },
});
