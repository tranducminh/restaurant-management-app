import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import normalize from 'react-native-normalize';
import { useNavigation } from '@react-navigation/native';

import TableItem from '@components/Host/TableManagementScreen/TableItem';
import AddIcon from '@common/AddIcon';

const TableListScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
      <AddIcon onPress={() => navigation.navigate('AddTableScreen')} />
    </ScrollView>
  );
};

export default TableListScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: normalize(16),
  },
});
