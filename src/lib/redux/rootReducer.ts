/* Instruments */
import { expandableSlice, explorerSlice, sectionSlice } from './slices';

export const reducer = {
  expandable: expandableSlice.reducer,
  explorer: explorerSlice.reducer,
  sections: sectionSlice.reducer,
};
