'use client';

/* Core */
import { Provider } from 'react-redux';

/* Instruments */
import { reduxStore } from '@/lib/redux';

export const Providers = (props) => {
  return <Provider store={reduxStore}>{props.children}</Provider>;
};
