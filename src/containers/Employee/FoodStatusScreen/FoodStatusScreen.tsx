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
import HeaderComponent from '@common/HeaderComponent';

const FoodStatusScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <HeaderComponent />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.part}>
          <Text style={styles.title}>Ready food</Text>
          <FoodStatusList isReady={true} />
        </View>
        <View style={styles.part}>
          <Text style={styles.title}>Incoming food</Text>
          <FoodStatusList isReady={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FoodStatusScreen;

const styles = StyleSheet.create({
  container: {},
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
