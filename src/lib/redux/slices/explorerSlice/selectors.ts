/* Instruments */
import type { ReduxState } from '@/lib/redux';

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectEditor = (state: ReduxState) => state.explorer.editor;
export const selectPortfolio = (state: ReduxState) => state.explorer.portfolio;
export const selectOutline = (state: ReduxState) => state.explorer.outline;
export const selectTimeline = (state: ReduxState) => state.explorer.timeline;
export const selectScripts = (state: ReduxState) => state.explorer.scripts;
export const selectInitialLoad = (state: ReduxState) => state.explorer.initial;