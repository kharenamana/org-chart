// import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// interface UIState {
//   selectedEmployeeId: string | null;
//   zoom: number;
// }

// const initialState: UIState = {
//   selectedEmployeeId: null,
//   zoom: 100,
// };

// const uiSlice = createSlice({
//   name: 'ui',
//   initialState,
//   reducers: {
//     setSelectedEmployee(state, action: PayloadAction<string | null>) {
//       state.selectedEmployeeId = action.payload;
//     },
//     setZoom(state, action: PayloadAction<number>) {
//       state.zoom = action.payload;
//     },
//   },
// });

// export const { setSelectedEmployee, setZoom } = uiSlice.actions;
// export default uiSlice.reducer;

'use client';

import { Provider } from 'react-redux';
import { store } from '@/store';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
