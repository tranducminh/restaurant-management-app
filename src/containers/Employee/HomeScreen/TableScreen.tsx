/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import normalize from 'react-native-normalize';

import { Spinner } from 'native-base';
import TableList from '@components/Employee/HomeScreen/TableList/TableList';

import { getReadyTableList, getInUseTableList } from '@api/index';
const TableScreen = ({
  restaurantID,
  floor,
  floorID,
}: {
  restaurantID: string;
  floor: string;
  floorID: string
}) => {
  const [readyTableList, setReadyTableList] = useState([]);
  const [inUseTableList, setInUseTableList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(floorID);
    getReadyTableList(setReadyTableList, setIsLoading, floorID, restaurantID);
    getInUseTableList(setInUseTableList, setIsLoading, floorID, restaurantID);
  }, [floorID, restaurantID]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <Text style={styles.title}>Empty Table ({readyTableList.length})</Text>
        {isLoading === true ? (
          <Spinner />
        ) : (
            <TableList isEmpty={true} tableList={readyTableList} />
          )}
      </View>
      <View>
        <Text style={styles.title}>Live Table ({inUseTableList.length})</Text>
        {isLoading === true ? (
          <Spinner />
        ) : (
            <TableList isEmpty={false} tableList={inUseTableList} />
          )}
      </View>
    </ScrollView>
  );
};

export default TableScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
    paddingVertical: normalize(20),
    flex: 1,
  },
  title: {
    fontFamily: 'Exo-Bold',
    fontSize: normalize(18),
    paddingLeft: normalize(16),
  },
});
