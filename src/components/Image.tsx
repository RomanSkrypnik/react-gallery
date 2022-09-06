import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useImageLoad } from '../hooks';
import { Preloader } from './Preloader';

interface Props {
    id: string;
    name: string;
    description: string | null;
    src: string;
}

export const Image: FC<Props> = ({ id, description, name, src }) => {
    const { handleLoad, loaded } = useImageLoad();

    return (
        <NavLink to={id} className='image'>
            <figure className='image__figure'>
                <img onLoad={handleLoad} width={400} height={600} src={src} alt='' />
                <figcaption className='image__figcaption'>
                    <h2>Author: {name}</h2>
                    {description && <h3 className='image__desc'>{description}</h3>}
                </figcaption>
            </figure>
            {
                !loaded && <Preloader />
            }
        </NavLink>
    );
};
