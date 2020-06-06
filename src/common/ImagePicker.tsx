import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import normalize from 'react-native-normalize';
import { Spinner } from 'native-base';

import PrimaryButton from '@common/PrimaryButton';

const ImagePickerCmp = ({ setUrl }: { setUrl: Function }) => {
  const [avatarSource, setAvatarSource] = useState();
  const [isLoading, setIsLoading] = useState('NULL');
  const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const uploadImage = () => {
    setIsLoading('TRUE');
    ImagePicker.showImagePicker(options, async (response) => {
      if (response.uri) {
        setAvatarSource(response.uri);
        setUrl(response.uri);
        setIsLoading('FALSE');
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {isLoading === 'NULL' ? null : isLoading === 'TRUE' ? (
          <Spinner color="#2c9ced" />
        ) : (
            <Image source={{ uri: avatarSource }} style={styles.uploadAvatar} />
          )}
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
    justifyContent: 'center',
    alignItems: 'center',
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
