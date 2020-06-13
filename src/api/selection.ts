import firestore from '@react-native-firebase/firestore';

export const chooseFood = async (
  tableId: string,
  foodId: string,
  tableName: string,
  url: string,
  foodName: string,
  price: number,
) => {
  await firestore().collection('selections').add({
    tableId,
    foodId,
    tableName,
    quantity: 1,
    url,
    foodName,
    price,
  });
};

export const updateQuantityOfSelection = async (
  selectionId: string,
  quantity: number,
  price: number,
  status: string,
) => {
  if (status === 'ASC') {
    price = (price / quantity) * (quantity + 1);
    quantity += 1;
  } else if (status === 'DESC') {
    price = (price / quantity) * (quantity - 1);
    quantity -= 1;
  }
  await firestore()
    .collection('selections')
    .doc(selectionId)
    .update({ quantity, price });
};

export const getSelectionListByTableId = async (
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

export const removeSelection = async (selectionId: string) => {
  await firestore()
    .collection('selections')
    .doc(selectionId)
    .delete()
    .then(() => {
      console.log('selection was deleted');
    });
};
