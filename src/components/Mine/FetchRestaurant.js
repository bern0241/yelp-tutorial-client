import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import RestaurantFinder from '../../apis/RestaurantFinder';

function FetchRestaurant() {
    const {id} = useParams();
    const [restaurant, setRestaurant] = useState({});
  
      useEffect(() => {
        fetchData(); 
      }, [])

      const fetchData = async () => {
        const response = await RestaurantFinder.get(`/${id}`)
        setRestaurant(response.data.data.restaurant);
      }
    
      // const fetchData = async () => {
      //   const data = await fetch(`http://localhost:3020/api/v1/restaurants/${id}`)
      //   .then(res => res.json())
      //   .then(data => {console.log(data.data.restaurant); setRestaurant(data.data.restaurant);})
      //   .catch(err => {
      //     console.error(err.message);
      //   })
      // }
  
    return (
      <div>
         <h1 className='text-center'>{restaurant.name}</h1>
      </div>
    )
}

export default FetchRestaurant