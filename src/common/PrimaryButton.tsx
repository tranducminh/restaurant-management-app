import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';

const PrimaryButton = ({
  text,
  onPress,
  backgroundColor = '#2c9ced',
}: {
  text: string;
  onPress: Function;
  backgroundColor?: string;
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor }]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    padding: normalize(10),
    borderRadius: normalize(20),
  },
  buttonText: {
    textAlign: 'center',
    fontSize: normalize(15),
    fontFamily: 'Exo-Bold',
    color: '#ffffff',
  },
});
