import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import normalize from 'react-native-normalize';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';

import TextPicker from '@common/TextPicker';
import TextInput from '@common/TextInput';
import PrimaryButton from '@common/PrimaryButton';

import { createTempUser, sendAccountInformation } from '@api/index';
const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

export default function AddEmployeeScreen() {
  const { restaurantID } = useTypedSelector((state) => state.user);
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const values = [
    {
      label: 'Host',
      value: 'HOST',
    },
    {
      label: 'Employee',
      value: 'EMPLOYEE',
    },
    {
      label: 'Chef',
      value: 'CHEF',
    },
  ];
  const createAccount = () => {
    createTempUser(email, password, restaurantID, position);
    // sendAccountInformation();
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput title="Email" value={email} onChangeText={setEmail} />
        <TextInput
          title="Password"
          value={password}
          onChangeText={setPassword}
        />
        <PrimaryButton
          text="Generate password"
          onPress={() => setPassword(generatePassword())}
        />
        <TextPicker setValue={setPosition} values={values} title="Position" />
        <PrimaryButton text="Create account" onPress={createAccount} />
      </View>
    </SafeAreaView>
  );
}

const generatePassword = () => {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var string_length = 8;
  var randomstring = '';
  for (var i = 0; i < string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  return randomstring;
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(20),
  },
});
