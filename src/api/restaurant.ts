import firestore from '@react-native-firebase/firestore';

import { createUser } from './auth';

export const createRestaurant = async (
  hostID: string,
  restaurantName: string,
  address: string,
  email: string,
  hostName: string | null,
  hostAvatar: string | null,
) => {
  await firestore()
    .collection('restaurants')
    .add({
      hostID: hostID,
      name: restaurantName,
      address: address,
    })
    .then((restaurant: any) => {
      const restaurantID = restaurant._documentPath._parts[1];
      createUser(
        hostID,
        hostName,
        hostAvatar,
        email.toLowerCase(),
        restaurantID,
        'HOST',
      );
    });
};
