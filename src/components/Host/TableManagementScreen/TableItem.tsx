import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import normalize from 'react-native-normalize';

import EditIcon from '@common/EditIcon';
import DeleteIcon from '@common/DeleteIcon';

const TableItem = ({
  title,
  capacity,
  status,
}: {
  title: string;
  capacity: string;
  status: string;
}) => {
  const onEdit = () => {
    return;
  };
  const onDelete = () => {
    return;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.table}>Table {title}</Text>
      <Text style={styles.capacity}>{capacity} people</Text>
      <Text style={styles.status}>{status}</Text>
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
    backgroundColor: '#e9ecee',
    borderRadius: normalize(15),
    marginBottom: normalize(16),
  },
  options: {
    flexDirection: 'row',
  },
  capacity: {
    fontFamily: 'Exo-Medium',
    color: '#5e5e5e',
  },
  status: {
    color: '#36cc00',
  },
  table: {
    fontFamily: 'Exo-Bold',
    fontSize: normalize(16),
  },
});
