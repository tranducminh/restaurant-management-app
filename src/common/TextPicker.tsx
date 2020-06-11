import React, { useState } from 'react';
import { StyleSheet, View, Picker, Text } from 'react-native';
// import { Picker } from '@react-native-community/picker';
import normalize from 'react-native-normalize';

const TextPicker = ({
  title = '',
  setValue,
  values,
}: {
  title: string;
  setValue: Function;
  values: Array<{ label: string; value: string }>;
}) => {
  const [selectedValue, setSelectedValue] = useState('Host');
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        itemStyle={styles.item}
        mode="dialog"
        onValueChange={(itemValue) => {
          setSelectedValue(itemValue);
          setValue(itemValue);
        }}>
        {values.map((item, index) => {
          return (
            <Picker.Item key={index} label={item.label} value={item.value} />
          );
        })}
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
