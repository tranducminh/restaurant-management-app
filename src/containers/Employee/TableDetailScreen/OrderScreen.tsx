/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import normalize from 'react-native-normalize';
import { useNavigation } from '@react-navigation/native';

import color from '@constants/Color';
import Food from '@components/Employee/OrderScreen/Food';

import {
  getSelectionListByTableId,
  createOrder,
  removeSelection,
} from '@api/index';

const OrderScreen = ({ tableId }: { tableId: string }) => {
  const navigation = useNavigation();
  const [orderList, setOrderList] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    getSelectionListByTableId(tableId, setOrderList, setTotal);
  }, []);

  const onPress = () => {
    orderList.forEach((order) => {
      const { foodId, foodName, url, price, quantity } = order.data;
      createOrder(tableId, foodId, foodName, price, quantity, url);
      removeSelection(order.id);
    });
    navigation.jumpTo('PaymentScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your choice</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.orderText}>Order now</Text>
        </TouchableOpacity>
      </View>
      <Text>{total}</Text>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {orderList.map((item, index) => (
          <Food {...item.data} key={index} selectionId={item.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    paddingHorizontal: normalize(16),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: normalize(10),
  },
  title: {
    fontFamily: 'Exo-Regular',
    fontSize: normalize(35),
    textAlign: 'left',
    // color: '#00bbff',
  },
  content: {
    paddingVertical: normalize(10),
  },
  orderText: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(16),
    color: color.MAIN_COLOR,
    textDecorationLine: 'underline',
  },
});
