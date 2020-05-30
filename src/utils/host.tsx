import firestore from '@react-native-firebase/firestore';

export const createRestaurant = async (
  hostID: string,
  name: string,
  address: string,
) => {
  firestore()
    .collection('restaurants')
    .add({
      hostID: hostID,
      name: name,
      address: address,
    })
    .then(() => {
      console.log('Restaurant added!');
    });
};
