/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';
import AddIcon from '@common/AddIcon';
import { useNavigation } from '@react-navigation/native';
import normalize from 'react-native-normalize';

import { getEmployeeList } from '@api/index';

const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const EmployeeManagementScreen = () => {
  const navigation = useNavigation();
  const [employeeList, setEmployeeList] = useState([]);
  const { restaurantID } = useTypedSelector((state) => state.user);

  useEffect(() => {
    getEmployeeList(restaurantID, setEmployeeList);
  }, [restaurantID]);

  const renderEmployeeList = () => {
    return (
      <View style={styles.content}>
        {employeeList.map((item, index) => <Text key={index}>{item.id}</Text>)}
        <View style={styles.button}>
          <AddIcon onPress={() => navigation.navigate('AddEmployeeScreen')} />
        </View>
      </View>);
  };
  return (
    <View style={styles.container}>
      {employeeList.length !== 0 ? renderEmployeeList() : <NullScreen />}

    </View >
  );
};

const NullScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nullScreen}>
      <Text style={styles.text}>You haven't create any food yet</Text>
      <AddIcon onPress={() => navigation.navigate('AddEmployeeScreen')} />
    </View>
  );
};

export default EmployeeManagementScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
    padding: normalize(16),
  },
  nullScreen: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  content: {
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
