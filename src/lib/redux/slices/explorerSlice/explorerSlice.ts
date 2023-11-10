/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// SubMenu enums
export enum SubMenu {
  EDITOR = 'editor',
  PORTFOLIO = 'portfolio',
  OUTLINE = 'outline',
  TIMELINE = 'timeline',
  SCRIPTS = 'scripts',
}

const initialState: ExplorerSliceState = {
  initial: true,
  editor: {
    open: false,
    maxHeight: '0px',
  },
  portfolio: {
    open: false,
    height: '0px',
    maxHeight: '0px',
  },
  outline: {
    open: false,
    maxHeight: '0px',
  },
  timeline: {
    open: false,
    maxHeight: '0px',
  },
  scripts: {
    open: false,
    maxHeight: '0px',
  },
};

export const explorerSlice = createSlice({
  name: 'explorer',
  initialState,
  reducers: {
    setInitialLoad: (state) => {
      state.initial = false;
    },
    toggleMenu: (
      state,
      action: PayloadAction<{
        subMenu: SubMenu;
      }>
    ) => {
      const subMenusContainer = document.getElementById('subMenusContainer') as HTMLDivElement;
      const subMenuEditor = document.getElementById('subMenu-' + SubMenu.EDITOR) as HTMLDivElement;
      const subMenuPortafolio = document.getElementById('subMenu-' + SubMenu.PORTFOLIO) as HTMLDivElement;

      if (state[action.payload.subMenu].open) {
        if (action.payload.subMenu === SubMenu.EDITOR) {
          let editorsScrollHeight = subMenuEditor.clientHeight;
          state.editor.maxHeight = '0px';

          if (state.portfolio.open) {
            state.portfolio.height = subMenuPortafolio.clientHeight + editorsScrollHeight + 'px';
            state.portfolio.maxHeight = subMenuPortafolio.scrollHeight + editorsScrollHeight + 'px';
          }
        } else if (action.payload.subMenu === SubMenu.PORTFOLIO) {
          state.portfolio.height = '0px';
          state.portfolio.maxHeight = '0px';
        }
      } else {
        if (action.payload.subMenu === SubMenu.EDITOR) {
          let newHeight = subMenuPortafolio.clientHeight;

          if (subMenuEditor.scrollHeight > 100) {
            state.editor.maxHeight = '100px';
            newHeight = newHeight - 100;
          } else {
            state.editor.maxHeight = subMenuEditor.scrollHeight + 'px';
            newHeight -= subMenuEditor.scrollHeight;
          }

          if (state.portfolio.open) {
            state.portfolio.maxHeight = newHeight + 'px';
            state.portfolio.height = newHeight + 'px';
          }
        } else if (action.payload.subMenu === SubMenu.PORTFOLIO) {
          const contentNodes = subMenusContainer.children;
          let contentHeight = 0;

          for (let i = 0; i < contentNodes.length; i++) {
            let a = contentNodes.item(i) as HTMLDivElement;
            // Add scrollHeight + top Border Width
            contentHeight += a.scrollHeight + Number(getComputedStyle(a, null).borderTop.split('px')[0]);
          }

          const availableHeight = subMenusContainer.scrollHeight - contentHeight;

          state.portfolio.height = availableHeight + 'px';
          state.portfolio.maxHeight = availableHeight + 'px';
        }
      }

      if (action.payload.subMenu === SubMenu.EDITOR) {
        state.editor.open = !state.editor.open;
      } else if (action.payload.subMenu === SubMenu.PORTFOLIO) {
        state.portfolio.open = !state.portfolio.open;
      }
    },
  },
});

/* Types */
export interface ExplorerSliceState {
  initial: boolean;
  editor: {
    open: boolean;
    maxHeight: string;
  };
  portfolio: {
    open: boolean;
    height: string;
    maxHeight: string;
  };
  outline: {
    open: boolean;
    maxHeight: string;
  };
  timeline: {
    open: boolean;
    maxHeight: string;
  };
  scripts: {
    open: boolean;
    maxHeight: string;
  };
}
