import firestore from '@react-native-firebase/firestore';

export const getTableList = async (
  setTableList: Function,
  setIsLoading: Function,
  floor: string,
  restaurantID: string,
) => {
  setIsLoading(true);
  firestore()
    .collection('tables')
    .where('floor', '==', floor)
    .where('restaurantID', '==', restaurantID)
    .onSnapshot((documentSnapshot) => {
      let result: { id: string; data: any }[] = [];
      documentSnapshot.forEach((document) => {
        result.push({
          id: document.id,
          data: document.data(),
        });
      });
      setTableList(result);
      setIsLoading(false);
    });
};

export const getReadyTableList = async (
  setTableList: Function,
  setIsLoading: Function,
  floor: string,
  restaurantID: string,
) => {
  setIsLoading(true);
  firestore()
    .collection('tables')
    .where('floor', '==', floor)
    .where('restaurantID', '==', restaurantID)
    .where('status', '==', 'READY')
    .onSnapshot((documentSnapshot) => {
      let result: { id: string; data: any }[] = [];
      documentSnapshot.forEach((document) => {
        result.push({
          id: document.id,
          data: document.data(),
        });
      });
      setTableList(result);
      setIsLoading(false);
    });
};

export const getInUseTableList = async (
  setTableList: Function,
  setIsLoading: Function,
  floor: string,
  restaurantID: string,
) => {
  setIsLoading(true);
  firestore()
    .collection('tables')
    .where('floor', '==', floor)
    .where('restaurantID', '==', restaurantID)
    .where('status', '==', 'INUSE')
    .onSnapshot((documentSnapshot) => {
      let result: { id: string; data: any }[] = [];
      documentSnapshot.forEach((document) => {
        result.push({
          id: document.id,
          data: document.data(),
        });
      });
      setTableList(result);
      setIsLoading(false);
    });
};
