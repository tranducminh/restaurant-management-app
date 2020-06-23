import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import normalize from 'react-native-normalize';

import FoodStatusList from '@components/Employee/FoodStatusScreen/FoodStatusList';

const FoodStatusScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.part}>
          <Text style={styles.title}>Ready food</Text>
          <FoodStatusList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FoodStatusScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  content: {
    paddingHorizontal: normalize(16),
  },
  part: {
    marginBottom: normalize(10),
  },
  title: {
    fontFamily: 'Exo-Bold',
    fontSize: normalize(25),
    paddingVertical: normalize(10),
  },
});
