import React from 'react';
import { StyleSheet, View } from 'react-native';
import normalize from 'react-native-normalize';

import TableItem from './TableItem';
const TableList = () => {
  return (
    <View style={styles.container}>
      {[...Array(9)].map((item, index) => (
        <TableItem />
      ))}
    </View>
  );
};

export default TableList;

const styles = StyleSheet.create({
  container: {
    padding: normalize(16),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
