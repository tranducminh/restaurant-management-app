import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import normalize from 'react-native-normalize';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';

import HeaderComponent from '@common/HeaderComponent';
import TextInput from '@common/TextInput';
import PrimaryButton from '@common/PrimaryButton';

import { createFloor } from '@api/index';

const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const AddFloorScreen = () => {
  const [floorName, setFloorName] = useState('');
  const { restaurantID } = useTypedSelector((state) => state.user);

  const onPress = () => {
    createFloor(floorName, restaurantID);
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
