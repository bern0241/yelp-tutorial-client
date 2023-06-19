import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import {useRestaurants} from '../context/RestaurantsContext.js'

import RestaurantFinder from '../apis/RestaurantFinder.js';
import UpdateRestaurant from '../components/UpdateRestaurant.js';

function UpdatePage() {
  // const {id} = useParams();
  // const [restaurants, setRestaurants] = useRestaurants();
  // const navigate = useNavigate();

  // const [name, setName] = useState('');
  // const [location, setLocation] = useState('');
  // const [priceRange, setPriceRange] = useState(0);

  // useEffect(() => {
  //   if (id) {
  //     const restaurant = restaurants.find(restaurant => restaurant.id === id);
  //     setName(restaurant.name);
  //     setLocation(restaurant.location);
  //     setPriceRange(restaurant.price_range);
  //   }
  // }, [])

  // async function saveUpdate(e) {
  //   e.preventDefault();
  //   try {
  //     const response = await RestaurantFinder.put(`/${id}`, {
  //     name: name,
  //     location: location,
  //     price_range: priceRange,
  //   })
  //   console.log(response);
  //   navigate('/');
      
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }

  return (
    <div>
        {/* <h1 className='display-5 font-weight-bold text-center'>Update Restaurant</h1> */}
        <h1 className='text-center mb-3'>Update Restaurant</h1>
        <UpdateRestaurant/>

        {/* <form action="">
          <div className='mb-3'>
            <label className='m-1 mb-2 fs-5' for="name">Name</label>
              <input id="name" className='form-control fs-5' type='text' value={name} onChange={(e) => setName(e.target.value)}  />
          </div>
          <div className='mb-3'>
            <label className='m-1 mb-2 fs-5' for="location">Location</label>
              <input id="location" className='form-control fs-5' type='text' value={location} onChange={(e) => setLocation(e.target.value)}  />
          </div>
          <div className='mb-3'>
            <label className='m-1 mb-2 fs-5' for="pricerange">Price Range (1-5)</label>
              <input id="pricerange" className='form-control fs-5' type='number' min={1} max={5} step={1} value={priceRange} onChange={(e) => setPriceRange(e.target.value)}  />
          </div>
          <button className='btn btn-primary' type='submit' onClick={(e) => saveUpdate(e)}>Submit</button>
        </form> */}

    </div>
  )
}

export default UpdatePage