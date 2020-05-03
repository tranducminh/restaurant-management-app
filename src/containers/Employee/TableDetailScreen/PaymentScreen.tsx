import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import normalize from 'react-native-normalize';

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
      <Payment />
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
  },
  title: {
    fontFamily: 'Exo-Regular',
    fontSize: normalize(35),
    color: '#584538',
    paddingBottom: normalize(20),
    paddingHorizontal: normalize(16),
  },
});
