import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import OrderScreen from './OrderScreen';
import CookingFoodScreen from './CookingFoodScreen';

const Tab = createMaterialBottomTabNavigator();
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator barStyle={styles.tabBar}>
        <Tab.Screen name="Orders" component={OrderScreen} />
        <Tab.Screen name="Cooking food" component={CookingFoodScreen} />
      </Tab.Navigator>
      <Text />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#ffffff',
    borderTopWidth: 0.5,
    borderColor: '#ababab',
  },
});
