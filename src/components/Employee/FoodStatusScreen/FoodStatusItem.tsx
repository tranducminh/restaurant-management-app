import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';
import Image from '@common/Image';
import color from '@constants/Color';

import { setOrderStatusToServed } from '@api/index';
const FoodStatusItem = ({
  foodName,
  tableName,
  orderID,
  url,
}: {
  foodName: string;
  tableName: string;
  orderID: string;
  url: string;
}) => {
  const onPress = () => {
    setOrderStatusToServed(orderID);
  };
  return (
    <View style={styles.container}>
      <Image url={url} style={styles.image} />
      <Text style={styles.name} numberOfLines={2}>
        {foodName}
      </Text>
      <Text style={styles.table}>Table {tableName}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}>Serve now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FoodStatusItem;

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
    fontSize: normalize(14.5),
    fontFamily: 'Exo-Medium',
    paddingLeft: normalize(16),
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
