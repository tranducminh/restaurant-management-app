import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import normalize from 'react-native-normalize';

import Image from '@common/Image';
import PrimaryButton from '@common/PrimaryButton';

import { setOrderStatusToReady, removeCookingOrder } from '@api/index';

export default function CookingFoodItem({
  orderID,
  cookingOrderID,
  url,
  foodName,
  quantity,
  tableName,
}: {
  orderID: string;
  cookingOrderID: string;
  url: string;
  foodName: string;
  quantity: number;
  tableName: string;
}) {
  const onPress = () => {
    setOrderStatusToReady(orderID);
    removeCookingOrder(cookingOrderID);
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image url={url} />
        <View style={styles.information}>
          <Text style={styles.name}>{foodName}</Text>
          <Text style={styles.text}>Quantity: {quantity}</Text>
          <Text style={styles.text}>Table: {tableName}</Text>
        </View>
      </View>
      <PrimaryButton text="Done" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: normalize(16),
    backgroundColor: '#f5f5f5',
    marginVertical: normalize(16),
  },
  content: {
    flexDirection: 'row',
    marginBottom: normalize(16),
  },
  information: {
    paddingLeft: normalize(16),
  },
  name: {
    fontFamily: 'Exo-Bold',
    fontSize: normalize(22),
    marginBottom: normalize(8),
  },
  text: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(16),
  },
});
