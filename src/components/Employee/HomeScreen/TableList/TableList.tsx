import React from 'react';
import { StyleSheet, View } from 'react-native';
import normalize from 'react-native-normalize';

import TableItem from './TableItem';
const TableList = ({ isEmpty }: { isEmpty: boolean }) => {
  return (
    <View style={styles.container}>
      {[...Array(9)].map((item, index) => (
        <TableItem isEmpty={isEmpty} key={index} />
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
