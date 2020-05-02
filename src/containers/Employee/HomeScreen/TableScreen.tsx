import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import normalize from 'react-native-normalize';

import TableList from '@components/Employee/HomeScreen/TableList/TableList';

const TableScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <Text style={styles.title}>Empty Table (6)</Text>
        <TableList />
      </View>
      <View>
        <Text style={styles.title}>Live Table</Text>
        <TableList />
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
