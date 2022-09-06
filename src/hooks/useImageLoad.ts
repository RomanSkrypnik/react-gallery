import { useState } from 'react';

export const useImageLoad = () => {
    const [loaded, setLoaded] = useState(false);

    const handleLoad = () => {
        setLoaded(true);
    };

    return { loaded, handleLoad };
};
