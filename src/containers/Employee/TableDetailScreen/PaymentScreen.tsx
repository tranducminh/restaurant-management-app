/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import normalize from 'react-native-normalize';
import { useNavigation } from '@react-navigation/native';
import color from '@constants/Color';
import EmptyIcon from '@common/EmptyIcon';

import Food from '@components/Employee/PaymentScreen/Food';
import Payment from '@components/Employee/PaymentScreen/Payment';
import PrimaryButton from '@common/PrimaryButton';
const backIcon = require('@assets/Icons/back.png');

import {
  getOrderListByTableId,
  removeOrder,
  returnTable,
  getSelectionListByTableId,
  removeSelection,
} from '@api/index';

type orderData = {
  foodName: string;
  url: string;
  quantity: number;
  price: number;
  status: string;
};

const PaymentScreen = ({ tableId }: { tableId: string }) => {
  const navigation: any = useNavigation();
  const [orderList, setOrderList] = useState([]);
  const [payment, setPayment] = useState(0);
  const [selectionList, setSelectionList] = useState([]);
  const returnNull = () => {
    return;
  };
  const renderOrderList = () => {
    if (orderList.length === 0) {
      return (
        <View style={styles.nullContainer}>
          <EmptyIcon />
          <Text style={styles.text}>You haven't order any food yet</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.jumpTo('SelectionScreen')}>
            <Image source={backIcon} style={styles.icon} />
          </TouchableOpacity>
          <PrimaryButton
            text="Cancel order"
            onPress={onPurchase}
            backgroundColor="#ff7d7a"
          />
        </View>
      );
    }
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {' '}
        {orderList.map(
          (item: { data: orderData; id: string }, index: number) => {
            return <Food key={index} {...item.data} />;
          },
        )}
      </ScrollView>
    );
  };
  const onPurchase = () => {
    orderList.forEach((item: { id: string }) => {
      removeOrder(item.id);
    });
    selectionList.forEach((item: { id: string }) => {
      removeSelection(item.id);
    });
    returnTable(tableId);
    navigation.navigate('HomeScreen');
  };
  useEffect(() => {
    getOrderListByTableId(tableId, setOrderList, setPayment);
    getSelectionListByTableId(tableId, setSelectionList, returnNull);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Payment</Text>
      {renderOrderList()}
      {orderList.length !== 0 && (
        <View style={styles.payment}>
          <Payment payment={payment} onPurchase={onPurchase} />
        </View>
      )}
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: color.MAIN_COLOR,
    borderTopLeftRadius: normalize(40),
    borderTopRightRadius: normalize(40),
    paddingTop: normalize(20),
  },
  nullContainer: {
    height: '100%',
    alignItems: 'center',
    paddingTop: normalize(180),
    borderTopLeftRadius: normalize(40),
    borderTopRightRadius: normalize(40),
    backgroundColor: '#ffffff',
  },
  content: {
    paddingHorizontal: normalize(16),
    paddingTop: normalize(40),
    borderTopLeftRadius: normalize(40),
    borderTopRightRadius: normalize(40),
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
  button: {
    width: normalize(30),
    height: normalize(30),
    marginBottom: normalize(10),
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(18),
    paddingVertical: normalize(10),
  },
});
