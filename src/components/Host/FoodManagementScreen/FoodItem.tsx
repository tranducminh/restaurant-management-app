/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import normalize from 'react-native-normalize';
import DeleteIcon from '@common/DeleteIcon';
import Image from '@common/Image';

import { removeFood } from '@api/index';

const FoodItem = ({
  id,
  url,
  foodName,
  description,
  price,
}: {
  id: string;
  url: string;
  foodName: string;
  description: string;
  price: number;
}) => {
  const deleteFood = () => {
    removeFood(id);
  };
  return (
    <View style={styles.container}>
      <View style={styles.left_container}>
        <View style={styles.left}>
          <Image url={url} style={styles.image} />
          <View style={styles.content}>
            <Text numberOfLines={1} style={styles.name}>{foodName}</Text>
            <Text numberOfLines={1} style={styles.description}>{description}</Text>
          </View>
        </View>
        <Text style={styles.price}>$ {price}</Text>
      </View>
      <DeleteIcon onDelete={deleteFood} />
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: normalize(16),
  },
  image: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(10),
  },
  left_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '70%',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: normalize(10),
    width: normalize(210),
  },
  name: {
    fontFamily: 'Exo-Bold',
    fontSize: normalize(18),
  },
  description: {
    color: '#707070',
    fontFamily: 'Exo-Medium',
    fontSize: normalize(14),
  },
  price: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(16),
  },
});
