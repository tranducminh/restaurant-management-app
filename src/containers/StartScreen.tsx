import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import color from '@constants/Color';
import PositionItem from '../components/StartScreen/PositionItem';
import firestore from '@react-native-firebase/firestore';

const data = [
  {
    icon: require('@assets/shop.png'),
    title: 'Chủ nhà hàng',
    id: 'Host',
  },
  {
    icon: require('@assets/chef.png'),
    title: 'Đầu bếp',
    id: 'Chef',
  },
  {
    icon: require('@assets/waiter.png'),
    title: 'Nhân viên',
    id: 'Employee',
  },
];

const StartScreen = () => {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        {data.map((item, index) => (
          <View style={styles.item}>
            <PositionItem {...item} key={index} />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: '50%',
  },
});
