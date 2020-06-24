import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import normalize from 'react-native-normalize';
const empty = require('@assets/empty.png');

export default function EmptyIcon() {
  return (
    <View>
      <Image source={empty} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: normalize(60),
    height: normalize(60),
    marginVertical: normalize(10),
  },
});
