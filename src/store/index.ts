import { configureStore } from '@reduxjs/toolkit';
import gallery from './slices/gallery';

const store = configureStore({
    reducer: {
        gallery,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store;
