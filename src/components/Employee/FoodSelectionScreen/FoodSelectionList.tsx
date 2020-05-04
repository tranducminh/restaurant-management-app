import React from 'react';
import { StyleSheet, View } from 'react-native';
import normalize from 'react-native-normalize';

import FoodSelection from './FoodSelection';

const FoodSelectionList = () => {
  return (
    <View style={styles.container}>
      <FoodSelection />
      <FoodSelection />
      <FoodSelection />
      <FoodSelection />
      <FoodSelection />
    </View>
  );
};

export default FoodSelectionList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(20),
  },
});
