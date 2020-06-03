import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';

import CustomTopTabNavigator from '@common/CustomTopTabNavigator';
import TableScreen from './TableScreen';
import HeaderComponent from '@common/HeaderComponent';

import { getFloorList } from '@api/index';

const Tab = createMaterialTopTabNavigator();
const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const HomeScreen = () => {
  const [floorList, setFloorList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { restaurantID } = useTypedSelector((state) => state.user);

  useEffect(() => {
    getFloorList(setFloorList, setIsLoading, restaurantID);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <HeaderComponent />
      {isLoading === true ? null : (
        <Tab.Navigator tabBar={(props) => <CustomTopTabNavigator {...props} />}>
          {floorList.map((item, index) => {
            const renderTableScreen = () => (
              <TableScreen
                floor={item.data.floor}
                restaurantID={restaurantID}
              />
            );
            return (
              <Tab.Screen
                key={index}
                name={`Floor ${item.data.floor}`}
                component={renderTableScreen}
              />
            );
          })}
        </Tab.Navigator>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
