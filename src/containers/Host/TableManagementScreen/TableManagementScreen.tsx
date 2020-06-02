import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';

import CustomTopTabNavigator from '@common/CustomTopTabNavigator';
import TableListScreen from './TableListScreen';

import { getFloorList } from '@api/index';

const Tab = createMaterialTopTabNavigator();
const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const TableManagementScreen = () => {
  const [floorList, setFloorList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { restaurantID } = useTypedSelector((state) => state.user);

  useEffect(() => {
    getFloorList(setFloorList, setIsLoading, restaurantID);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading === true ? null : (
        <Tab.Navigator tabBar={(props) => <CustomTopTabNavigator {...props} />}>
          {floorList.map((item, index) => {
            const renderTableListScreen = () => (
              <TableListScreen
                floorID={item.id}
                restaurantID={restaurantID}
                numberOfTables={item.data.numberOfTables}
                floor={item.data.floor}
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
