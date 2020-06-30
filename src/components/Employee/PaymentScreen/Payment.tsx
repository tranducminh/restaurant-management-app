import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';
import { getRestaurantInfo } from '@api/index';
import { restaurantType } from '@type/index';

const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const Payment = ({
  payment,
  onPurchase,
}: {
  payment: number;
  onPurchase: Function;
}) => {
  const { restaurantID } = useTypedSelector((state) => state.user);
  const [discount, setDiscount] = useState(0);
  useEffect(() => {
    const getRestaurant = async () => {
      let restaurant: restaurantType = await getRestaurantInfo(restaurantID);
      setDiscount(restaurant.discount);
    };
    getRestaurant();
  }, [restaurantID]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPurchase();
        }}>
        <Text style={styles.buttonText}>Purchase now</Text>
      </TouchableOpacity>
      <View style={styles.part}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.text}>$ {payment}</Text>
      </View>
      <View style={styles.part}>
        <Text style={styles.text}>Discount</Text>
        <Text style={styles.text}>{discount}%</Text>
      </View>
      <View style={styles.space} />
      <View style={styles.part}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.text}>$ {payment * (1 - discount / 100)}</Text>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: normalize(40),
    borderTopRightRadius: normalize(40),
    backgroundColor: '#fbf3f2',
    paddingHorizontal: normalize(30),
    paddingTop: normalize(40),
  },
  button: {
    position: 'absolute',
    backgroundColor: '#ebaaa4',
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(25),
    borderRadius: normalize(20),
    alignSelf: 'center',
    top: -normalize(20),
  },
  buttonText: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(15),
    color: '#b46c4c',
  },
  part: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: normalize(15),
  },
  text: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(16),
    color: '#bb817a',
  },
  space: {
    height: 0.5,
    backgroundColor: '#bb817a',
    marginBottom: normalize(15),
  },
});
