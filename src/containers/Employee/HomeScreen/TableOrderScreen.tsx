import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';
import normalize from 'react-native-normalize';
import { floorType } from '@type/index';
import CustomTopTabNavigator from '@common/CustomTopTabNavigator';
import TableScreen from './TableScreen';
import EmptyIcon from '@common/EmptyIcon';

import { getFloorList } from '@api/index';

const Tab = createMaterialTopTabNavigator();
const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const HomeScreen = () => {
  const [floorList, setFloorList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { restaurantID } = useTypedSelector((state) => state.user);

  useEffect(() => {
    if (restaurantID !== '') {
      getFloorList(setFloorList, setIsLoading, restaurantID);
    }
  }, [restaurantID]);

  const renderFloorList = () => {
    if (floorList.length === 0) {
      return <NullScreen />;
    } else if (floorList.length === 1) {
      let floor: floorType = floorList[0];
      return (
        <TableScreen
          restaurantID={restaurantID}
          floor={floor.data.floor}
          floorID={floor.id}
        />
      );
    }
    return (
      <Tab.Navigator tabBar={(props) => <CustomTopTabNavigator {...props} />}>
        {floorList.map((item: floorType, index) => {
          const renderTableListScreen = () => (
            <TableScreen
              restaurantID={restaurantID}
              floor={item.data.floor}
              floorID={item.id}
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
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      {isLoading === true ? null : renderFloorList()}
    </SafeAreaView>
  );
};

const NullScreen = () => {
  return (
    <View style={styles.nullScreen}>
      <EmptyIcon />
      <Text style={styles.text}>Your restaurant haven't any floor yet</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  nullScreen: {
    height: '100%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(18),
    paddingVertical: normalize(20),
  },
});
