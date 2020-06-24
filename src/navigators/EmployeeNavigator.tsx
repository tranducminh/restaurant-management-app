import React from 'react';
import { YellowBox } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerNavigator from '../common/CustomDrawerNavigator';

import HomeScreen from '../containers/Employee/HomeScreen/HomeScreen';
import TableDetailScreen from '../containers/Employee/TableDetailScreen/TableDetailScreen';
import ProfileScreen from '../containers/ProfileScreen/ProfileScreen';
import EditProfileScreen from '../containers/ProfileScreen/EditProfileScreen';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

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
      <ProfileStack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
};

const App = () => {
  YellowBox.ignoreWarnings(['Require cycle:']);
  //check authentication
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props: any) => (
        <CustomDrawerNavigator {...props} jobPosition="Employee" />
      )}>
      <Drawer.Screen name="Home" component={HomeScreenStack} />
      <Drawer.Screen name="Profile" component={ProfileScreenStack} />
    </Drawer.Navigator>
  );
};

export default App;
