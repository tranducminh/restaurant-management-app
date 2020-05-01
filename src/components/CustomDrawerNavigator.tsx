import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import normalize from 'react-native-normalize';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import color from '@constants/Color';

const AVATAR_SIZE = 60;

const CustomDrawerNavigator = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <Text style={styles.name} numberOfLines={1}>
          Alexander
        </Text>
        <Text style={styles.position}>Employee</Text>
      </View>
      <DrawerItemList {...props} labelStyle={styles.tab} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerNavigator;

const styles = StyleSheet.create({
  tab: {
    // fontFamily: 'Exo-Bold',
    fontSize: 16,
    // color: color.MAIN_COLOR,
  },
  header: {
    padding: normalize(16),
    borderBottomWidth: 0.5,
    borderColor: '#abaaad',
    marginBottom: normalize(20),
  },
  avatar: {
    width: normalize(AVATAR_SIZE),
    height: normalize(AVATAR_SIZE),
    borderRadius: normalize(AVATAR_SIZE / 2),
    backgroundColor: 'gray',
  },
  name: {
    fontFamily: 'Exo-Bold',
    fontSize: normalize(18),
    marginTop: normalize(10),
  },
  position: {
    fontFamily: 'Exo-Regular',
    color: '#8a8a8a',
  },
});
