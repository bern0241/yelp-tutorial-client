import React, {useState} from 'react'
import { useRestaurants } from '../context/RestaurantsContext.js'
import RestaurantFinder from '../apis/RestaurantFinder.js';

function AddRestaurant() {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [priceRange, setPriceRange] = useState("Price Range");

    const [restaurants, setRestaurants, AddRestaurant] = useRestaurants();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await RestaurantFinder.post('/', {
                name,
                location,
                price_range: priceRange
            })
            console.log(response.data.data.restaurant);
            AddRestaurant(response.data.data.restaurant);
        } catch (error) {
            console.error(error.message);
        }
    }

//   const addRestaurant = async () => {
//     const response = await fetch('http://localhost:3020/api/v1/restaurants', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({name: name, location: location, price_range: priceRange})
//     })
//     console.log(response);
//     getRestaurants();
//   }

//   async function getRestaurants() {
//     const response = await fetch('http://localhost:3020/api/v1/restaurants')
//     .then(res => res.json())
//     .then(data => {
//         console.log("Data from context!");
//         console.log(data.data.restaurants);
//         setRestaurants(data.data.restaurants);
//     })
// }

  return (
    <div className='mb-4 mt-4'>
        <form action="">
            <div className="d-flex gap-1">
                <div className='col'>
                    <input type="text" className='form-control' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='col'>
                    <input type="text" className='form-control' placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)} />
                </div>
                <div className='col'>
                    <select className='custom-select mr-sm-2 form-control' value={priceRange} onChange={(e)=> setPriceRange(e.target.value)} >
                        <option disabled>Price Range</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>
                    </select>
                </div>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary">Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddRestaurant