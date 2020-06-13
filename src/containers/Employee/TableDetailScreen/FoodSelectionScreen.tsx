import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CustomTopTabNavigator from '@components/Employee/FoodSelectionScreen/CustomTopTabNavigator';
import FoodSelectionList from '@components/Employee/FoodSelectionScreen/FoodSelectionList';

const Tab = createMaterialTopTabNavigator();
const foodType = ['Appetizers', 'MainDishes', 'Desserts', 'Drinks', 'Fruits'];

const FoodSelectionScreen = ({
  tableId,
  tableName,
}: {
  tableId: string;
  tableName: string;
}) => {
  return (
    <View style={styles.container}>
      <Tab.Navigator tabBar={(props) => <CustomTopTabNavigator {...props} />}>
        {foodType.map((item, index) => {
          const renderFoodSelectionList = () => (
            <FoodSelectionList
              foodType={item}
              tableId={tableId}
              tableName={tableName}
            />
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
