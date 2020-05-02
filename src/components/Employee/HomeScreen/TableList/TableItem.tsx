import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import normalize from 'react-native-normalize';

const tableIcon = require('@assets/table.png');
const ICON_SIZE = 60;

const TableItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={tableIcon} style={styles.image} />
      </View>
      <Text style={styles.tableText}>Table 1</Text>
      <Text style={styles.typeText}>4 people capacity</Text>
    </View>
  );
};

export default TableItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: normalize(20),
  },
  content: {
    borderWidth: 0.2,
    borderColor: '#b3b3b3',
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(100),
    height: normalize(100),
    backgroundColor: '#fcfcfc',
    borderRadius: normalize(10),
  },
  image: {
    width: normalize(ICON_SIZE),
    height: normalize(ICON_SIZE),
  },
  tableText: {
    marginTop: normalize(5),
    fontFamily: 'Exo-Bold',
    fontSize: normalize(15),
    color: '#363636',
  },
  typeText: {
    fontFamily: 'Exo-Regular',
    color: '#abb2ae',
    fontSize: normalize(12),
  },
});
