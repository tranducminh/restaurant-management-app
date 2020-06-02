import React from 'react';
import { StyleSheet, View } from 'react-native';
import normalize from 'react-native-normalize';
import { useNavigation } from '@react-navigation/native';

import AddIcon from '@common/AddIcon';

const FoodManagementScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AddIcon onPress={() => navigation.navigate('AddFoodScreen')} />
    </View>
  );
};

export default FoodManagementScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal: normalize(16),
  },
});
