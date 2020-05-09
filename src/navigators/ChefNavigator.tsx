import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerNavigator from '@common/CustomDrawerNavigator';
import HomeScreen from '@containers/Chef/HomeScreen/HomeScreen';
import ProfileScreen from '@containers/Chef/ProfileScreen/ProfileScreen';

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

const App = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <CustomDrawerNavigator {...props} jobPosition="Chef" />
      )}>
      <Drawer.Screen name="Home" component={HomeScreenStack} />
      <Drawer.Screen name="Profile" component={ProfileScreenStack} />
    </Drawer.Navigator>
  );
};

export default App;