/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';
import AddIcon from '@common/AddIcon';
import EmptyIcon from '@common/EmptyIcon';
import { useNavigation } from '@react-navigation/native';
import normalize from 'react-native-normalize';
import EmployeeItem from '@components/Host/EmployeeManagementScreen/EmployeeItem';
import { userType } from '@type/index';
import { getEnabledEmployeeList, getPendingEmployeeList, getDisabledEmployeeList } from '@api/index';

const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const EmployeeManagementScreen = () => {
  const navigation = useNavigation();
  const [enabledEmployeeList, setEnabledEmployeeList] = useState([]);
  const [disabledEmployeeList, setDisabledEmployeeList] = useState([]);
  const [pendingEmployeeList, setPendingEmployeeList] = useState([]);
  const { restaurantID } = useTypedSelector((state) => state.user);

  useEffect(() => {
    getEnabledEmployeeList(restaurantID, setEnabledEmployeeList);
    getDisabledEmployeeList(restaurantID, setDisabledEmployeeList);
    getPendingEmployeeList(restaurantID, setPendingEmployeeList);
  }, [restaurantID]);

  const renderEmployeeList = () => {
    return (
      <View style={styles.content}>
        {enabledEmployeeList.map((item: userType, index) => <EmployeeItem isAuth={true} key={index} {...item.data} employeeID={item.id} />)}
        {disabledEmployeeList.map((item: userType, index) => <EmployeeItem isAuth={true} key={index} {...item.data} employeeID={item.id} />)}
        {pendingEmployeeList.map((item: userType, index) => <EmployeeItem isAuth={false} key={index} {...item.data} employeeID={item.id} />)}
        <View style={styles.button}>
          <AddIcon onPress={() => navigation.navigate('AddEmployeeScreen')} />
        </View>
      </View>);
  };
  return (
    <View style={styles.container}>
      {enabledEmployeeList.length !== 0 || pendingEmployeeList.length !== 0 || disabledEmployeeList.length !== 0 ? renderEmployeeList() : <NullScreen />}

    </View >
  );
};

const NullScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nullScreen}>
      <EmptyIcon />
      <Text style={styles.text}>You haven't create any employee yet</Text>
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
