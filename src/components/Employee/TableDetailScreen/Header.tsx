import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import normalize from 'react-native-normalize';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const backIcon = require('@assets/Icons/arrow.png');
const ICON_SIZE = 20;
const Header = ({ tableName }: { tableName: string }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Table {tableName}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight()
        : getStatusBarHeight(true) + normalize(8),
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(12),
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  iconContainer: {
    position: 'absolute',
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight()
        : getStatusBarHeight(true) + normalize(8),
    left: normalize(16),
    zIndex: 2,
  },
  icon: {
    width: normalize(ICON_SIZE),
    height: normalize(ICON_SIZE),
  },
  title: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(20),
    textAlign: 'center',
    color: '#000000',
  },
});
