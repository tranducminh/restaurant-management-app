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
      discount: 0,
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

export const getRestaurantInfo = async (restaurantID: string) => {
  let restaurant = await firestore()
    .collection('restaurants')
    .doc(restaurantID)
    .get();
  return restaurant.data();
};

export const updateRestaurantInfo = async (
  restaurantID: string,
  name: string,
  address: string,
  discount: number,
) => {
  let result = await firestore()
    .collection('restaurants')
    .doc(restaurantID)
    .update({ name, address, discount });
  console.log(result);
};
