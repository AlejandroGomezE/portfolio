/* Instruments */
import { expandableSlice, explorerSlice, sectionSlice, tabsSlice } from './slices';

export const reducer = {
  expandable: expandableSlice.reducer,
  explorer: explorerSlice.reducer,
  sections: sectionSlice.reducer,
  tabs: tabsSlice.reducer,
};
