import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import gallery from './slices/gallery';

const store = configureStore({
    reducer: {
        gallery,
    },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
