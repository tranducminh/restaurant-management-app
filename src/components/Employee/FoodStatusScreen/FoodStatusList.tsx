import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FoodStatusItem from './FoodStatusItem';

const FoodStatusList = ({ isReady }: { isReady: boolean }) => {
  return (
    <View>
      <FoodStatusItem isReady={isReady} />
      <FoodStatusItem isReady={isReady} />
      <FoodStatusItem isReady={isReady} />
      <FoodStatusItem isReady={isReady} />
      <FoodStatusItem isReady={isReady} />
      <FoodStatusItem isReady={isReady} />
    </View>
  );
};

export default FoodStatusList;

const styles = StyleSheet.create({});
