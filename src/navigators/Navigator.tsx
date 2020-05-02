import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '../reducers';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HostNavigator from './HostNavigator';
import ChefNavigator from './ChefNavigator';
import EmployeeNavigator from './EmployeeNavigator';
import StartScreen from '../containers/StartScreen/StartScreen';

const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const App = createStackNavigator();

const Navigator = () => {
  const navigator = useTypedSelector(state => state.navigator.navigator);
  console.log(navigator);
  const renderScreen = () => {
    if (navigator === 'StartScreen') {
      return <StartScreen />;
    }
    if (navigator === 'HostNavigator') {
      return <HostNavigator />;
    }
    if (navigator === 'ChefNavigator') {
      return <ChefNavigator />;
    }
    // if (navigator === 'EmployeeNavigator') {
    //   return <EmployeeNavigator />;
    // }
  };
  return (
    <NavigationContainer>
      <App.Navigator>
        <App.Screen
          name="StartScreen"
          component={StartScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <App.Screen
          name="HostNavigator"
          component={HostNavigator}
          options={{ headerShown: false }}
        />
        <App.Screen
          name="EmployeeNavigator"
          component={EmployeeNavigator}
          options={{ headerShown: false }}
        />
        <App.Screen
          name="ChefNavigator"
          component={ChefNavigator}
          options={{ headerShown: false }}
        />
      </App.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
