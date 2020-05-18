import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CustomTopTabNavigator from '@common/CustomTopTabNavigator';
import TableListScreen from './TableListScreen';

const Tab = createMaterialTopTabNavigator();

const TableManagementScreen = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator tabBar={props => <CustomTopTabNavigator {...props} />}>
        <Tab.Screen name="Floor 1" component={TableListScreen} />
        <Tab.Screen name="Floor 2" component={TableListScreen} />
        <Tab.Screen name="Floor 3" component={TableListScreen} />
        <Tab.Screen name="Floor 4" component={TableListScreen} />
        <Tab.Screen name="Floor 5" component={TableListScreen} />
        <Tab.Screen name="Floor 6" component={TableListScreen} />
        <Tab.Screen name="Floor 7" component={TableListScreen} />
        <Tab.Screen name="Floor 8" component={TableListScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default TableManagementScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
