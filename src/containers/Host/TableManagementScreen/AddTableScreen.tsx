import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import normalize from 'react-native-normalize';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';
import { useNavigation } from '@react-navigation/native';
import { Toast } from 'native-base';

import TextInput from '@common/TextInput';
import PrimaryButton from '@common/PrimaryButton';
import HeaderComponent from '@common/HeaderComponent';
import { createTable } from '@api/index';

const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const AddTableScreen = ({ route }: { route: any }) => {
  const navigation = useNavigation();
  const [tableName, setTableName] = useState('');
  const [capacity, setCapacity] = useState('');
  const { restaurantID } = useTypedSelector((state) => state.user);
  const { floor, floorID } = route.params;

  const onPress = () => {
    createTable(floor, tableName, capacity, restaurantID, floorID);
    navigation.goBack();
    Toast.show({
      text: 'Table was added successfully',
      type: 'success',
      position: 'top',
      duration: 3000,
    });
  };
  return (
    <SafeAreaView>
      <HeaderComponent type="BACK" />
      <View style={styles.container}>
        <Text style={styles.title}>Add table to floor</Text>
        <TextInput title="Floor" value={floor} disable={true} />
        <TextInput
          title="Table name"
          value={tableName}
          onChangeText={setTableName}
        />
        <TextInput
          title="Capacity"
          value={capacity}
          onChangeText={setCapacity}
        />
        <PrimaryButton text="Add table" onPress={onPress} />
      </View>
    </SafeAreaView>
  );
};

export default AddTableScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(16),
    backgroundColor: '#ffffff',
    height: '100%',
  },
  title: {
    fontFamily: 'Exo-Bold',
    textAlign: 'center',
    fontSize: normalize(20),
    paddingBottom: normalize(16),
  },
});
