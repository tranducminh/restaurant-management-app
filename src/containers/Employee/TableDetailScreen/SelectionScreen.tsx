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
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';
import { orderType } from '@type/index';

import color from '@constants/Color';
import Food from '@components/Employee/OrderScreen/Food';
const backIcon = require('@assets/Icons/back.png');
import {
  getSelectionListByTableId,
  createOrder,
  removeSelection,
} from '@api/index';
const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const OrderScreen = ({
  tableId,
  tableName,
}: {
  tableId: string;
  tableName: string;
}) => {
  const navigation: any = useNavigation();
  const [orderList, setOrderList] = useState([]);
  const [total, setTotal] = useState(0);
  const { restaurantID } = useTypedSelector((state) => state.user);

  useEffect(() => {
    getSelectionListByTableId(tableId, setOrderList, setTotal);
  }, []);

  const onPress = () => {
    orderList.forEach((order: orderType) => {
      const { foodId, foodName, url, price, quantity } = order.data;
      createOrder(
        restaurantID,
        tableId,
        tableName,
        foodId,
        foodName,
        price,
        quantity,
        url,
      );
      removeSelection(order.id);
    });
    navigation.jumpTo('PaymentScreen');
  };

  const renderOrderList = () => {
    if (orderList.length === 0) {
      return (
        <View style={styles.nullContainer}>
          <Text style={styles.text}>You haven't choose any food yet</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.jumpTo('FoodSelectionScreen')}>
            <Image source={backIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {orderList.map((item: orderType, index) => (
          <Food {...item.data} key={index} selectionId={item.id} />
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your choice</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.orderText}>Order now</Text>
        </TouchableOpacity>
      </View>
      {renderOrderList()}
      <View style={styles.price}>
        <Text style={styles.priceText}>Total: </Text>
        <Text style={styles.priceText}>{total}</Text>
      </View>
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
  },
  nullContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(16),
  },
  title: {
    fontFamily: 'Exo-Regular',
    fontSize: normalize(35),
    textAlign: 'left',
  },
  content: {
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(16),
  },
  orderText: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(16),
    color: color.MAIN_COLOR,
    textDecorationLine: 'underline',
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
    paddingTop: normalize(20),
    paddingBottom: normalize(10),
    backgroundColor: '#fbf3f2',
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(30),
  },
  priceText: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(18),
    color: '#bb817a',
  },
  button: {
    width: normalize(30),
    height: normalize(30),
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
