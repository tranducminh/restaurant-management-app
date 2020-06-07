/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Image from '@common/Image';

const FoodItem = ({
  url,
  foodName,
  description,
  price,
}: {
  url: string;
  foodName: string;
  description: string;
  price: number;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View style={styles.container}>
      <Image url={url} />
      <Text>{foodName}</Text>
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 0,
    height: 0,
  },
});
