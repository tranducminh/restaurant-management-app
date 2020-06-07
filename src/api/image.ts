import storage from '@react-native-firebase/storage';

export const uploadImage = async (url: string) => {
  const time = new Date();
  const id = time.getTime().toString();
  const reference = storage().ref(id);
  await reference.putFile(url);
  const downloadUrl = await storage().ref(id).getDownloadURL();
  return downloadUrl;
};
