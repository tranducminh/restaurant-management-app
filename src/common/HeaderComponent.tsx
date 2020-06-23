/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import normalize from 'react-native-normalize';

const menuIcon = require('@assets/Icons/menu.png');
const backIcon = require('@assets/Icons/back.png');
const ICON_SIZE = 20;
const HeaderComponent = ({ type = 'MENU', title = '' }: { type?: string, title?: string }) => {
  const navigation: any = useNavigation();

  const onPress = () => {
    if (type === 'MENU') {
      navigation.openDrawer();
    } else if (type === 'BACK') {
      navigation.goBack();
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        {type === 'MENU' ? (
          <Image source={menuIcon} style={styles.icon} />
        ) : (
            <Image source={backIcon} style={styles.icon} />
          )}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(15),
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
  button: {
    width: normalize(ICON_SIZE),
    height: normalize(ICON_SIZE),
    top: normalize(16),
    left: normalize(15),
    position: 'absolute',
    zIndex: 2,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  title: {
    width: '100%',
    fontFamily: 'Exo-Bold',
    fontSize: normalize(20),
    textAlign: 'center',
  },
});
