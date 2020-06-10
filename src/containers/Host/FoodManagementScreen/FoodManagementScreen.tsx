import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import normalize from 'react-native-normalize';
import { useNavigation } from '@react-navigation/native';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';

import AddIcon from '@common/AddIcon';
import FoodItem from '@components/Host/FoodManagementScreen/FoodItem';

import { getFoodListByType } from '@api/index';

const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const FoodManagementScreen = () => {
  const navigation = useNavigation();
  const { restaurantID } = useTypedSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    getFoodListByType(setIsLoading, setFoodList, restaurantID, 'MainDishes');
  }, []);

  const renderFoodList = () => {
    if (foodList.length === 0) {
      return <NullScreen />;
    }
    return (
      <View>
        {foodList.map((item, index) => (
          <FoodItem {...item.data} />
        ))}
        <AddIcon onPress={() => navigation.navigate('AddFoodScreen')} />
      </View>
    );
  };

  return (
    <View style={styles.container}>{isLoading ? null : renderFoodList()}</View>
  );
};

const NullScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nullScreen}>
      <Text style={styles.text}>You haven't create any food yet</Text>
      <AddIcon onPress={() => navigation.navigate('AddFoodScreen')} />
    </View>
  );
};

export default FoodManagementScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal: normalize(16),
  },
  nullScreen: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(16),
    paddingVertical: normalize(20),
  },
});
