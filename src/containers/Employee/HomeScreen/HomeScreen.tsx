import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Test = () => {
  return <View />;
};
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Floor 1" component={Test} />
        <Tab.Screen name="Floor 2" component={Test} />
        <Tab.Screen name="Floor 3" component={Test} />
        <Tab.Screen name="Floor 4" component={Test} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
