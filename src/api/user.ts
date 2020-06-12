import firestore from '@react-native-firebase/firestore';

export const getEmployeeList = async (
  restaurantID: string,
  setEmployeeList: Function,
) => {
  firestore()
    .collection('users')
    .where('restaurantID', '==', restaurantID)
    .onSnapshot((documentSnapshot) => {
      let result: { id: string; data: any }[] = [];
      documentSnapshot.forEach((document) => {
        if (document.data().position !== 'HOST') {
          result.push({
            id: document.id,
            data: document.data(),
          });
        }
      });
      setEmployeeList(result);
    });
};
