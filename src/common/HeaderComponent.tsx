/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import normalize from 'react-native-normalize';

const menuIcon = require('@assets/Icons/menu.png');
const backIcon = require('@assets/Icons/back.png');
const ICON_SIZE = 18;
const HeaderComponent = ({ type = 'MENU' }: { type?: string }) => {
  const navigation = useNavigation();

  const onPress = () => {
    if (type === 'MENU') {
      navigation.openDrawer();
    } else if (type === 'BACK') {
      navigation.goBack();
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        {type === 'MENU' ? (
          <Image source={menuIcon} style={styles.icon} />
        ) : (
            <Image source={backIcon} style={styles.icon} />
          )}
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(15),
    backgroundColor: '#ffffff',
  },
  icon: {
    width: normalize(ICON_SIZE),
    height: normalize(ICON_SIZE),
  },
});
