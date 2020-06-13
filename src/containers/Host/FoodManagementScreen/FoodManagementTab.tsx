import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';
import { getFoodListByType } from '@api/index';
import normalize from 'react-native-normalize';
import { Spinner } from 'native-base';

import FoodItem from '@components/Host/FoodManagementScreen/FoodItem';

const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

export default function FoodManagementTab({ foodType }: { foodType: string }) {
  const { restaurantID } = useTypedSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    getFoodListByType(setIsLoading, setFoodList, restaurantID, foodType);
  }, [restaurantID, foodType]);

  const renderFoodList = () => {
    if (foodList.length === 0) {
      return (
        <View style={styles.nullContainer}>
          <Text style={styles.text}>There are no food of this type</Text>
        </View>
      );
    }
    return foodList.map((item, index) => (
      <FoodItem key={index} {...item.data} />
    ));
  };
  return (
    <View style={styles.container}>
      {isLoading ? <Spinner /> : renderFoodList()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
    padding: normalize(16),
  },
  nullContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(16),
  },
});
