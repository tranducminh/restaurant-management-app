import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import normalize from 'react-native-normalize';

const TextPicker = ({ setValue }: { setValue: Function }) => {
  const [selectedValue, setSelectedValue] = useState('java');
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        itemStyle={styles.item}
        mode="dialog"
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue);
          setValue(itemValue);
        }}>
        <Picker.Item label="Appetizers" value="Appetizers" />
        <Picker.Item label="Main dishes" value="MainDishes" />
        <Picker.Item label="Desserts" value="Desserts" />
        <Picker.Item label="Drinks" value="Drinks" />
        <Picker.Item label="Fruits" value="Fruits" />
      </Picker>
    </View>
  );
};

export default TextPicker;

const styles = StyleSheet.create({
  container: {
    // height: 10,
  },
  picker: {
    backgroundColor: '#ffffff',
    // height: 50,
  },
  item: {
    fontFamily: 'Exo-Bold',
    fontSize: normalize(15),
  },
});
