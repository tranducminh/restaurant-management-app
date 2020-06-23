import React from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import normalize from 'react-native-normalize';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import HeaderComponent from '@common/HeaderComponent';
import TableManagementScreen from '../TableManagementScreen/TableManagementScreen';
import FoodManagementScreen from '../FoodManagementScreen/FoodManagementScreen';
import EmployeeManagementScreen from '../EmployeeManagementScreen/EmployeeManagementScreen';
import RestaurantManagementScreen from './RestaurantManagementScreen';

const Tab = createMaterialBottomTabNavigator();

const tableIcon = require('@assets/navigatorIcons/table.png');
const selectionTableIcon = require('@assets/navigatorIcons/selectedTable.png');
const foodIcon = require('@assets/navigatorIcons/menu.png');
const selectionFoodIcon = require('@assets/navigatorIcons/selectedMenu.png');
const restaurantIcon = require('@assets/navigatorIcons/store.png');
const selectionRestaurantIcon = require('@assets/navigatorIcons/selectedStore.png');
const employeeIcon = require('@assets/navigatorIcons/employee.png');
const selectionEmployeeIcon = require('@assets/navigatorIcons/selectedEmployee.png');

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <Tab.Navigator barStyle={styles.tabBar} labeled={false}>
        <Tab.Screen
          name="Table"
          component={TableManagementScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? selectionTableIcon : tableIcon}
                style={styles.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Food"
          component={FoodManagementScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? selectionFoodIcon : foodIcon}
                style={styles.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Employee"
          component={EmployeeManagementScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? selectionEmployeeIcon : employeeIcon}
                style={styles.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Restaurant"
          component={RestaurantManagementScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? selectionRestaurantIcon : restaurantIcon}
                style={styles.icon}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <Text />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
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
    height: normalize(70),
  },
  icon: {
    width: normalize(25),
    height: normalize(25),
  },
});
