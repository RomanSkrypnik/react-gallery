import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GalleryState, ImageDto } from '../../ts';

export const fetchImages = createAsyncThunk(
    'gallery/fetchImages',
    async (_, { dispatch }) => {
        try {

        } catch (e) {
            throw e;
        }
    },
);

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
