import firestore from '@react-native-firebase/firestore';

export const createOrder = async (
  restaurantID: string,
  tableId: string,
  tableName: string,
  foodId: string,
  foodName: string,
  price: number,
  quantity: number,
  url: string,
) => {
  await firestore().collection('orders').add({
    restaurantID,
    tableId,
    tableName,
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

export const getUnCookedOrderList = async (
  restaurantID: string,
  setOrderList: Function,
) => {
  firestore()
    .collection('orders')
    .where('restaurantID', '==', restaurantID)
    .where('status', '==', 'UNCOOKED')
    .onSnapshot((documentSnapshot) => {
      let result: { id: string; data: any }[] = [];
      documentSnapshot.forEach((document) => {
        result.push({
          id: document.id,
          data: document.data(),
        });
      });
      setOrderList(result);
    });
};

export const getReadyOrderList = async (
  restaurantID: string,
  setOrderList: Function,
) => {
  firestore()
    .collection('orders')
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
      setOrderList(result);
    });
};

export const setOrderStatusToCooking = async (orderID: string) => {
  firestore().collection('orders').doc(orderID).update({ status: 'COOKING' });
};

export const setOrderStatusToReady = async (orderID: string) => {
  firestore().collection('orders').doc(orderID).update({ status: 'READY' });
};

export const setOrderStatusToServed = async (orderID: string) => {
  firestore().collection('orders').doc(orderID).update({ status: 'SERVED' });
};

export const createCookingOrder = async (
  orderID: string,
  chefID: string,
  url: string,
  foodName: string,
  quantity: number,
  tableName: string,
) => {
  firestore().collection('cooking_orders').add({
    chefID,
    orderID,
    url,
    foodName,
    quantity,
    tableName,
  });
};

export const removeCookingOrder = async (orderID: string) => {
  firestore().collection('cooking_orders').doc(orderID).delete();
};

export const getCookingOrderListByChefID = (
  chefID: string,
  setOrderList: Function,
) => {
  firestore()
    .collection('cooking_orders')
    .where('chefID', '==', chefID)
    .onSnapshot((documentSnapshot) => {
      let result: { id: string; data: any }[] = [];
      documentSnapshot.forEach((document) => {
        result.push({
          id: document.id,
          data: document.data(),
        });
      });
      setOrderList(result);
    });
};
