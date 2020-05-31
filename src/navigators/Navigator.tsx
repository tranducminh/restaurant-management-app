/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
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

import actions from '@actions/index';
import { getUserInfo } from '../api';

const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const App = createStackNavigator();

const Navigator = () => {
  const dispatch = useDispatch();
  const navigator = useTypedSelector((state) => state.navigator.navigator);

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [position, setPosition] = useState('');

  async function onAuthStateChanged(user) {
    setUser(user);
    if (user.uid !== null) {
      const _user = await getUserInfo(user.uid);
      setPosition(_user.position);
      dispatch(
        actions.getUserInfo({
          uid: user.uid,
          position: _user.position,
          restaurantID: _user.restaurantID,
        }),
      );
    }
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [onAuthStateChanged]);

  if (initializing) {
    return <Text>Something went wrong</Text>;
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
  switch (position) {
    case 'HOST':
      return (
        <NavigationContainer>
          <App.Navigator>
            <App.Screen
              name="HostNavigator"
              component={HostNavigator}
              options={{ headerShown: false }}
            />
          </App.Navigator>
        </NavigationContainer>
      );
    case 'CHEF':
      return (
        <NavigationContainer>
          <App.Navigator>
            <App.Screen
              name="ChefNavigator"
              component={ChefNavigator}
              options={{ headerShown: false }}
            />
          </App.Navigator>
        </NavigationContainer>
      );
    case 'EMPLOYEE':
      return (
        <NavigationContainer>
          <App.Navigator>
            <App.Screen
              name="EmployeeNavigator"
              component={EmployeeNavigator}
              options={{ headerShown: false }}
            />
          </App.Navigator>
        </NavigationContainer>
      );
    default:
      return <Text>position null</Text>;
  }
};

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
