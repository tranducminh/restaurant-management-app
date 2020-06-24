/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import normalize from 'react-native-normalize';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';
import { foodType as dataType } from '@type/index';

import FoodSelection from './FoodSelection';
import { Spinner } from 'native-base';

import { getFoodListByType } from '@api/index';
import EmptyIcon from '@common/EmptyIcon';

const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const FoodSelectionList = ({ foodType, tableId, tableName }: { foodType: string; tableId: string, tableName: string }) => {
  const { restaurantID } = useTypedSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    getFoodListByType(setIsLoading, setFoodList, restaurantID, foodType);
  }, [restaurantID, foodType]);

  const renderFoodList = () => {
    if (foodList.length === 0) {
      return <View style={styles.nullContainer}>
        <EmptyIcon />
        <Text style={styles.text}>There are no food of this type</Text>
      </View>;
    }
    return <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        {foodList.map((item: dataType, index) => (
          <FoodSelection key={index} {...item.data} foodId={item.id} tableId={tableId} tableName={tableName} />
        ))}
      </View>
    </ScrollView>;
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Spinner />
      ) : (
          renderFoodList()
        )}
    </View>

  );
};

export default FoodSelectionList;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  content: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(20),
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
