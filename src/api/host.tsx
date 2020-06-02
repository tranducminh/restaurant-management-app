/* eslint-disable react-hooks/rules-of-hooks */
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

export const createTable = async (
  floor: string,
  tableName: string,
  capacity: string,
  restaurantID: string,
  floorID: string,
) => {
  await firestore()
    .collection('tables')
    .add({
      restaurantID,
      status: 'ready',
      floor,
      tableName,
      capacity,
      floorID,
    })
    .then(() => {
      console.log('Table was added!');
    });
  const totalTable = await firestore()
    .collection('floors')
    .doc(floorID)
    .get()
    .then((data) => {
      return data.data().numberOfTables;
    });
  await firestore()
    .collection('floors')
    .doc(floorID)
    .update({
      numberOfTables: totalTable + 1,
    });
};

export const getTableDetail = async (tableID: string) => {
  return await firestore().collection('tables').doc(tableID).get();
};

export const removeTable = async (tableID: string) => {
  await firestore()
    .collection('tables')
    .doc(tableID)
    .delete()
    .then(() => console.log('Table was removed'));
};

export const updateTable = async (
  tableID: string,
  floor: string,
  tableName: string,
  capacity: string,
) => {
  await firestore()
    .collection('tables')
    .doc(tableID)
    .update({ floor, tableName, capacity })
    .then(() => {
      console.log('Table was updated');
    });
};

export const getListTableByFloor = async (
  floor: string,
  restaurantID: string,
) => {
  return await firestore()
    .collection('tables')
    .where('floor', '==', floor)
    .where('restaurantID', '==', restaurantID)
    .get()
    .then((querySnapshot) => { });
};

export const createFloor = async (floor: string, restaurantID: string) => {
  await firestore().collection('floors').add({
    floor,
    numberOfTables: 0,
    restaurantID,
  });
};
