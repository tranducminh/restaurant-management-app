import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import normalize from 'react-native-normalize';

import QuantityEdition from '@common/QuantityEdition';

const food = require('@assets/food.jpg');

const Food = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={food} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.name}>Chicken grill</Text>
          <Text style={styles.price}>$ 35</Text>
        </View>
      </View>
      <QuantityEdition size={18} />
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: normalize(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  main: {
    flexDirection: 'row',
  },
  content: {
    paddingHorizontal: normalize(16),
  },
  image: {
    width: normalize(70),
    height: normalize(70),
    borderRadius: normalize(10),
  },
  price: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(14),
    paddingTop: normalize(5),
  },
  name: {
    fontFamily: 'Exo-Bold',
    fontSize: normalize(16),
    color: '#584538',
  },
});
