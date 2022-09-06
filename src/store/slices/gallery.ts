import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GalleryState, ImageDto } from '../../ts';

const initialState: GalleryState = {
    items: [],
    item: null,
};

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {

        setItems(state, { payload }: PayloadAction<ImageDto[]>) {
            state.items = payload;
        },

        setItem(state, { payload }: PayloadAction<ImageDto>) {
            state.item = payload;
        },

    },
});

export const { setItems, setItem } = gallerySlice.actions;
export default gallerySlice.reducer;
