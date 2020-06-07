import firestore from '@react-native-firebase/firestore';

export const createUser = async (
  uid: string,
  restaurantID: string,
  position: string,
) => {
  firestore()
    .collection('users')
    .doc(uid)
    .set({
      restaurantID: restaurantID,
      position: position,
    })
    .then(() => {
      console.log('Restaurant added!');
    });
};

export const getUserInfo = async (uid: string) => {
  const position = await firestore().collection('users').doc(uid).get();
  return position.data();
};
