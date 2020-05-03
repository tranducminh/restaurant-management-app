import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';
import { useNavigation } from '@react-navigation/native';

const tableIcon = require('@assets/table.png');
const addIcon = require('@assets/Icons/add.png');
const ICON_SIZE = 60;

const TableItem = ({ isEmpty = true }: { isEmpty: boolean }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      disabled={isEmpty}
      style={styles.container}
      onPress={() => navigation.navigate('TableDetailScreen')}>
      <View style={styles.content}>
        <Image source={tableIcon} style={styles.image} />
        {isEmpty ? (
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={addIcon} style={styles.icon} />
          </TouchableOpacity>
        ) : null}
      </View>
      <Text style={styles.tableText}>Table 1</Text>
      <Text style={styles.typeText}>4 people capacity</Text>
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
