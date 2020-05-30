import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import normalize from 'react-native-normalize';
import auth from '@react-native-firebase/auth';

import { createRestaurant, createUser } from '../utils';

const SignupScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [address, setAddress] = useState('');
  const onSingUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        console.log('User account created & signed in!');
        createRestaurant(data.user.uid, restaurantName, address);
        createUser(data.user.uid, 'Host');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('@assets/shop.png')} style={styles.image} />
      <View style={styles.form}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <Text>Restaurent name</Text>
        <TextInput
          style={styles.input}
          value={restaurantName}
          onChangeText={text => setRestaurantName(text)}
        />
        <Text>Address</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={text => setAddress(text)}
        />
        <TouchableOpacity style={styles.button} onPress={onSingUp}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: '#2c9ced',
    padding: normalize(10),
    borderRadius: normalize(10),
  },
  buttonText: {
    textAlign: 'center',
    fontSize: normalize(15),
    fontFamily: 'Exo-Medium',
    color: '#ffffff',
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
    paddingVertical: normalize(10),
  },
  signupText: {
    textAlign: 'center',
    fontFamily: 'Exo-Medium',
    color: '#2c9ced',
  },
});
