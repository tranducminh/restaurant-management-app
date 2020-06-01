import firestore from '@react-native-firebase/firestore';

export const getFloorList = async (
  setFloorList: Function,
  setIsLoading: Function,
  restaurantID: string,
) => {
  setIsLoading(true);
  firestore()
    .collection('floors')
    .orderBy('floor', 'asc')
    .onSnapshot((documentSnapshot) => {
      let result = [];
      documentSnapshot.forEach((document) => {
        result.push({
          id: document.id,
          data: document.data(),
        });
      });
      setFloorList(result);
      setIsLoading(false);
    });
};
