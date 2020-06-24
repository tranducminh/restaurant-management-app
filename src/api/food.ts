import firestore from '@react-native-firebase/firestore';
import { uploadImage } from './image';

export const addFood = async (
  restaurantID: string,
  foodName: string,
  price: string,
  description: string,
  foodType: string,
  url: string,
) => {
  const downloadUrl = await uploadImage(url);
  if (downloadUrl === false) {
    return false;
  } else {
    firestore()
      .collection('foods')
      .add({
        restaurantID,
        foodName,
        description,
        foodType,
        price: parseInt(price, 10),
        url: downloadUrl,
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  }
  return true;
};
// export const getFoodTypes = async (restaurantID: string) => {
//   firestore()
//     .collection('restaurants')
//     .doc(restaurantID)
//     .onSnapshot((data) => {
//       return data.data().foodTypes;
//     });
// };

export const getFoodListByType = async (
  setIsLoading: Function,
  setFoodList: Function,
  restaurantID: string,
  foodType: string,
) => {
  setIsLoading(true);
  firestore()
    .collection('foods')
    .where('restaurantID', '==', restaurantID)
    .where('foodType', '==', foodType)
    .onSnapshot((documentSnapshot) => {
      let result: { id: string; data: any }[] = [];
      documentSnapshot.forEach((document) => {
        result.push({
          id: document.id,
          data: document.data(),
        });
      });
      setFoodList(result);
      setIsLoading(false);
    });
};

export const removeFood = async (foodId: string) => {
  await firestore().collection('foods').doc(foodId).delete();
};
