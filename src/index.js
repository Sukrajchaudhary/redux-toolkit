import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './slices/accountSlices'
import bonusReducers from './slices/BonusSlices'
import CRUDslices from './slices/CRUDslices';
import { Provider } from 'react-redux';
import { adminApi } from './api/adminSlices';
const store=configureStore({
  reducer:{
    account:accountReducer,
    bonus:bonusReducers,
    CRUD:CRUDslices,
   [adminApi.reducerPath]:adminApi.reducer
  },
  middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware().concat(adminApi.middleware),
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <App />
   </Provider>
  </React.StrictMode>
);

