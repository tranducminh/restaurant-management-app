import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Icon, Fab } from 'native-base';
import normalize from 'react-native-normalize';
import { useNavigation } from '@react-navigation/native';

import TableItem from '@components/Host/TableManagementScreen/TableItem';

const tableIcon = require('@assets/selectionTableIcon.png');
const floorIcon = require('@assets/stair.png');

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
  const navigation = useNavigation();
  const [active, setActive] = useState(false);
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
              title={item.data.tableName}
              capacity={item.data.capacity}
              status={item.data.status}
            />
          ))}
        </ScrollView>
      )}

      <Fab
        active={active}
        direction="up"
        containerStyle={{}}
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={() => setActive(!active)}>
        <Icon name="add" style={styles.icon} />
        <TouchableOpacity
          style={{ backgroundColor: '#cccccc' }}
          onPress={() =>
            navigation.navigate('AddTableScreen', {
              floorID: floorID,
              floor: floor,
            })
          }>
          <Image source={tableIcon} style={styles.subIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: '#3B5998' }}
          onPress={() => navigation.navigate('AddFloorScreen')}>
          <Image source={floorIcon} style={styles.subIcon} />
        </TouchableOpacity>
      </Fab>
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
  icon: {
    fontSize: normalize(32),
    top: normalize(5),
    left: normalize(1),
  },
  subIcon: {
    width: normalize(20),
    height: normalize(20),
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
