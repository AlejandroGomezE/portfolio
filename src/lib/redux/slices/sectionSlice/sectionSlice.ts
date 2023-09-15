import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Section {
  id: string;
  title: string;
  offsetRem?: number;
  tag?: string;
  headingRef?: React.RefObject<HTMLHeadingElement>;
}

interface ObjectLiteral {
  [key: string]: boolean;
}

interface SectionState {
  sections: Section[];
  visible: ObjectLiteral;
}

const initialState: SectionState = {
  sections: [],
  visible: {},
};

export const sectionSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    setSections: (state, action: PayloadAction<{ sections: Section[] }>) => {
      return {
        sections: action.payload.sections as Section[],
        visible: state.visible,
      };
    },
    setVisible: (state, action: PayloadAction<{ key: string }>) => {
      return {
        sections: state.sections,
        visible: {
          ...state.visible,
          [action.payload.key]: true,
        },
      };
    },
    setHidden: (state, action: PayloadAction<{ key: string }>) => {
      return {
        sections: state.sections,
        visible: {
          ...state.visible,
          [action.payload.key]: false,
        },
      };
    },
  },
});
