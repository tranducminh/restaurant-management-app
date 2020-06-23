import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';

import actions from '@actions/index';

const AVATAR_SIZE = 60;

const CustomDrawerNavigator = (props: any) => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(
      actions.setUserInfo({
        uid: '',
        position: '',
        restaurantID: '',
      }),
    );
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <Text style={styles.name} numberOfLines={1}>
          Alexander
        </Text>
        <Text style={styles.position}>{props.jobPosition}</Text>
      </View>
      <DrawerItemList {...props} labelStyle={styles.tab} />
      <TouchableOpacity onPress={signOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerNavigator;

const styles = StyleSheet.create({
  tab: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(15),
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
  button: {},
  buttonText: {
    marginTop: normalize(16),
    fontFamily: 'Exo-Medium',
    fontSize: normalize(15),
    paddingHorizontal: normalize(16),
  },
});
