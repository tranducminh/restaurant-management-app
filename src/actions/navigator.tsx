import { createAction } from '@reduxjs/toolkit';
const setNavigator = createAction<string, 'SET_NAVIGATOR'>('SET_NAVIGATOR');

const navigator = {
  setNavigator,
};

export default navigator;
