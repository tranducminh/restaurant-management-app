import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import normalize from 'react-native-normalize';
import { useNavigation } from '@react-navigation/native';
import { floorType } from '@type/index';

import { ReducersType } from '@reducers/index';
import CustomTopTabNavigator from '@common/CustomTopTabNavigator';
import TableListScreen from './TableListScreen';
import AddIcon from '@common/AddIcon';
import EmptyIcon from '@common/EmptyIcon';

import { getFloorList } from '@api/index';

const Tab = createMaterialTopTabNavigator();
const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const TableManagementScreen = () => {
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
      let floor = floorList[0] as floorType;
      return (
        <TableListScreen
          floorID={floor.id}
          restaurantID={restaurantID}
          numberOfTables={floor.data.numberOfTables}
          floor={floor.data.floor}
        />
      );
    }
    return (
      <Tab.Navigator tabBar={(props) => <CustomTopTabNavigator {...props} />}>
        {floorList.map((item: floorType, index) => {
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
    );
  };

  return (
    <View style={styles.container}>
      {isLoading === true ? null : renderFloorList()}
    </View>
  );
};

const NullScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nullScreen}>
      <EmptyIcon />
      <Text style={styles.text}>You haven't created any floor yet</Text>
      <AddIcon
        onPress={() => {
          navigation.navigate('AddFloorScreen');
        }}
      />
    </View>
  );
};

export default TableManagementScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
