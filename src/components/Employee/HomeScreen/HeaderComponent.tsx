import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import normalize from 'react-native-normalize';

const menuIcon = require('@assets/Icons/menu.png');
const ICON_SIZE = 18;
const HeaderComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={menuIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(15),
  },
  icon: {
    width: normalize(ICON_SIZE),
    height: normalize(ICON_SIZE),
  },
});
