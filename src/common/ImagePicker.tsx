import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import normalize from 'react-native-normalize';

import PrimaryButton from '@common/PrimaryButton';

const ImagePickerCmp = () => {
  const [avatarSource, setAvatarSource] = useState();
  const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const uploadImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.uri) {
        setAvatarSource(response.uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: avatarSource }} style={styles.uploadAvatar} />
      </View>
      <PrimaryButton text="Choose Image" onPress={uploadImage} />
    </View>
  );
};

export default ImagePickerCmp;

const styles = StyleSheet.create({
  container: {
    marginBottom: normalize(20),
  },
  uploadAvatar: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: normalize(100),
    height: normalize(100),
    marginVertical: normalize(10),
    alignSelf: 'center',
    backgroundColor: '#cccccc',
  },
  button: {
    backgroundColor: '#2c9ced',
    padding: normalize(10),
    borderRadius: normalize(20),
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Exo-Bold',
    fontSize: normalize(15),
    textAlign: 'center',
  },
});
