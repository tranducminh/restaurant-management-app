import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';
import normalize from 'react-native-normalize';
import { useNavigation } from '@react-navigation/native';

import CookingFoodItem from '@components/Chef/CookingFoodScreen/CookingFoodItem';

import { getCookingOrderListByChefID } from '@api/index';

const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const CookingFoodScreen = () => {
  const { uid } = useTypedSelector((state) => state.user);
  const [orderList, setOrderList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getCookingOrderListByChefID(uid, setOrderList);
  }, [uid]);

  const renderOrderList = () => {
    if (orderList.length === 0) {
      return (
        <View style={styles.nullContainer}>
          <Text style={styles.text}>There are no orders available</Text>
          <TouchableOpacity onPress={() => navigation.jumpTo('Orders')}>
            <Text style={styles.buttonText}>Choose order now</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {orderList.map((item, index) => (
          <CookingFoodItem
            key={index}
            {...item.data}
            cookingOrderID={item.id}
          />
        ))}
      </ScrollView>
    );
  };
  return <View style={styles.container}>{renderOrderList()}</View>;
};

export default CookingFoodScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
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
    fontSize: normalize(19),
  },
  buttonText: {
    textDecorationLine: 'underline',
    fontSize: normalize(15),
    color: '#2c9ced',
  },
});
