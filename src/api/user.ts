import firestore from '@react-native-firebase/firestore';

export const getEnabledEmployeeList = async (
  restaurantID: string,
  setEmployeeList: Function,
) => {
  firestore()
    .collection('users')
    .where('restaurantID', '==', restaurantID)
    .where('status', '==', 'ENABLED')
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

export const getDisabledEmployeeList = async (
  restaurantID: string,
  setEmployeeList: Function,
) => {
  firestore()
    .collection('users')
    .where('restaurantID', '==', restaurantID)
    .where('status', '==', 'DISABLED')
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

export const getPendingEmployeeList = async (
  restaurantID: string,
  setEmployeeList: Function,
) => {
  firestore()
    .collection('temp_users')
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

export const removePendingEmployee = async (employeeID: string) => {
  firestore().collection('temp_users').doc(employeeID).delete();
};

export const disableEmployee = async (employeeID: string) => {
  firestore()
    .collection('users')
    .doc(employeeID)
    .update({ status: 'DISABLED' });
};

export const enableEmployee = async (employeeID: string) => {
  firestore().collection('users').doc(employeeID).update({
    status: 'ENABLED',
  });
};
