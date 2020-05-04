import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import normalize from 'react-native-normalize';

const foodImage = require('@assets/food.jpg');

const FoodSelection = () => {
  return (
    <View style={styles.container}>
      <Image source={foodImage} style={styles.image} />
      <Text style={styles.name}>Chicken grill</Text>
      <Text style={styles.price}>$ 35</Text>
    </View>
  );
};

export default FoodSelection;

const styles = StyleSheet.create({
  container: {
    marginVertical: normalize(30),
    backgroundColor: '#ffefeb',
    // backgroundColor: color.MAIN_COLOR,
    width: normalize(140),
    paddingTop: normalize(25),
    paddingBottom: normalize(20),
    paddingHorizontal: normalize(20),
    borderRadius: normalize(30),
  },
  image: {
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(30),
    position: 'absolute',
    top: -normalize(30),
    right: 0,
  },
  name: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(15),
    color: '#5d3e31',
  },
  price: {
    fontFamily: 'Exo-Medium',
    paddingTop: normalize(10),
    fontSize: normalize(15),
    color: '#666666',
  },
});
