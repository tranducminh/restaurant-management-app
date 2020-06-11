import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddIcon from '@common/AddIcon';

const EmployeeManagementScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text />
      <AddIcon onPress={() => navigation.navigate('AddEmployeeScreen')} />
    </View>
  );
};

export default EmployeeManagementScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
});
