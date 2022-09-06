import React, { useEffect } from 'react';
import { useAppDispatch } from '../hooks';
import { fetchImages } from '../store/slices/gallery';
import { useAppSelector } from '../hooks/useAppSelector';
import { Image } from '../components';

export const HomePage = () => {

    const dispatch = useAppDispatch();

    const { items } = useAppSelector(state => state.gallery);

    useEffect(() => {
        dispatch(fetchImages());
    }, []);

    return (
        <section className='home'>
            {
                items.map(({ urls, id, description, user: { username } }) =>
                    <Image description={description} name={username} src={urls.small} id={id} key={id} />,
                )
            }
        </section>
    );
};
