import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import normalize from 'react-native-normalize';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';

import Picker from '@common/TextPicker';
import ImagePicker from '@common/ImagePicker';
import TextInput from '@common/TextInput';
import PrimaryButton from '@common/PrimaryButton';
import HeaderComponent from '@common/HeaderComponent';

import { addFood } from '@api/index';

const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const AddFoodScreen = () => {
  const [foodName, setFoodName] = useState('');
  const [description, setDescription] = useState('');
  const [foodType, setFoodType] = useState('');
  const [url, setUrl] = useState('');
  const [price, setPrice] = useState('');
  const { restaurantID } = useTypedSelector((state) => state.user);

  const onPress = async () => {
    addFood(restaurantID, foodName, price, description, foodType, url);
  };
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent type="BACK" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <TextInput
            title="Food name"
            value={foodName}
            onChangeText={setFoodName}
          />
          <TextInput
            title="Description"
            value={description}
            onChangeText={setDescription}
          />
          <TextInput
            title="Price"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
          <Text>Image</Text>
          <ImagePicker setUrl={setUrl} />
          <Text>Type of food</Text>
          <Picker setValue={setFoodType} />
          <PrimaryButton text="Add food" onPress={onPress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddFoodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    backgroundColor: '#ffffff',
    paddingHorizontal: normalize(16),
  },
});
