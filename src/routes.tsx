import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, SinglePage } from './pages';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/:id' element={<SinglePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
