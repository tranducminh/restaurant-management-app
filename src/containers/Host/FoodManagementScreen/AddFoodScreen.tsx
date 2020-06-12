import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import normalize from 'react-native-normalize';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';
import { Toast } from 'native-base';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();

  const onPress = async () => {
    addFood(restaurantID, foodName, price, description, foodType, url);
    Toast.show({
      text: 'Food was added successfully',
      type: 'success',
      position: 'top',
      duration: 3000,
    });
    navigation.goBack();
  };
  const values = [
    {
      label: 'Appetizers',
      value: 'Appetizers',
    },
    {
      label: 'Main dishes',
      value: 'MainDishes',
    },
    {
      label: 'Desserts',
      value: 'Desserts',
    },
    {
      label: 'Drinks',
      value: 'Drinks',
    },
    {
      label: 'Fruits',
      value: 'Fruits',
    },
  ];
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
          <Picker setValue={setFoodType} values={values} title="Type of food" />
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
