/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// SubMenu enums
export enum SubMenu {
  EDITOR = 'editor',
  PORTFOLIO = 'portfolio',
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

      if (state[action.payload.subMenu].open) {
        if (action.payload.subMenu === SubMenu.EDITOR) {
          state.editor.overflowY = 'hidden' as const;
          state.editor.maxHeight = '0px';

          const subMenuPortafolio = document.getElementById('subMenu-' + SubMenu.PORTFOLIO) as HTMLDivElement;
          if (state.portfolio.open) {
            subMenuPortafolio.style.height = subMenuPortafolio.scrollHeight + 100 + 'px';
            subMenuPortafolio.style.maxHeight = subMenuPortafolio.scrollHeight + 100 + 'px';
          }
        } else if (action.payload.subMenu === SubMenu.PORTFOLIO) {
          state.portfolio.overflowY = 'hidden' as const;
          state.portfolio.height = '0px';
          state.portfolio.maxHeight = '0px';
        }
      } else {
        const contentNodes = subMenusContainer.children;
        let contentHeight = 0;

        for (let i = 0; i < contentNodes.length; i++) {
          let a = contentNodes.item(i) as HTMLDivElement;
          // Add scrollHeight + top Border Width
          contentHeight += a.scrollHeight + Number(getComputedStyle(a, null).borderTop.split('px')[0]);
        }

        const availableHeight = subMenusContainer.scrollHeight - contentHeight;

        if (action.payload.subMenu === SubMenu.EDITOR) {
          state.editor.maxHeight = '100px';

          const subMenuPortafolio = document.getElementById('subMenu-' + SubMenu.PORTFOLIO) as HTMLDivElement;
          if (state.portfolio.open) {
            if (!state.editor.open) {
              state.portfolio.maxHeight = subMenuPortafolio.scrollHeight - 100 + 'px';
            }
          }
        } else if (action.payload.subMenu === SubMenu.PORTFOLIO) {
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
}
