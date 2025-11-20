import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './features/table/tableSlice';

export const store = configureStore({
  reducer: {
    table: tableReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // For non-serializable data if needed
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
