import $api from '../http';
import { ImageDto } from '../ts';

export class GalleryService {

    static async getImages() {
        return await $api.get<ImageDto[]>('/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9');
    }

    static async getImage(id: string) {
        return await $api.get<ImageDto>(`/photos/${id}/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9`);
    }

}
