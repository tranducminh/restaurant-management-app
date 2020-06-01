import React, { useEffect, useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CustomTopTabNavigator from '@common/CustomTopTabNavigator';
import TableListScreen from './TableListScreen';

import { getFloorList } from '@api/index';

const Tab = createMaterialTopTabNavigator();

const TableManagementScreen = () => {
  const [floorList, setFloorList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getFloorList(setFloorList, setIsLoading);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading === true ? null : (
        <Tab.Navigator tabBar={(props) => <CustomTopTabNavigator {...props} />}>
          {floorList.map((item, index) => {
            const renderTableListScreen = () => (
              <TableListScreen
                floorID={item.id}
                numberOfTables={item.data.numberOfTables}
              />
            );
            return (
              <Tab.Screen
                key={index}
                name={`Floor ${item.data.floor}`}
                component={renderTableListScreen}
              />
            );
          })}
        </Tab.Navigator>
      )}
    </View>
  );
};

export default TableManagementScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
