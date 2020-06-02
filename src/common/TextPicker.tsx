import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import normalize from 'react-native-normalize';

const TextPicker = () => {
  const [selectedValue, setSelectedValue] = useState('java');
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        itemStyle={styles.item}
        mode="dialog"
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript1" value="123" />
        <Picker.Item label="JavaScrip1t" value="23" />
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
