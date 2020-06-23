import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';
import { orderType } from '@type/index';
import OrderItem from '@components/Chef/OrderScreen/OrderItem';
import normalize from 'react-native-normalize';

import { getUnCookedOrderList } from '@api/index';
const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const OrderScreen = () => {
  const { restaurantID } = useTypedSelector((state) => state.user);
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    getUnCookedOrderList(restaurantID, setOrderList);
  }, [restaurantID]);
  const renderOrderList = () => {
    if (orderList.length === 0) {
      return (
        <View style={styles.nullContainer}>
          <Text style={styles.text}>There are no orders available</Text>
          <Text style={styles.text}>Take a rest !!!</Text>
        </View>
      );
    }
    return (
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {orderList.map((item: orderType, index) => (
          <OrderItem key={index} {...item.data} orderID={item.id} />
        ))}
      </ScrollView>
    );
  };
  return <SafeAreaView>{renderOrderList()}</SafeAreaView>;
};

export default OrderScreen;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: normalize(16),
  },
  nullContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(18),
  },
});
