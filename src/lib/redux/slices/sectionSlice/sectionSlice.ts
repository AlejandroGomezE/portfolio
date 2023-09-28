import { createSlice, current, type PayloadAction } from '@reduxjs/toolkit';

export interface Section {
  index: number;
  id: string;
  title: string;
}

interface ObjectLiteral {
  [key: string]: boolean;
}

interface SectionState {
  sections: Section[];
  sectionsOrder: Section[];
  visible: ObjectLiteral;
}

const initialState: SectionState = {
  sections: [],
  sectionsOrder: [],
  visible: {},
};

export const sectionSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    setSections: (state, action: PayloadAction<{ sections: Section[] }>) => {
      return {
        sections: action.payload.sections as Section[],
        sectionsOrder: state.sectionsOrder,
        visible: state.visible,
      };
    },
    resetVisible: (state) => {
      return {
        sections: state.sections,
        sectionsOrder: [],
        visible: {},
      };
    },
    setVisible: (state, action: PayloadAction<{ key: string }>) => {
      let item = current(state.sections).find((val) => val.id === action.payload.key) as Section;
      let newArr = [...current(state.sectionsOrder)] as Section[];
      if (newArr.length === 0) {
        newArr.push(item);
      } else if (newArr[0].index > item.index) {
        newArr.splice(0, 0, item);
      } else {
        //Insert before items with lower index value in Section[]
        let i = 1;
        while (i < newArr.length && newArr[i].index < item.index) {
          i++;
        }
        newArr.splice(i, 0, item);
      }
      return {
        sections: state.sections,
        sectionsOrder: newArr,
        visible: {
          ...state.visible,
          [action.payload.key]: true,
        },
      };
    },
    setHidden: (state, action: PayloadAction<{ key: string }>) => {
      let newArr = [...current(state.sectionsOrder)] as Section[];
      let itemIndex = newArr.findIndex((val) => val.id === action.payload.key);
      //Insert before items with lower index value in Section[]
      if (itemIndex !== undefined) {
        newArr.splice(itemIndex, 1);
      }
      return {
        sections: state.sections,
        sectionsOrder: newArr,
        visible: {
          ...state.visible,
          [action.payload.key]: false,
        },
      };
    },
  },
});
