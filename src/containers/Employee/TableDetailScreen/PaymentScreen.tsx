/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import normalize from 'react-native-normalize';
import { useNavigation } from '@react-navigation/native';

import Food from '@components/Employee/PaymentScreen/Food';
import Payment from '@components/Employee/PaymentScreen/Payment';

import { getOrderListByTableId, removeOrder, returnTable } from '@api/index';

type orderData = {
  foodName: string;
  url: string;
  quantity: number;
  price: number;
  status: string;
};

const PaymentScreen = ({ tableId }: { tableId: string }) => {
  const navigation = useNavigation();
  const [orderList, setOrderList] = useState([]);
  const [payment, setPayment] = useState(0);
  const renderOrderList = () => {
    return orderList.map(
      (item: { data: orderData; id: string }, index: number) => {
        return <Food key={index} {...item.data} />;
      },
    );
  };
  const onPurchase = () => {
    orderList.forEach((item: { id: string }) => {
      removeOrder(item.id);
    });
    returnTable(tableId);
    navigation.navigate('HomeScreen');
  };
  useEffect(() => {
    getOrderListByTableId(tableId, setOrderList, setPayment);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Order</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {renderOrderList()}
      </ScrollView>
      <View style={styles.payment}>
        <Payment payment={payment} onPurchase={onPurchase} />
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
