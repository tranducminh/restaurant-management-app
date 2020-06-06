import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CustomTopTabNavigator from '@components/Employee/FoodSelectionScreen/CustomTopTabNavigator';
import FoodSelectionList from '@components/Employee/FoodSelectionScreen/FoodSelectionList';

const Tab = createMaterialTopTabNavigator();
const foodType = ['Appetizers', 'Main dishes', 'Desserts', 'Drinks', 'Fruits'];

const FoodSelectionScreen = ({ tableId }: { tableId: string }) => {
  return (
    <View style={styles.container}>
      <Tab.Navigator tabBar={(props) => <CustomTopTabNavigator {...props} />}>
        {foodType.map((item, index) => {
          const renderFoodSelecttionList = () => (
            <FoodSelectionList foodType={item} tableId={tableId} />
          );
          return (
            <Tab.Screen
              key={index}
              name={item}
              component={renderFoodSelecttionList}
            />
          );
        })}
      </Tab.Navigator>
    </View>
  );
};

export default FoodSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: '100%',
  },
});
