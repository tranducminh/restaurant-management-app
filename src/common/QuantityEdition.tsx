import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';

const plusIcon = require('@assets/Icons/plus.png');
const subIcon = require('@assets/Icons/sub.png');

const QuantityEdition = ({ size = 20 }: { size: number }) => {
  const [quantity, setQuantity] = useState(1);
  const iconStyle = {
    width: normalize(size * 0.8),
    height: normalize(size * 0.8),
  };
  const descQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const ascQuantity = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={descQuantity}>
        <Image source={subIcon} style={[styles.icon, iconStyle]} />
      </TouchableOpacity>
      <Text style={[styles.text, { fontSize: normalize(size) }]}>
        {quantity}
      </Text>
      <TouchableOpacity style={styles.iconContainer} onPress={ascQuantity}>
        <Image source={plusIcon} style={[styles.icon, iconStyle]} />
      </TouchableOpacity>
    </View>
  );
};

export default QuantityEdition;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Exo-Regular',
    width: normalize(25),
    textAlign: 'center',
  },
  iconContainer: {
    paddingVertical: normalize(15),
    paddingHorizontal: normalize(10),
  },
  icon: {},
});
