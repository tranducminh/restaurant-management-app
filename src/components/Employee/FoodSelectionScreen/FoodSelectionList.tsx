/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import normalize from 'react-native-normalize';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';

import FoodSelection from './FoodSelection';
import { Spinner } from 'native-base';

import { getFoodListByType } from '@api/index';

const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const FoodSelectionList = ({ foodType, tableId }: { foodType: string; tableId: string }) => {
  const { restaurantID } = useTypedSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    getFoodListByType(setIsLoading, setFoodList, restaurantID, foodType);
  }, []);
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {isLoading ? (
          <Spinner />
        ) : (
            foodList.map((item, index) => (
              <FoodSelection key={index} {...item.data} foodId={item.id} tableId={tableId} />
            ))
          )}
      </View>
    </ScrollView>
  );
};

export default FoodSelectionList;

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
  },
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(20),
  },
});
