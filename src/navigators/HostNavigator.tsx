import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerNavigator from '@common/CustomDrawerNavigator';
import HomeScreen from '@containers/Host/HomeScreen/HomeScreen';
import AddTableScreen from '@containers/Host/TableManagementScreen/AddTableScreen';
import AddFloorScreen from '@containers/Host/TableManagementScreen/AddFloorScreen';
import ProfileScreen from '@containers/ProfileScreen/ProfileScreen';
import AddFoodScreen from '@containers/Host/FoodManagementScreen/AddFoodScreen';
import AddEmployeeScreen from '@containers/Host/EmployeeManagementScreen/AddEmployeeScreen';

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
        name="AddTableScreen"
        component={AddTableScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="AddFloorScreen"
        component={AddFloorScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="AddFoodScreen"
        component={AddFoodScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="AddEmployeeScreen"
        component={AddEmployeeScreen}
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
      drawerContent={(props) => (
        <CustomDrawerNavigator {...props} jobPosition="Host" />
      )}>
      <Drawer.Screen name="Home" component={HomeScreenStack} />
      <Drawer.Screen name="Profile" component={ProfileScreenStack} />
    </Drawer.Navigator>
  );
};

export default App;
