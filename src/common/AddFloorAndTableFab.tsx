import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Fab, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import normalize from 'react-native-normalize';
import color from '@constants/Color';

const tableIcon = require('@assets/selectionTableIcon.png');
const floorIcon = require('@assets/stair.png');

export default function AddFloorAndTableFab({
  floorID,
  floor,
}: {
  floorID: string;
  floor: string;
}) {
  const navigation = useNavigation();
  const [active, setActive] = useState(false);
  return (
    <Fab
      active={active}
      direction="up"
      containerStyle={{}}
      style={{ backgroundColor: color.MAIN_COLOR }}
      position="bottomRight"
      onPress={() => setActive(!active)}>
      <Icon ios="ios-add" android="add-outline" style={styles.icon} />
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
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: normalize(32),
    top: normalize(5),
  },
  subIcon: {
    width: normalize(20),
    height: normalize(20),
  },
});
