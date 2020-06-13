import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import OrderScreen from './OrderScreen';
import CookingFoodScreen from './CookingFoodScreen';
import HeaderComponent from '@common/HeaderComponent';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import normalize from 'react-native-normalize';

const Tab = createMaterialBottomTabNavigator();
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <Tab.Navigator barStyle={styles.tabBar}>
        <Tab.Screen name="Orders" component={OrderScreen} />
        <Tab.Screen name="CookingFood" component={CookingFoodScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight()
        : getStatusBarHeight(true) + normalize(8),
  },
  tabBar: {
    backgroundColor: '#ffffff',
    borderTopWidth: 0.5,
    borderColor: '#ababab',
  },
});
