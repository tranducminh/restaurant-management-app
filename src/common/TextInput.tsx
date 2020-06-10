import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import normalize from 'react-native-normalize';

const Input = ({
  title,
  value,
  keyboardType = 'default',
  onChangeText,
  secureTextEntry = false,
  disable = false,
}: {
  title: string;
  value: string;
  onChangeText?: Function;
  keyboardType?: string;
  secureTextEntry?: boolean;
  disable?: boolean;
}) => {
  return (
    <View>
      <Text>{title}</Text>
      <TextInput
        style={styles.input}
        value={value}
        secureTextEntry={secureTextEntry}
        // keyboardType="numeric"
        onChangeText={(text) => onChangeText(text)}
        editable={!disable}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: normalize(25),
    paddingHorizontal: normalize(10),
    fontSize: normalize(15),
  },
});
