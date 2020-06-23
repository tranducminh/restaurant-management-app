import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';
import color from '@constants/Color';

const PrimaryButton = ({
  text,
  onPress,
  backgroundColor = color.MAIN_COLOR,
}: {
  text: string;
  onPress: Function;
  backgroundColor?: string;
}) => {
  const _onPress = () => {
    onPress();
  };
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor }]}
      onPress={_onPress}>
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
