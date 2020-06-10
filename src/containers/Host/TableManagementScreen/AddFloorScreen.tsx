import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import normalize from 'react-native-normalize';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';
import { useNavigation } from '@react-navigation/native';
import { Toast } from 'native-base';

import HeaderComponent from '@common/HeaderComponent';
import TextInput from '@common/TextInput';
import PrimaryButton from '@common/PrimaryButton';

import { createFloor } from '@api/index';

const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const AddFloorScreen = () => {
  const navigation = useNavigation();
  const [floorName, setFloorName] = useState('');
  const { restaurantID } = useTypedSelector((state) => state.user);

  const onPress = () => {
    navigation.goBack();
    createFloor(floorName, restaurantID);
    Toast.show({
      text: 'Floor was added successfully',
      type: 'success',
      position: 'top',
      duration: 3000,
    });
  };
  return (
    <SafeAreaView>
      <HeaderComponent type="BACK" />
      <View style={styles.container}>
        <TextInput
          title="Floor name"
          value={floorName}
          onChangeText={setFloorName}
        />
        {/* <TextInput title="Total tables" value={'30'} disable={true} /> */}
        <PrimaryButton text="Add floor" onPress={onPress} />
      </View>
    </SafeAreaView>
  );
};

export default AddFloorScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(16),
    backgroundColor: '#ffffff',
    height: '100%',
  },
});
