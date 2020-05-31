import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';

const PrimaryButton = ({
  text,
  onPress,
}: {
  text: string;
  onPress: Function;
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
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
});
