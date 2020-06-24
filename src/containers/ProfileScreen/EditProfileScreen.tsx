import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import TextInput from '@common/TextInput';
import ImagePicker from '@common/ImagePicker';
import PrimaryButton from '@common/PrimaryButton';
import HeaderComponent from '@common/HeaderComponent';
import normalize from 'react-native-normalize';

export default function EditProfileScreen({ route }: { route: any }) {
  const [name, setName] = useState(route.params.name);
  const [avatar, setAvatar] = useState(route.params.avatar);
  const [coverImage, setCoverImage] = useState(route.params.coverImage);
  const { email } = route.params;
  const onUpdate = () => {
    return;
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
