import React, {useState} from 'react'
import RestaurantFinder from '../apis/RestaurantFinder';
import { useSelectedRestaurant } from '../context/SelectedRestaurantContext';
import { useLocation, useNavigate } from 'react-router-dom';

const AddReview = ({id}) => {
    // const location = useLocation();
    // const navigate = useNavigate();

    const [name, setName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState("Rating");
    const [selectedRestaurant, setSelectedRestaurant] = useSelectedRestaurant(); //had to put in 

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response1 = await RestaurantFinder.post(`/${id}/addReview`, {
                // restaurant_id: id, //gets used in backend and id params
                name: name,
                review: reviewText,
                rating: rating
            })

            const response2 = await RestaurantFinder.get(`/${id}`);
            setSelectedRestaurant(response2.data.data);
            // navigate('/');
            // navigate(location.pathname);

        } catch (error) {
            console.log(error.message);
        }
    }

  return (
    <div className='mb-2'>
        <form action="">
            <div className="d-flex gap-1 mb-">
                <div className="form-group col-8">
                    <label className='d-flex mb-1' htmlFor="name">Name</label>
                    <input id="name" placeholder="name" type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group col-4">
                    <label className="d-flex mb-1" htmlFor="rating">Rating</label>
                    <select id="rating" className="custom-select form-select" value={rating} onChange={(e) => setRating(e.target.value)}>
                        <option disabled>Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label className="d-flex mt-3 mb-1" htmlFor="Review">Review</label>
                <textarea id="Review" className="form-control" value={reviewText} onChange={(e) => setReviewText(e.target.value)}></textarea>
            </div>
            <button type="submit" onClick={(e) => handleSubmit(e)} className="d-flex btn btn-primary mt-3">Submit</button>
        </form>
    </div>
  )
}

export default AddReview