/* eslint-disable prettier/prettier */
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

const LoginScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { icon, id } = route.params;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSingUp = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log('123', user);
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          console.log('password is incorrect!');
        }
        if (error.code === 'auth/user-not-found') {
          console.log('user not found!');
        }
        console.error(error);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image source={icon} style={styles.image} />
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
        <TouchableOpacity style={styles.button} onPress={onSingUp}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        {id === 'Host' ? (
          <TouchableOpacity
            style={styles.signinButton}
            onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={styles.signupText}>Have no account?</Text>
            <Text style={styles.signupText}>
              Register now for your restaurant!
            </Text>
          </TouchableOpacity>
        ) : (
            <View
              style={styles.signinButton}>
              <Text style={styles.signupText}>Have no account?</Text>
              <Text style={styles.signupText}>
                Contact to your restaurant manager for support
            </Text>
            </View>
          )}
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
  },
  image: {
    width: normalize(100),
    height: normalize(100),
    alignSelf: 'center',
    marginBottom: normalize(100),
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
