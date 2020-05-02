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

const backIcon = require('@assets/Icons/back.png');
const ICON_SIZE = 20;
const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Table 1</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    marginTop:
      Platform.OS === 'ios' ? getStatusBarHeight() : getStatusBarHeight(true),
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(8),
  },
  iconContainer: {
    position: 'absolute',
    top: normalize(8),
    left: normalize(16),
    zIndex: 2,
  },
  icon: {
    width: normalize(ICON_SIZE),
    height: normalize(ICON_SIZE),
  },
  title: {
    fontFamily: 'Exo-Bold',
    fontSize: normalize(20),
    textAlign: 'center',
  },
});
