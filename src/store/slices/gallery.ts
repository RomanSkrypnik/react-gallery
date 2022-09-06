import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GalleryState, ImageDto } from '../../ts';
import { GalleryService } from '../../services';

export const fetchImages = createAsyncThunk(
    'gallery/fetchImages',
    async (_, { dispatch }) => {
        try {
            const { data } = await GalleryService.getImages();
            dispatch(setItems(data));
        } catch (e) {
            throw e;
        }
    },
);

export const fetchImage = createAsyncThunk(
    'gallery/fetchImage',
    async (id: string, { dispatch }) => {
        try {
            const { data } = await GalleryService.getImage(id);
            dispatch(setItem(data));
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

        setItem(state, { payload }: PayloadAction<ImageDto | null>) {
            state.item = payload;
        },

    },
});

export const { setItems, setItem } = gallerySlice.actions;
export default gallerySlice.reducer;
