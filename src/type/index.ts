export type floorType = {
  id: string;
  data: {
    floor: string;
    numberOfTables: number;
    restaurantID: string;
  };
};

export type foodType = {
  id: string;
  data: {
    description: string;
    foodName: string;
    foodType: typeOfFood;
    price: number;
    restaurantID: string;
    url: string;
  };
};

enum typeOfFood {
  'Appetizers',
  'MainDishes',
  'Desserts',
  'Drinks',
  'Fruits',
}

export type restaurantType = {
  id: string;
  data: {
    address: string;
    hostID: string;
    name: string;
  };
};

export type selectionType = {
  id: string;
  data: {
    foodId: string;
    foodName: string;
    price: number;
    quantity: number;
    tableId: string;
    tableName: string;
    url: string;
  };
};

export type tableType = {
  id: string;
  data: {
    capacity: string;
    floor: string;
    floorID: string;
    restaurantID: string;
    status: string;
    tableName: string;
  };
};

export type userType = {
  id: string;
  data: {
    email: string;
    name: string;
    position: string;
    restaurantID: string;
    status: string;
    avatar: string;
    coverImage: string;
    startingDate: string;
  };
};

export type userInfoType = {
  email: string;
  name: string;
  position: string;
  restaurantID: string;
  status: string;
  avatar: string;
  coverImage: string;
  startingDate: string;
};

export enum typeOfUser {
  'ENABLED',
  'DISABLED',
}

export type orderType = {
  id: string;
  data: {
    foodId: string;
    foodName: string;
    price: number;
    quantity: number;
    restaurantID: string;
    status: typeOfOrder;
    tableId: string;
    tableName: string;
    url: string;
  };
};

enum typeOfOrder {
  'UNCOOKED',
  'COOKING',
  'READY',
  'SERVED',
}

export type cookingOrderType = {
  id: string;
  data: {
    orderID: string;
    chefID: string;
    url: string;
    foodName: string;
    quantity: number;
    tableName: string;
  };
};
