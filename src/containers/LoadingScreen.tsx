import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Spinner } from 'native-base';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Spinner color="#2c9ced" />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
