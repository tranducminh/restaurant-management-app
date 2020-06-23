import React from 'react';
import { StyleSheet, Platform, View, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import normalize from 'react-native-normalize';

import HeaderComponent from '@common/HeaderComponent';
import TableOrderScreen from './TableOrderScreen';
import FoodStatusScreen from '../FoodStatusScreen/FoodStatusScreen';

const selectionHomeIcon = require('@assets/navigatorIcons/selectedHome.png');
const home = require('@assets/navigatorIcons/home.png');
const selectionFoodStatusIcon = require('@assets/navigatorIcons/selectedFoodStatus.png');
const foodStatusIcon = require('@assets/navigatorIcons/foodStatus.png');
const Tab = createMaterialBottomTabNavigator();

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <Tab.Navigator barStyle={styles.tabBar} labeled={false}>
        <Tab.Screen
          name="Home"
          component={TableOrderScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? selectionHomeIcon : home}
                style={styles.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="FoodStatus"
          component={FoodStatusScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? selectionFoodStatusIcon : foodStatusIcon}
                style={styles.icon}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight()
        : getStatusBarHeight(true) + normalize(8),
    backgroundColor: '#ffffff',
  },
  tabBar: {
    backgroundColor: '#ffffff',
    borderTopWidth: 0.5,
    borderColor: '#ababab',
    height: normalize(70),
  },
  icon: {
    width: normalize(25),
    height: normalize(25),
  },
});
