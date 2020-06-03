import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import normalize from 'react-native-normalize';

import color from '@constants/Color';

const plusIcon = require('@assets/Icons/plus_white.png');
const AddIcon = ({
  onPress,
  size = 40,
}: {
  onPress: Function;
  size: number;
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        width: normalize(size),
        height: normalize(size),
      }}
      onPress={onPress}>
      <Image source={plusIcon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default AddIcon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.MAIN_COLOR,
    borderRadius: normalize(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: normalize(15),
    height: normalize(15),
  },
});
