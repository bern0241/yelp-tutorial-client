import React, {useState} from 'react';
import {Routes, Route } from 'react-router-dom'
// pages/routes
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';
import RestaurantDetailPage from './routes/RestaurantDetailPage';
//context
import { RestaurantContextProvider, useRestaurants } from './context/RestaurantsContext';
import { SelectedRestaurantContextProvider } from './context/SelectedRestaurantContext';

const App = () => {
    return (
        <SelectedRestaurantContextProvider>
        <RestaurantContextProvider>
        <div className='container'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/restaurants/:id/update' element={<UpdatePage />} />
                <Route path='/restaurants/:id' element={<RestaurantDetailPage />} />
            </Routes>
        </div>
        </RestaurantContextProvider>
        </SelectedRestaurantContextProvider>
    )
}

export default App;