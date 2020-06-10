import firestore from '@react-native-firebase/firestore';

export const createTable = async (
  floor: string,
  tableName: string,
  capacity: string,
  restaurantID: string,
  floorID: string,
) => {
  await firestore()
    .collection('tables')
    .add({
      restaurantID,
      status: 'READY',
      floor,
      tableName,
      capacity,
      floorID,
    })
    .then(() => {
      console.log('Table was added!');
    });
  const totalTable = await firestore()
    .collection('floors')
    .doc(floorID)
    .get()
    .then((data) => {
      return data.data().numberOfTables;
    });
  await firestore()
    .collection('floors')
    .doc(floorID)
    .update({
      numberOfTables: totalTable + 1,
    });
};

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

export const orderTable = async (tableID: string) => {
  await firestore().collection('tables').doc(tableID).update({
    status: 'INUSE',
  });
};

export const returnTable = async (tableID: string) => {
  await firestore().collection('tables').doc(tableID).update({
    status: 'READY',
  });
};

// export const getTableDetail = async (tableID: string) => {
//   return await firestore().collection('tables').doc(tableID).get();
// };

export const removeTable = async (
  tableID: string,
  status: string,
  floorID: string,
) => {
  if (status === 'READY') {
    await firestore()
      .collection('tables')
      .doc(tableID)
      .delete()
      .then(() => console.log('Table was removed'));
    const totalTable = await firestore()
      .collection('floors')
      .doc(floorID)
      .get()
      .then((data) => {
        return data.data().numberOfTables;
      });
    await firestore()
      .collection('floors')
      .doc(floorID)
      .update({
        numberOfTables: totalTable - 1,
      });
  }
};

// export const updateTable = async (
//   tableID: string,
//   floor: string,
//   tableName: string,
//   capacity: string,
// ) => {
//   await firestore()
//     .collection('tables')
//     .doc(tableID)
//     .update({ floor, tableName, capacity })
//     .then(() => {
//       console.log('Table was updated');
//     });
// };
