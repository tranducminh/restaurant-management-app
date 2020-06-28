import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const createUser = async (
  uid: string,
  name = '' as string | null,
  avatar: string,
  email: string,
  restaurantID: string,
  position: string,
) => {
  const time = new Date();

  if (avatar === '') {
    avatar =
      'https://firebasestorage.googleapis.com/v0/b/restaurant-management-5b904.appspot.com/o/user.png?alt=media&token=a1a4d6a3-4086-46a6-8a74-dc1f85e5539d';
  }
  await firestore()
    .collection('users')
    .doc(uid)
    .set({
      restaurantID: restaurantID,
      position: position,
      name,
      avatar,
      coverImage:
        'https://firebasestorage.googleapis.com/v0/b/restaurant-management-5b904.appspot.com/o/1592983949079?alt=media&token=d97f9ef8-0421-4a9a-9694-74a3781ee277',
      status: 'ENABLED',
      email,
      startingDate: `${time.getDate()}/${
        time.getMonth() + 1
      }/${time.getFullYear()}`,
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
    name: position,
    url:
      'https://firebasestorage.googleapis.com/v0/b/restaurant-management-5b904.appspot.com/o/user.png?alt=media&token=a1a4d6a3-4086-46a6-8a74-dc1f85e5539d',
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

export const getUserInfo = async (uid?: string) => {
  const user = await firestore().collection('users').doc(uid).get();
  return user.data();
};

export const getProfile = async (uid?: string, setUser?: Function) => {
  await firestore()
    .collection('users')
    .doc(uid)
    .onSnapshot((documentSnapshot) => {
      setUser(documentSnapshot.data());
    });
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
        await createUser(uid, '', '', email, restaurantID, position);
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

export const getStatusAccount = async (uid: string, setStatus: Function) => {
  if (uid !== '') {
    firestore()
      .collection('users')
      .doc(uid)
      .onSnapshot((document) => {
        setStatus(document.data()?.status);
      });
  } else {
    setStatus('');
  }
};
