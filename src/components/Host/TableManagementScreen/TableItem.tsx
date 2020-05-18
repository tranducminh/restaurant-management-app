import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import normalize from 'react-native-normalize';

import EditIcon from '@common/EditIcon';
import DeleteIcon from '@common/DeleteIcon';

const TableItem = () => {
  const onEdit = () => {
    return;
  };
  const onDelete = () => {
    return;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.table}>Table 1</Text>
      <View style={styles.options}>
        <EditIcon onEdit={onEdit} />
        <DeleteIcon onDelete={onDelete} />
      </View>
    </View>
  );
};

export default TableItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(10),
    backgroundColor: '#e0e0e0',
    borderRadius: normalize(15),
    marginBottom: normalize(16),
  },
  options: {
    flexDirection: 'row',
  },
  table: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(16),
  },
});
