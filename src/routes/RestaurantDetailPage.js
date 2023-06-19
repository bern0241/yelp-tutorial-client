import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
// import { useRestaurants } from '../context/RestaurantsContext';
import { useSelectedRestaurant } from '../context/SelectedRestaurantContext';
import RestaurantFinder from '../apis/RestaurantFinder';
import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';
// import FetchRestaurant from '../components/Mine/FetchRestaurant';

function RestaurantDetailPage() {

  const {id} = useParams();
  const [selectedRestaurant, setSelectedRestaurant] = useSelectedRestaurant({}); //had to put in separate Context file


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        console.log(response.data.data);
        setSelectedRestaurant(response.data.data);
   
        } catch (error) {
          console.error(error.message);
        }
    };

    fetchData();
  },[])


  return (
    <div>
      {selectedRestaurant.restaurant && selectedRestaurant.reviews && (
        <>
        <h1 className='text-center display-1'>{selectedRestaurant.restaurant.name}</h1>
        <div className='text-center'>
          <StarRating rating={selectedRestaurant.restaurant.average_rating}/>
            <span className='text-warning ml-1'>
              {selectedRestaurant.restaurant.count ? `(${selectedRestaurant.restaurant.count})` : "(0)"}
            </span>
        </div>
          <div className='mt-3'>
            <Reviews reviews={selectedRestaurant.reviews} id={id}/>
          </div>
            <AddReview id={id}/>
        </>
      )}
      </div>
  )
}

export default RestaurantDetailPage