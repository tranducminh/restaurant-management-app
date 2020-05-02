import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CustomTopTabNavigator from '@components/Employee/HomeScreen/CustomTopTabNavigator';
import TableScreen from './TableScreen';
import HeaderComponent from '@components/Employee/HomeScreen/HeaderComponent';

const Tab = createMaterialTopTabNavigator();

const Test = () => {
  return <View />;
};
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <HeaderComponent />
      <Tab.Navigator tabBar={props => <CustomTopTabNavigator {...props} />}>
        <Tab.Screen name="Floor 1" component={TableScreen} />
        <Tab.Screen name="Floor 2" component={Test} />
        <Tab.Screen name="Floor 3" component={Test} />
        <Tab.Screen name="Floor 4" component={Test} />
        <Tab.Screen name="Floor 5" component={Test} />
        <Tab.Screen name="Floor 6" component={Test} />
        <Tab.Screen name="Floor 7" component={Test} />
        <Tab.Screen name="Floor 8" component={Test} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
