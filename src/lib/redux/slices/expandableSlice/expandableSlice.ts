/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// Menu enums
export enum Menu {
  EXPLORER = 'explorer',
  SEARCH = 'search',
  SOURCE_CONTROL = 'source-control',
  DEBUG = 'debug',
  EXTENSIONS = 'extensions',
}

const initialState: ExpandableSliceState = {
  value: true,
  menu: Menu.EXPLORER,
};

export const expandableSlice = createSlice({
  name: 'expandable',
  initialState,
  reducers: {
    toggleMenu: (
      state,
      action: PayloadAction<{
        menu: Menu;
      }>
    ) => {
      if (!state.value) {
        state.value = true;
        state.menu = action.payload.menu;
      } else if (state.menu === action.payload.menu) {
        state.value = false;
      } else {
        state.menu = action.payload.menu;
      }
    },
  },
});

/* Types */
export interface ExpandableSliceState {
  value: boolean;
  menu: Menu;
}
