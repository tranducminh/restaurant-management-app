import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

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
    .then(() => {});
};

export const createTempUser = async (
  email: string,
  password: string,
  restaurantID: string,
  position: string,
) => {
  firestore().collection('temp_users').add({
    email,
    password,
    restaurantID,
    position,
  });
};

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  let uid = '';
  await auth()
    .createUserWithEmailAndPassword(email, password)
    .then((data) => {
      uid = data.user.uid;
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
  return uid;
};

export const getUserInfo = async (uid: string) => {
  const position = await firestore().collection('users').doc(uid).get();
  return position.data();
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  await firestore()
    .collection('temp_users')
    .where('email', '==', email)
    .where('password', '==', password)
    .get()
    .then(async (user) => {
      if (user.docs.length !== 0) {
        const { position, restaurantID } = user.docs[0].data();
        const uid = await signUpWithEmailAndPassword(email, password);
        await createUser(uid, restaurantID, position);
        await firestore()
          .collection('temp_users')
          .doc(user.docs[0].id)
          .delete();
      } else {
        await auth()
          .signInWithEmailAndPassword(email, password)
          .then((user) => {
            console.log('123', user);
          })
          .catch((error) => {
            if (error.code === 'auth/wrong-password') {
              console.log('password is incorrect!');
            }
            if (error.code === 'auth/user-not-found') {
              console.log('user not found!');
            }
            console.error(error);
          });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
