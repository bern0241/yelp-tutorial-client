import React, {useEffect, useContext} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { RestaurantContextProvider, useRestaurants } from '../context/RestaurantsContext'
import RestaurantFinder from '../apis/RestaurantFinder';

import DeleteButtonModal from './Mine/DeleteModal';
import StarRating from './StarRating';

function RestaurantList(props) {

    const navigate = useNavigate();
    // const history = useHistory();
    const [restaurants, setRestaurants] = useRestaurants();

    useEffect(() => { //dont do async! Always do async function inside useEffect
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get("/");
                console.log(response.data.data);
                setRestaurants(response.data.data.restaurants);
            } catch (error) {
                console.error(error.message);
            }
        }
        
        fetchData();
    }, [])

    async function handleUpdate(e, id) {
        e.stopPropagation();
        navigate(`/restaurants/${id}/update`);
    }

    async function handleDelete(e, id) {
        e.stopPropagation();
        try {
            console.log('delete!', id)
            const response = await RestaurantFinder.delete(`/${id}`);
            setRestaurants(restaurants.filter(restaurant => restaurant.id !== id));
            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    }

    async function handleRestaurantSelect(id) {
        navigate(`/restaurants/${id}`);
    }

    const renderRating = (restaurant) => {

        if (!restaurant.count) {
            return <span className='text-warning'>0 reviews</span>
        }
           return (
            <>
             <StarRating rating={restaurant.average_rating} />
            <span className='text-warning ml-1'>({restaurant.count})</span>
            </>
        )
    }


//    const [restaurants, setRestaurants] = useRestaurants();

//    async function deleteRestaurant(id) {
//     try {
//         const response = await fetch(`http://localhost:3020/api/v1/restaurants/${id}`, {
//             method: "DELETE",
//         })

//         setRestaurants(restaurants.filter(restaurant => restaurant.id !== id));

//     } catch (error) {
//         console.error(error.message);
//     }
//    }
    if (!restaurants) {
        return;
    }

  return (
    <div className='list-group'>
        <table className='table table-hover able-dark'>
        <thead>
            <tr className='bg-primary text-light'>
                <th scope="col">Restaurant</th>
                <th scope="col">Location</th>
                <th scope="col">Price Range</th>
                <th scope="col">Ratings</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
            {restaurants && restaurants.map(restaurant => (
                    <tr onClick={() => handleRestaurantSelect(restaurant.id)} className='table-dark' key={restaurant.id}>
                        <td>{restaurant.name}</td>
                        <td>{restaurant.location}</td>
                        <td>{"$".repeat(restaurant.price_range)}</td>
                        <td>{renderRating(restaurant)}</td>
                        <td><button onClick={(e) => handleUpdate(e, restaurant.id)} className='btn btn-warning'>Update</button></td>
                        <td><button onClick={(e) => handleDelete(e, restaurant.id)} className='btn btn-danger'>Delete</button></td>
                        {/* <td><DeleteButtonModal restaurant={restaurant}/></td> */}
                        {/* <td><button className='btn btn-danger' onClick={() => deleteRestaurant(restaurant.id)}>Delete</button></td> */}
                    </tr>
            ))}
        </tbody>
        </table>
    </div>
  )
}

export default RestaurantList