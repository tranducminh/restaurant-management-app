import firestore from '@react-native-firebase/firestore';

import { createUser } from './auth';

export const createRestaurant = async (
  hostID: string,
  name: string,
  address: string,
  email: string,
) => {
  await firestore()
    .collection('restaurants')
    .add({
      hostID: hostID,
      name: name,
      address: address,
    })
    .then((restaurant) => {
      const restaurantID = restaurant._documentPath._parts[1];
      createUser(hostID, '', '', email.toLowerCase(), restaurantID, 'HOST');
    });
};
