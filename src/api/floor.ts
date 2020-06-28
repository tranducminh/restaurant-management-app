import firestore from '@react-native-firebase/firestore';

export const createFloor = async (floor: string, restaurantID: string) => {
  await firestore().collection('floors').add({
    floor,
    numberOfTables: 0,
    restaurantID,
  });
};

export const getFloorList = async (
  setFloorList: Function,
  setIsLoading: Function,
  restaurantID: string,
) => {
  setIsLoading(true);
  firestore()
    .collection('floors')
    .where('restaurantID', '==', restaurantID)
    .onSnapshot((documentSnapshot) => {
      let result: { id: string; data: any }[] = [];
      documentSnapshot.forEach((document) => {
        result.push({
          id: document.id,
          data: document.data(),
        });
      });
      result.sort((a, b) => a.data.floor > b.data.floor);
      setFloorList(result);
      setIsLoading(false);
    });
};

export const removeFloor = async (floorID: string) => {
  let result = true;
  await firestore()
    .collection('tables')
    .where('floorID', '==', floorID)
    .where('status', '==', 'INUSE')
    .get()
    .then((documentSnapshot) => {
      if (documentSnapshot.size !== 0) {
        result = false;
      } else {
        firestore().collection('floors').doc(floorID).delete();
        result = true;
      }
    });
  return result;
};
