import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';
import normalize from 'react-native-normalize';

import FoodStatusItem from './FoodStatusItem';
import { getReadyOrderList } from '@api/index';

const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const FoodStatusList = ({ isReady }: { isReady: boolean }) => {
  const [orderList, setOrderList] = useState([]);
  const { restaurantID } = useTypedSelector((state) => state.user);

  useEffect(() => {
    getReadyOrderList(restaurantID, setOrderList);
  }, [restaurantID]);

  const renderOrderList = () => {
    if (orderList.length === 0) {
      return (
        <View style={styles.nullContainer}>
          <Text style={styles.text}>There are no ready food</Text>
        </View>
      );
    }
    return (
      <ScrollView>
        {orderList.map((item, index) => (
          <FoodStatusItem
            key={index}
            isReady={isReady}
            {...item.data}
            orderID={item.id}
          />
        ))}
      </ScrollView>
    );
  };
  return <View>{renderOrderList()}</View>;
};

export default FoodStatusList;

const styles = StyleSheet.create({
  nullContainer: {
    height: '100%',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(16),
  },
});
