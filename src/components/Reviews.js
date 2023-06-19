import React, {useEffect, useState} from 'react'
import StarRating from './StarRating'
import RestaurantFinder from '../apis/RestaurantFinder';
import { useSelectedRestaurant } from '../context/SelectedRestaurantContext';

const Reviews = ({reviews, id}) => {
//     const [reviews, setReviews] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useSelectedRestaurant();

//     useEffect(() => {
//         const fetchReviews = async () => {
//             const response = await RestaurantFinder.get(`/${id}`);
//             console.log(response.data.data.reviews);
//             setReviews(response.data.data.reviews);
//         }

//         fetchReviews();
//     }, [selectedRestaurant])

// //router.delete('/:id/review/:idReview', async (req, res) => {

    const deleteReview = async (idReview) => {
        try {
            const response = await RestaurantFinder.delete(`/${reviews.id}/addReview/${idReview}`);

            const response2 = await RestaurantFinder.get(`/${id}`);
            setSelectedRestaurant(response2.data.data);

        } catch (error) {
            console.error(error.message);
        }
    }

  return (
    <div className='row row-cols-3 mb-3 gap-3'>

        {reviews && reviews.map((review) => (
                <div key={review.id} className="card text-white bg-primary mb-0" style={{maxWidth: '30%'}}>
                    <div className="card-header d-flex justify-content-between">
                        <span className='d-flex'>{review.name}</span>
                        <span><StarRating rating={review.rating} /></span>
                    </div>
                    <div className='card-body'>
                        <p className="card-text d-flex">{review.review}</p>
                    </div>
                    <button onClick={(e) => deleteReview(review.id)} className='btn btn-transparent position-absolute end-0 bottom-0 text-black'>X</button>
                </div>
            ))}

    </div>
  )
}

export default Reviews