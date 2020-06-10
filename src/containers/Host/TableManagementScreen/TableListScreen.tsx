import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import normalize from 'react-native-normalize';

import TableItem from '@components/Host/TableManagementScreen/TableItem';
import AddFloorAndTableFab from '@common/AddFloorAndTableFab';

import { getTableList } from '@api/index';

const TableListScreen = ({
  floorID,
  restaurantID,
  numberOfTables,
  floor,
}: {
  floorID: string;
  restaurantID: string;
  numberOfTables: number;
  floor: string;
}) => {
  const [tableList, setTableList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTableList(setTableList, setIsLoading, floor, restaurantID);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <Text
          style={
            styles.descriptionText
          }>{`Total: ${numberOfTables} tables`}</Text>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Delete this floor</Text>
        </TouchableOpacity>
      </View>
      {isLoading === true ? null : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {tableList.map((item, index) => (
            <TableItem
              key={index}
              floorId={floorID}
              tableId={item.id}
              title={item.data.tableName}
              capacity={item.data.capacity}
              status={item.data.status}
            />
          ))}
        </ScrollView>
      )}
      <AddFloorAndTableFab floorID={floorID} floor={floor} />
    </View>
  );
};

export default TableListScreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#ffffff',
    padding: normalize(16),
    height: '100%',
  },

  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: normalize(16),
  },
  descriptionText: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(16),
  },
  buttonText: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(14.5),
    color: 'red',
    textDecorationLine: 'underline',
  },
});
