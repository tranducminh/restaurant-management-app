import firestore from '@react-native-firebase/firestore';

export const createOrder = async (
  tableId: string,
  foodId: string,
  foodName: string,
  price: number,
  quantity: number,
  url: string,
) => {
  await firestore().collection('orders').add({
    tableId,
    foodId,
    foodName,
    price,
    quantity,
    url,
    status: 'UNCOOKED',
  });
};

export const getOrderListByTableId = async (
  tableId: string,
  setOrderList: Function,
  setPayment: Function,
) => {
  firestore()
    .collection('orders')
    .where('tableId', '==', tableId)
    .onSnapshot((documentSnapshot) => {
      let result: { id: string; data: any }[] = [];
      let total: number = 0;
      documentSnapshot.forEach((document) => {
        result.push({
          id: document.id,
          data: document.data(),
        });
        total += document.data().price;
      });
      setPayment(total);
      setOrderList(result);
    });
};

export const removeOrder = async (orderId: string) => {
  firestore()
    .collection('orders')
    .doc(orderId)
    .delete()
    .then(() => {
      console.log('order was removed');
    });
};
