import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Section {
  id: string;
  title: string;
  offsetRem?: number;
  tag?: string;
  headingRef?: React.RefObject<HTMLHeadingElement>;
}

interface SectionState {
  sections: Section[];
  visibleSections: string[];
}

const initialState: SectionState = {
  sections: [],
  visibleSections: [],
};

export const sectionSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    setVisibleSections: (state, action: PayloadAction<{ visibleSections: string[] }>) => {
      state.visibleSections = action.payload.visibleSections;
    },
    registerHeading(state, action: PayloadAction<{ id: string; ref: React.RefObject<HTMLHeadingElement>; offsetRem: number }>) {
      return {
        visibleSections: state.visibleSections,
        sections: state.sections.map((section) => {
          if (section.id === action.payload.id) {
            return {
              ...section,
              headingRef: action.payload.ref,
              offsetRem: action.payload.offsetRem,
            };
          }
          return section;
        }) as Section[],
      };
    },
  },
});
