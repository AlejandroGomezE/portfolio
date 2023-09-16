/* Instruments */
import type { ReduxState } from '@/lib/redux';

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectSections = (state: ReduxState) => state.sections.sections;
export const selectVisibleSections = (state: ReduxState) => state.sections.visible;
export const selectFirstVisibleSection = (state: ReduxState) => state.sections.sectionsOrder[0];
export const selectLastVisibleSection = (state: ReduxState) => state.sections.sectionsOrder.at(-1);
export const selectSectionIsVisible = (state: ReduxState, key: string): boolean => state.sections.visible[key];
