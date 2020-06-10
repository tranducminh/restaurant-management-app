import { StyleSheet, View, SafeAreaView } from 'react-native';
import React from 'react';

import PositionItem from '../components/StartScreen/PositionItem';
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
          <View style={styles.item} key={index}>
            <PositionItem {...item} />
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
