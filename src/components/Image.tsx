import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
    id: string;
    name: string;
    description: string | null;
    src: string;
}

export const Image: FC<Props> = ({ id, description, name, src }) => {
    return (
        <NavLink className='image' to={id} key={id}>
            <figure className='image__figure'>
                <img src={src} alt='' />
                <figcaption className='image__figcaption'>
                    <h2>Author: {name}</h2>
                    {description && <h3>{description}</h3>}
                </figcaption>
            </figure>
        </NavLink>
    );
};
