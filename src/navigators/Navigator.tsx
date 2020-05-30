/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '../reducers';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import HostNavigator from './HostNavigator';
import ChefNavigator from './ChefNavigator';
import EmployeeNavigator from './EmployeeNavigator';
import StartScreen from '../containers/StartScreen';
import LoginScreen from '../containers/LoginScreen';
import SignupScreen from '../containers/SignupScreen';

const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const App = createStackNavigator();

const Navigator = () => {
  const navigator = useTypedSelector(state => state.navigator.navigator);
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

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [onAuthStateChanged]);

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <NavigationContainer>
        <App.Navigator>
          <App.Screen
            name="StartScreen"
            component={StartScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <App.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <App.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
        </App.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <App.Navigator>
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
