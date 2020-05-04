import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import normalize from 'react-native-normalize';

import color from '@constants/Color';
import Food from '@components/Employee/PaymentScreen/Food';
import Payment from '@components/Employee/PaymentScreen/Payment';

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Order</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <Food />
        <Food />
        <Food />
      </ScrollView>
      <View style={styles.payment}>
        <Payment />
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  content: {
    paddingHorizontal: normalize(16),
    paddingTop: normalize(40),
    borderRadius: normalize(40),
    backgroundColor: '#f0f0f0',
  },
  payment: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  title: {
    fontFamily: 'Exo-Regular',
    fontSize: normalize(35),
    color: '#584538',
    paddingBottom: normalize(10),
    paddingHorizontal: normalize(16),
  },
});
