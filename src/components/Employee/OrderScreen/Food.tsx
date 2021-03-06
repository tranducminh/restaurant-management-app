import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import normalize from 'react-native-normalize';
import Image from '@common/Image';
import QuantityEdition from '@common/QuantityEdition';

const Food = ({
  url,
  foodName,
  price,
  quantity,
  selectionId,
}: {
  url: string;
  foodName: string;
  price: number;
  quantity: number;
  selectionId: string;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image url={url} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.name}>{foodName}</Text>
          <Text style={styles.price}>$ {price}</Text>
        </View>
      </View>
      <QuantityEdition
        size={18}
        quantity={quantity}
        selectionId={selectionId}
        price={price}
      />
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: normalize(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  main: {
    flexDirection: 'row',
  },
  content: {
    paddingHorizontal: normalize(16),
  },
  image: {
    width: normalize(70),
    height: normalize(70),
    borderRadius: normalize(10),
  },
  price: {
    // fontFamily: 'Exo-Medium',
    fontSize: normalize(16),
    paddingTop: normalize(5),
  },
  name: {
    fontFamily: 'Exo-Bold',
    fontSize: normalize(18),
    color: '#584538',
  },
});
