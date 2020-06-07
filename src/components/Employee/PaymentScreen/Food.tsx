import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import normalize from 'react-native-normalize';

import Image from '@common/Image';
const Food = ({
  foodName,
  url,
  quantity,
  price,
  status,
}: {
  foodName: string;
  url: string;
  quantity: number;
  price: number;
  status: string;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image url={url} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.name}>{foodName}</Text>
          <Text style={styles.quantity}>x {quantity}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.price}>$ {price}</Text>
        {/* <Text style={styles.status}>Cooking...</Text> */}
        <Text style={styles.ready}>{status}</Text>
      </View>
      <Text />
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: normalize(20),
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    width: '70%',
  },
  right: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '30%',
  },
  price: {
    // fontFamily: 'Exo-Medium',
    fontSize: normalize(18),
  },
  status: {
    fontFamily: 'Exo-Regular',
    fontSize: normalize(14),
    color: '#dea300',
  },
  ready: {
    fontFamily: 'Exo-Regular',
    fontSize: normalize(14),
    color: '#00a865',
  },
  content: {
    paddingLeft: normalize(10),
  },
  name: {
    fontFamily: 'Exo-Bold',
    fontSize: normalize(18),
    color: '#090807',
  },
  quantity: {
    fontFamily: 'Exo-Regular',
    color: '#828282',
    fontSize: normalize(14),
    paddingTop: normalize(10),
  },
  image: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(10),
  },
});
