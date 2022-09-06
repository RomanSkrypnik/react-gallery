export interface GalleryState {
    items: ImageDto[];
    item: ImageDto | null;
}

export interface ImageDto {
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
        small_s3: string;
    },
    user: {
        username: string;
    }
}
