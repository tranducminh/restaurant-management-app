import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

import FoodItem from '@components/Chef/OrderScreen/FoodItem';
import normalize from 'react-native-normalize';
const OrderScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: normalize(16),
  },
});
