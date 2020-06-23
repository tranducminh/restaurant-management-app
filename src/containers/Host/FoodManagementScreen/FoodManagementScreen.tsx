import React from 'react';
import { StyleSheet, View } from 'react-native';
import normalize from 'react-native-normalize';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomTopTabNavigator from '@components/Employee/FoodSelectionScreen/CustomTopTabNavigator';

import AddIcon from '@common/AddIcon';
import FoodManagementTab from './FoodManagementTab';

const Tab = createMaterialTopTabNavigator();
const foodType = ['Appetizers', 'MainDishes', 'Desserts', 'Drinks', 'Fruits'];

const FoodManagementScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Tab.Navigator tabBar={(props) => <CustomTopTabNavigator {...props} />}>
        {foodType.map((item, index) => {
          const renderFoodSelectionList = () => (
            <FoodManagementTab foodType={item} />
          );
          return (
            <Tab.Screen
              key={index}
              name={item}
              component={renderFoodSelectionList}
            />
          );
        })}
      </Tab.Navigator>

      <View style={styles.button}>
        <AddIcon onPress={() => navigation.navigate('AddFoodScreen')} />
      </View>
    </View>
  );
};

export default FoodManagementScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
    padding: normalize(16),
  },
  content: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  nullScreen: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(16),
    paddingVertical: normalize(20),
  },
  button: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
