/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';
import normalize from 'react-native-normalize';

import { Toast } from 'native-base';
import TextInput from '@common/TextInput';
import PrimaryButton from '@common/PrimaryButton';
import { getRestaurantInfo, updateRestaurantInfo } from '@api/index';
import { restaurantType } from '@type/index';

const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const RestaurantManagementScreen = () => {
  const { restaurantID } = useTypedSelector((state) => state.user);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [discount, setDiscount] = useState('');
  useEffect(() => {
    const getRestaurant = async () => {
      let restaurant: restaurantType = await getRestaurantInfo(restaurantID);
      setName(restaurant.name);
      setAddress(restaurant.address);
      setDiscount(restaurant.discount.toString());
    };
    getRestaurant();
  }, [restaurantID]);
  const onUpdate = async () => {
    await updateRestaurantInfo(restaurantID, name, address, parseInt(discount));
    Toast.show({
      text: 'Restaurant info was updated',
      type: 'success',
      position: 'top',
      duration: 3000,
    });
  };
  return (
    <View style={styles.container}>
      <TextInput title="Restaurant name" value={name} onChangeText={setName} />
      <TextInput title="Address" value={address} onChangeText={setAddress} />
      <TextInput
        title="Discount %"
        value={discount}
        onChangeText={setDiscount}
        keyboardType="numeric"
      />
      <PrimaryButton text="Update" onPress={onUpdate} />
    </View>
  );
};

export default RestaurantManagementScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
    padding: normalize(16),
  },
});
