import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';
import { useNavigation } from '@react-navigation/native';

import Image from '@common/Image';
import color from '@constants/Color';

import { setOrderStatusToCooking, createCookingOrder } from '@api/index';
const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const FoodItem = ({
  orderID,
  url,
  foodName,
  tableName,
  quantity,
}: {
  orderID: string;
  url: string;
  foodName: string;
  tableName: string;
  quantity: number;
}) => {
  const { uid } = useTypedSelector((state) => state.user);
  const navigation = useNavigation();

  const onPress = () => {
    setOrderStatusToCooking(orderID);
    createCookingOrder(orderID, uid, url, foodName, quantity, tableName);
    navigation.jumpTo('CookingFood');
  };
  return (
    <View style={styles.container}>
      <Image url={url} style={styles.image} />
      <View>
        <Text style={styles.name} numberOfLines={2}>
          {foodName}
        </Text>
        <Text style={styles.quantity}>x {quantity}</Text>
      </View>
      <Text style={styles.table}>Table {tableName}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}>Cook now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9ecee',
    borderRadius: normalize(20),
    padding: normalize(16),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(10),
  },
  content: {
    justifyContent: 'space-between',
    paddingLeft: normalize(16),
  },
  image: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: normalize(10),
  },
  name: {
    fontSize: normalize(18),
    fontFamily: 'Exo-Medium',
    paddingLeft: normalize(16),
    width: normalize(120),
  },
  quantity: {
    fontSize: normalize(14.5),
    fontFamily: 'Exo-Medium',
    paddingLeft: normalize(18),
    width: normalize(120),
  },
  table: {
    fontSize: normalize(14.5),
    fontFamily: 'Exo-Medium',
    paddingLeft: normalize(16),
    width: normalize(90),
  },
  button: {
    color: color.MAIN_COLOR,
    fontFamily: 'Exo-Bold',
    fontSize: normalize(14),
    textDecorationLine: 'underline',
  },
  cookingText: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(14),
    color: '#dea300',
  },
});
