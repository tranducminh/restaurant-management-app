import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import actions from '../../actions';

const { setNavigator } = actions;
const PositionItem = ({
  icon,
  title,
  id,
}: {
  icon: any;
  title: string;
  id: string;
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onPress = () => {
    dispatch(setNavigator(id));
    navigation.navigate('LoginScreen', {
      icon: icon,
      id: id,
    });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={icon} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PositionItem;

const styles = StyleSheet.create({
  container: {
    width: normalize(100, 'width'),
    height: normalize(100, 'width'),
    marginVertical: normalize(20, 'width'),
  },
  imageContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
    padding: normalize(15, 'width'),
    borderRadius: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily: 'Exo-Bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
    marginVertical: normalize(5, 'width'),
  },
});
