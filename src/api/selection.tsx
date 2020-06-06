import firestore from '@react-native-firebase/firestore';

export const chooseFood = async (
  tableId: string,
  foodId: string,
  url: string,
  foodName: string,
  price: number,
) => {
  firestore().collection('selections').add({
    tableId,
    foodId,
    quantity: 1,
    url,
    foodName,
    price,
  });
};

export const getOrderListByTableId = async (
  tableId: string,
  setOrderList: Function,
  setTotal: Function,
) => {
  firestore()
    .collection('selections')
    .where('tableId', '==', tableId)
    .onSnapshot((documentSnapshot) => {
      let result: { id: string; data: any }[] = [];
      let total = 0;
      documentSnapshot.forEach((document) => {
        result.push({
          id: document.id,
          data: document.data(),
        });
        total += document.data().price;
      });
      setOrderList(result);
      setTotal(total);
    });
};
