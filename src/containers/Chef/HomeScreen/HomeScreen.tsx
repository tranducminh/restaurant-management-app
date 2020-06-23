import React from 'react';
import { StyleSheet, View, Platform, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import OrderScreen from './OrderScreen';
import CookingFoodScreen from './CookingFoodScreen';
import HeaderComponent from '@common/HeaderComponent';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import normalize from 'react-native-normalize';

const order = require('@assets/navigatorIcons/order.png');
const selectedOrder = require('@assets/navigatorIcons/selectedOrder.png');
const cookingFood = require('@assets/navigatorIcons/chef.png');
const selectedCookingFood = require('@assets/navigatorIcons/selectedChef.png');
const Tab = createMaterialBottomTabNavigator();
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <Tab.Navigator barStyle={styles.tabBar} labeled={false}>
        <Tab.Screen
          name="Orders"
          component={OrderScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? selectedOrder : order}
                style={styles.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="CookingFood"
          component={CookingFoodScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? selectedCookingFood : cookingFood}
                style={styles.icon}
              />
            ),
          }}
        />
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
    paddingTop: normalize(5),
    height: normalize(70),
  },
  icon: {
    width: normalize(25),
    height: normalize(25),
  },
});
