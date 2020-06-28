import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import TextInput from '@common/TextInput';
import ImagePicker from '@common/ImagePicker';
import PrimaryButton from '@common/PrimaryButton';
import HeaderComponent from '@common/HeaderComponent';
import normalize from 'react-native-normalize';
import { updateProfile } from '@api/index';
import { Toast } from 'native-base';

export default function EditProfileScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const [name, setName] = useState(route.params.name);
  const [avatar, setAvatar] = useState(route.params.avatar);
  const [coverImage, setCoverImage] = useState(route.params.coverImage);
  const { email, employeeID } = route.params;
  const onUpdate = () => {
    updateProfile(employeeID, coverImage, avatar, name);
    navigation.goBack();
    Toast.show({
      text: 'Profile was updated successfully',
      type: 'success',
      position: 'top',
      duration: 3000,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent type="BACK" title="Edit Profile" />
      <ScrollView style={styles.content}>
        <Text>Cover image</Text>
        <ImagePicker url={coverImage} setUrl={setCoverImage} />
        <Text>Avatar image</Text>
        <ImagePicker url={avatar} setUrl={setAvatar} />
        <TextInput title="Email" disable={true} value={email} />
        <TextInput title="Fullname" value={name} onChangeText={setName} />
        <PrimaryButton text="Update" onPress={onUpdate} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  content: {
    padding: normalize(16),
  },
});
