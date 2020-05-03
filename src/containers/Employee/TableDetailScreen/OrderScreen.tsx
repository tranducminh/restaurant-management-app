import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import normalize from 'react-native-normalize';

import color from '@constants/Color';
import Food from '@components/Employee/OrderScreen/Food';

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your choice</Text>
        <TouchableOpacity>
          <Text style={styles.orderText}>Order now</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Food />
        <Food />
        <Food />
        <Food />
        <Food />
      </ScrollView>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    paddingHorizontal: normalize(16),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: normalize(10),
  },
  title: {
    fontFamily: 'Exo-Regular',
    fontSize: normalize(35),
    textAlign: 'left',
    // color: '#00bbff',
  },
  content: {
    paddingVertical: normalize(10),
  },
  orderText: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(16),
    color: color.MAIN_COLOR,
    textDecorationLine: 'underline',
  },
});
