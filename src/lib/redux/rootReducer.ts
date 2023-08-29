/* Instruments */
import { expandableSlice, explorerSlice } from './slices';

export const reducer = {
  expandable: expandableSlice.reducer,
  explorer: explorerSlice.reducer,
};
