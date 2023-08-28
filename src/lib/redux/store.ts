/* Core */
import { configureStore } from '@reduxjs/toolkit';
import { useSelector as useReduxSelector, useDispatch as useReduxDispatch, type TypedUseSelectorHook } from 'react-redux';

/* Instruments */
import { reducer } from './rootReducer';

export const reduxStore = configureStore({
  reducer,
});

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatch = typeof reduxStore.dispatch;
