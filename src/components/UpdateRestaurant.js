import React, { useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';
// import {useRestaurants} from '../context/RestaurantsContext.js'

function UpdateRestaurant() {
    const {id} = useParams();
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [priceRange, setPriceRange] = useState(1);
    const navigate = useNavigate();

    // const [restaurants, setRestaurants] = useRestaurants();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get(`/${id}`);
                setName(response.data.data.restaurant.name);
                setLocation(response.data.data.restaurant.location);
                setPriceRange(response.data.data.restaurant.price_range);
                console.log(response.data.data);
                
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchData();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
            name,
            location,
            price_range: priceRange
        })
        console.log(updatedRestaurant);
        navigate('/');
    }


  return (
    <div>
        <form action="">
            <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input id="name" className='form-control' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="location">Location</label>
                <input id="location" className='form-control' type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="price_range">Price Range</label>
                <input id="price_range" className='form-control' type="number" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}/>
            </div>
            <button type="submit" onClick={(e) => handleSubmit(e)} className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default UpdateRestaurant