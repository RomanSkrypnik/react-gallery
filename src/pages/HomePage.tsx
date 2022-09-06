import React, { useEffect } from 'react';
import { useAppDispatch } from '../hooks';
import { fetchImages } from '../store/slices/gallery';
import { useAppSelector } from '../hooks/useAppSelector';

export const HomePage = () => {

    const dispatch = useAppDispatch();

    const { items } = useAppSelector(state => state.gallery);

    useEffect(() => {
        dispatch(fetchImages());
    }, []);

    return (
        <section className='home'>
            {
                items.map(({ urls }) => <img src={urls.small} alt='' />)
            }
        </section>
    );
};
