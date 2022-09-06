import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchImage, setItem } from '../store/slices/gallery';
import { Preloader } from '../components';

export const SinglePage = () => {
    const { id } = useParams();

    const dispatch = useAppDispatch();

    useEffect(() => {
        id && dispatch(fetchImage(id));
        return () => {
            dispatch(setItem(null));
        };
    }, [id]);

    const { item } = useAppSelector(state => state.gallery);

    return (
        <section className='single'>
            {
                item ?
                    <img className='single__image' src={item.urls.full} alt='' />
                    :
                    <Preloader />
            }
        </section>
    );
};
