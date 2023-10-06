/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
// Tab Data
export type TabData = {
  href: string;
  title: string;
  type: string;
};

// Tabs
interface OpenTabs {
  current: string;
  open: TabData[];
}

const initialState: OpenTabs = {
  current: '',
  open: [],
};

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setCurrentTab: (
      state,
      action: PayloadAction<{
        current: TabData;
      }>
    ) => {
      state.current = action.payload.current.href;
      if (!state.open.find((tab) => tab.href === action.payload.current.href)) {
        state.open.push(action.payload.current);
      }
    },
    closeTab: (
      state,
      action: PayloadAction<{
        href: string;
      }>
    ) => {
      if (state.current === action.payload.href && state.open.length === 1) {
        return;
      } else if (state.current !== action.payload.href) {
        state.open = state.open.filter((tab) => tab.href !== action.payload.href);
      } else {
        const index = state.open.findIndex((tab) => tab.href === action.payload.href);
        if (index > 0) {
          state.current = state.open[index - 1].href;
        } else {
          state.current = state.open[index + 1].href;
        }
        state.open = state.open.filter((tab) => tab.href !== action.payload.href);
      }
    },
  },
});
