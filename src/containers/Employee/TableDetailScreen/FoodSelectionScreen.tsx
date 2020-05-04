import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CustomTopTabNavigator from '@components/Employee/FoodSelectionScreen/CustomTopTabNavigator';
import FoodSelectionList from '@components/Employee/FoodSelectionScreen/FoodSelectionList';

const Tab = createMaterialTopTabNavigator();

const Test = () => {
  return <View />;
};
const FoodSelectionScreen = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator tabBar={props => <CustomTopTabNavigator {...props} />}>
        <Tab.Screen name="Appetizers" component={FoodSelectionList} />
        <Tab.Screen name="Main dishes" component={Test} />
        <Tab.Screen name="Desserts" component={Test} />
        <Tab.Screen name="Drinks" component={Test} />
        <Tab.Screen name="Fruits" component={Test} />
      </Tab.Navigator>
    </View>
  );
};

export default FoodSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
