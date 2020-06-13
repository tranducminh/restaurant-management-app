import React from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import normalize from 'react-native-normalize';

import SelectionScreen from './SelectionScreen';
import PaymentScreen from './PaymentScreen';
import FoodSelectionScreen from './FoodSelectionScreen';
import Header from '@components/Employee/TableDetailScreen/Header';

const foodIcon = require('@assets/food.png');
const selectedFoodIcon = require('@assets/selectionFood.png');
const orderIcon = require('@assets/order.png');
const selectedOrderIcon = require('@assets/selectionOrder.png');
const paymentIcon = require('@assets/payment.png');
const selectedPaymentIcon = require('@assets/selectionPayment.png');

const Tab = createMaterialBottomTabNavigator();

const TableDetailScreen = ({ route }: { route: any }) => {
  const { tableId, tableName } = route.params;
  const renderFoodSelectionScreen = () => (
    <FoodSelectionScreen tableId={tableId} tableName={tableName} />
  );
  const renderSelectionScreen = () => (
    <SelectionScreen tableId={tableId} tableName={tableName} />
  );
  const renderPayment = () => <PaymentScreen tableId={tableId} />;
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" />
      <Header tableName={tableName} />
      <Tab.Navigator labeled={false} barStyle={styles.tabBar}>
        <Tab.Screen
          name="FoodSelectionScreen"
          component={renderFoodSelectionScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.activeTab : styles.normalTab}>
                <Image
                  source={focused ? selectedFoodIcon : foodIcon}
                  style={styles.icon}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="SelectionScreen"
          component={renderSelectionScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.activeTab : styles.normalTab}>
                <Image
                  source={focused ? selectedOrderIcon : orderIcon}
                  style={styles.icon}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="PaymentScreen"
          component={renderPayment}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.activeTab : styles.normalTab}>
                <Image
                  source={focused ? selectedPaymentIcon : paymentIcon}
                  style={styles.icon}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TableDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#ffffff',
    borderTopWidth: 0.5,
    borderColor: '#ababab',
  },
  normalTab: {
    // paddingVertical: normalize(10),
  },
  activeTab: {
    height: '100%',
    paddingHorizontal: normalize(20),
  },
  icon: {
    width: normalize(25),
    height: normalize(25),
  },
});
