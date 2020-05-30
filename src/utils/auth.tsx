import firestore from '@react-native-firebase/firestore';

export const createUser = async (uid: string, position: string) => {
  firestore()
    .collection('users')
    .doc(uid)
    .set({
      position: position,
    })
    .then(() => {
      console.log('Restaurant added!');
    });
};
