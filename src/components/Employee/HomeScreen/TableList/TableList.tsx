import React from 'react';
import { StyleSheet, View } from 'react-native';
import normalize from 'react-native-normalize';
import { tableType } from '@type/index';

import TableItem from './TableItem';
const TableList = ({
  isEmpty,
  tableList = [],
}: {
  isEmpty: boolean;
  tableList: Array<tableType>;
}) => {
  return (
    <View style={styles.container}>
      {tableList.map((item, index) => (
        <TableItem
          isEmpty={isEmpty}
          key={index}
          tableID={item.id}
          tableName={item.data.tableName}
          capacity={item.data.capacity}
        />
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
