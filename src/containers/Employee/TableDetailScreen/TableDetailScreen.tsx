import React from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import normalize from 'react-native-normalize';

import SelectionScreen from './SelectionScreen';
import PaymentScreen from './PaymentScreen';
import FoodSelectionScreen from './FoodSelectionScreen';
import Header from '@components/Employee/TableDetailScreen/Header';

const foodIcon = require('@assets/navigatorIcons/menu.png');
const selectedFoodIcon = require('@assets/navigatorIcons/selectedMenu.png');
const orderIcon = require('@assets/navigatorIcons/confirm.png');
const selectedOrderIcon = require('@assets/navigatorIcons/selectedConfirm.png');
const paymentIcon = require('@assets/navigatorIcons/payment.png');
const selectedPaymentIcon = require('@assets/navigatorIcons/selectedPayment.png');

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
              <Image
                source={focused ? selectedFoodIcon : foodIcon}
                style={styles.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="SelectionScreen"
          component={renderSelectionScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? selectedOrderIcon : orderIcon}
                style={styles.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="PaymentScreen"
          component={renderPayment}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? selectedPaymentIcon : paymentIcon}
                style={styles.icon}
              />
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
    height: normalize(70),
  },
  icon: {
    width: normalize(25),
    height: normalize(25),
  },
});
