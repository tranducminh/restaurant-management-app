import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import normalize from 'react-native-normalize';

import Food from '@components/Employee/PaymentScreen/Food';
import Payment from '@components/Employee/PaymentScreen/Payment';

const PaymentScreen = ({ tableId }: { tableId: string }) => {
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
    backgroundColor: '#2c9ced',
    borderTopLeftRadius: normalize(40),
    borderTopRightRadius: normalize(40),
    paddingTop: normalize(20),
  },
  content: {
    paddingHorizontal: normalize(16),
    paddingTop: normalize(40),
    borderRadius: normalize(40),
    backgroundColor: '#ffffff',
  },
  payment: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  title: {
    fontFamily: 'Exo-Regular',
    fontSize: normalize(35),
    color: '#ffffff',
    paddingBottom: normalize(10),
    paddingHorizontal: normalize(16),
  },
});
