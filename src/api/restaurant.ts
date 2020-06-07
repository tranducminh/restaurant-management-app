import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import { createUser } from './auth';

export const createRestaurant = async (
  email: string,
  password: string,
  name: string,
  address: string,
) => {
  await auth()
    .createUserWithEmailAndPassword(email, password)
    .then((data) => {
      console.log('User account created & signed in!');
      firestore()
        .collection('restaurants')
        .add({
          hostID: data.user.uid,
          name: name,
          address: address,
        })
        .then((restaurant) => {
          const restaurantID = restaurant._documentPath._parts[1];
          createUser(data.user.uid, restaurantID, 'HOST');
        });
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};
