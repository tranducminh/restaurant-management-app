import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';
import { useNavigation } from '@react-navigation/native';
import AddIcon from '@common/AddIcon';

import { orderTable } from '@api/index';

const tableIcon = require('@assets/table.png');
const ICON_SIZE = 60;

const TableItem = ({
  isEmpty = true,
  tableID,
  capacity,
  tableName,
}: {
  isEmpty: boolean;
  tableID: string;
  capacity: string;
  tableName: string;
}) => {
  const navigation = useNavigation();
  const onPress = () => {
    orderTable(tableID);
    navigation.navigate('TableDetailScreen', {
      tableId: tableID,
      tableName: tableName,
    });
  };
  return (
    <TouchableOpacity
      disabled={isEmpty}
      style={styles.container}
      onPress={() =>
        navigation.navigate('TableDetailScreen', {
          tableId: tableID,
          tableName: tableName,
        })
      }>
      <View style={styles.content}>
        <Image source={tableIcon} style={styles.image} />
        {isEmpty ? (
          <View style={styles.iconContainer}>
            <AddIcon size={30} onPress={onPress} />
          </View>
        ) : null}
      </View>
      <Text style={styles.tableText}>Table {tableName}</Text>
      <Text style={styles.typeText}>{capacity} people capacity</Text>
    </TouchableOpacity>
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
  iconContainer: {
    position: 'absolute',
    right: normalize(5),
    bottom: -normalize(15),
    zIndex: 3,
  },
  icon: {
    width: normalize(30),
    height: normalize(30),
  },
});
