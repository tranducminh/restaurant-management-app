import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import normalize from 'react-native-normalize';
import { tableType } from '@type/index';

import TableItem from './TableItem';
import EmptyIcon from '@common/EmptyIcon';
const TableList = ({
  isEmpty,
  tableList = [],
}: {
  isEmpty: boolean;
  tableList: Array<tableType>;
}) => {
  if (tableList.length === 0) {
    return (
      <View style={styles.nullContainer}>
        <EmptyIcon />
        <Text style={styles.text}>No Table</Text>
      </View>
    );
  }
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
    justifyContent: 'space-around',
  },
  nullContainer: {
    alignItems: 'center',
    padding: normalize(20),
  },
  text: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(15),
  },
});
