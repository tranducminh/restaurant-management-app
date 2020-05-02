import React from 'react';
import { YellowBox } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerNavigator from '../components/CustomDrawerNavigator';

import HomeScreen from '../containers/Employee/HomeScreen/HomeScreen';
import OrderScreen from '../containers/Employee/TableDetailScreen/OrderScreen';
import PaymentScreen from '../containers/Employee/TableDetailScreen/PaymentScreen';
import SignInScreen from '../containers/Employee/SignInScreen/SignInScreen';
import ProfileScreen from '../containers/Employee/ProfileScreen/ProfileScreen';
import FoodStatusScreen from '../containers/Employee/FoodStatusScreen/FoodStatusScreen';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const SignInStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const FoodStatusStack = createStackNavigator();
const EmployeeStack = createStackNavigator();

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
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

const SignInScreenStack = () => {
  return (
    <SignInStack.Navigator>
      <SignInStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
    </SignInStack.Navigator>
  );
};

const MainScreenStack = () => {
  YellowBox.ignoreWarnings(['Require cycle:']);
  //check authentication
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerNavigator {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreenStack} />
      <Drawer.Screen name="FoodStatus" component={FoodStatusScreenStack} />
      <Drawer.Screen name="Profile" component={ProfileScreenStack} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <EmployeeStack.Navigator>
      <EmployeeStack.Screen
        name="MainEmployee"
        component={MainScreenStack}
        options={{ headerShown: false }}
      />
      <EmployeeStack.Screen
        name="SignInEmployee"
        component={SignInScreenStack}
        options={{ headerShown: false }}
      />
    </EmployeeStack.Navigator>
  );
};

export default App;
