import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import normalize from 'react-native-normalize';

import Picker from '@common/TextPicker';
import ImagePicker from '@common/ImagePicker';
import TextInput from '@common/TextInput';
import PrimaryButton from '@common/PrimaryButton';
import HeaderComponent from '@common/HeaderComponent';

const AddFoodScreen = () => {
  const [foodName, setFoodName] = useState('');
  const onPress = () => {
    return;
  };
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent type="BACK" />
      <View style={styles.content}>
        <TextInput
          title="Food name"
          value={foodName}
          onChangeText={setFoodName}
        />
        <Text>Image</Text>
        <ImagePicker />
        <Text>Type of food</Text>
        <Picker />
        <PrimaryButton text="Add food" onPress={onPress} />
      </View>
    </SafeAreaView>
  );
};

export default AddFoodScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  content: {
    backgroundColor: '#ffffff',
    paddingHorizontal: normalize(16),
  },
});
