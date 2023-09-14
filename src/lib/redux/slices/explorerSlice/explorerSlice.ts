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
  editor: {
    open: false,
    maxHeight: '0px',
    overflowY: 'hidden',
  },
  portfolio: {
    open: false,
    height: '0px',
    maxHeight: '0px',
    overflowY: 'hidden',
  },
  outline: {
    open: false,
    maxHeight: '0px',
    overflowY: 'hidden',
  },
  timeline: {
    open: false,
    maxHeight: '0px',
    overflowY: 'hidden',
  },
  scripts: {
    open: false,
    maxHeight: '0px',
    overflowY: 'hidden',
  },
};

export const explorerSlice = createSlice({
  name: 'explorer',
  initialState,
  reducers: {
    overFlowYAuto: (state, action: PayloadAction<{ subMenu: SubMenu }>) => {
      if (action.payload.subMenu === SubMenu.EDITOR) {
        state.editor.overflowY = 'auto' as const;
      } else if (action.payload.subMenu === SubMenu.PORTFOLIO) {
        state.portfolio.overflowY = 'auto' as const;
      }
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
          state.editor.overflowY = 'hidden' as const;
          state.editor.maxHeight = '0px';

          if (state.portfolio.open) {
            state.portfolio.height = subMenuPortafolio.clientHeight + editorsScrollHeight + 'px';
            state.portfolio.maxHeight = subMenuPortafolio.scrollHeight + editorsScrollHeight + 'px';
          }
        } else if (action.payload.subMenu === SubMenu.PORTFOLIO) {
          state.portfolio.overflowY = 'hidden' as const;
          state.portfolio.height = '0px';
          state.portfolio.maxHeight = '0px';
        }
      } else {
        if (action.payload.subMenu === SubMenu.EDITOR) {
          let newHeight = subMenuPortafolio.scrollHeight;

          if (subMenuEditor.scrollHeight > 100) {
            state.editor.maxHeight = '100px';
            newHeight = newHeight - 100;
          } else {
            state.editor.maxHeight = subMenuEditor.scrollHeight + 'px';
            newHeight = newHeight - subMenuEditor.scrollHeight;
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
  editor: {
    open: boolean;
    maxHeight: string;
    overflowY: 'auto' | 'hidden';
  };
  portfolio: {
    open: boolean;
    height: string;
    maxHeight: string;
    overflowY: 'auto' | 'hidden';
  };
  outline: {
    open: boolean;
    maxHeight: string;
    overflowY: 'auto' | 'hidden';
  };
  timeline: {
    open: boolean;
    maxHeight: string;
    overflowY: 'auto' | 'hidden';
  };
  scripts: {
    open: boolean;
    maxHeight: string;
    overflowY: 'auto' | 'hidden';
  };
}
