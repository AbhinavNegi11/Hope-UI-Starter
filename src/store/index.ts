import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import settingReducer from './setting/reducers';
export const store = () => configureStore({
  reducer: {
    setting: settingReducer
  }
});


export const wrapperStore = createWrapper(store);