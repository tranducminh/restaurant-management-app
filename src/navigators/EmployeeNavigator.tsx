import React from 'react';
import { YellowBox } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerNavigator from '../common/CustomDrawerNavigator';

import HomeScreen from '../containers/Employee/HomeScreen/HomeScreen';
import TableDetailScreen from '../containers/Employee/TableDetailScreen/TableDetailScreen';
import ProfileScreen from '../containers/Employee/ProfileScreen/ProfileScreen';
import FoodStatusScreen from '../containers/Employee/FoodStatusScreen/FoodStatusScreen';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const FoodStatusStack = createStackNavigator();

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="TableDetailScreen"
        component={TableDetailScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

const ProfileScreenStack = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
};

const FoodStatusScreenStack = () => {
  return (
    <FoodStatusStack.Navigator>
      <FoodStatusStack.Screen
        name="FoodStatusScreen"
        component={FoodStatusScreen}
        options={{ headerShown: false }}
      />
    </FoodStatusStack.Navigator>
  );
};

const App = () => {
  YellowBox.ignoreWarnings(['Require cycle:']);
  //check authentication
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => (
        <CustomDrawerNavigator {...props} jobPosition="Employee" />
      )}>
      <Drawer.Screen name="Home" component={HomeScreenStack} />
      <Drawer.Screen name="FoodStatus" component={FoodStatusScreenStack} />
      <Drawer.Screen name="Profile" component={ProfileScreenStack} />
    </Drawer.Navigator>
  );
};

export default App;
