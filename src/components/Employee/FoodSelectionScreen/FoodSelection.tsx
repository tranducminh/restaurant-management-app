import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import normalize from 'react-native-normalize';
import Image from '@common/Image';

import AddIcon from '@common/AddIcon';

import { chooseFood } from '@api/index';

const FoodSelection = ({
  foodId,
  tableId,
  url,
  foodName,
  description,
  price,
}: {
  foodId: string;
  tableId: string;
  url: string;
  foodName: string;
  description: string;
  price: number;
}) => {
  const onPress = () => {
    chooseFood(tableId, foodId, url, foodName, price);
  };
  return (
    <View style={styles.container}>
      <Image url={url} style={styles.image} />
      <Text style={styles.name}>{foodName}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>$ {price}</Text>
      <View style={styles.button}>
        <AddIcon size={30} onPress={onPress} />
      </View>
    </View>
  );
};

export default FoodSelection;

const styles = StyleSheet.create({
  container: {
    marginVertical: normalize(20),
    backgroundColor: '#f5f5f5',
    // backgroundColor: color.MAIN_COLOR,
    width: normalize(160),
    paddingTop: normalize(25),
    paddingBottom: normalize(20),
    paddingHorizontal: normalize(20),
    borderRadius: normalize(20),
    marginLeft: normalize(10),
  },
  image: {
    width: normalize(100),
    height: normalize(100),
    borderRadius: normalize(50),
    alignSelf: 'center',
  },
  name: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(18),
    color: '#090807',
    marginTop: normalize(10),
  },
  price: {
    paddingTop: normalize(10),
    fontSize: normalize(19),
    color: '#090807',
  },
  button: {
    alignSelf: 'flex-end',
  },
  description: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(14),
    color: '#a9a8a7',
  },
});
