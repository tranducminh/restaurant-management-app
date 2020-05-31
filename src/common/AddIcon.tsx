import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import normalize from 'react-native-normalize';

import color from '@constants/Color';

const plusIcon = require('@assets/Icons/plus_white.png');
const AddIcon = ({ onPress }: { onPress: Function }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={plusIcon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default AddIcon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.MAIN_COLOR,
    width: normalize(40),
    height: normalize(40),
    borderRadius: normalize(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: normalize(15),
    height: normalize(15),
  },
});
