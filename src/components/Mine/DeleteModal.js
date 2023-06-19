import React, {Fragment} from 'react'
import {useRestaurants} from '../../context/RestaurantsContext.js'

function DeleteButtonModal({restaurant}) {

    const [restaurants, setRestaurants] = useRestaurants();

    async function deleteRestaurant(e) {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3020/api/v1/restaurants/${restaurant.id}`, {
                method: "DELETE",
            })

            setRestaurants(restaurants.filter(restaurant2 => restaurant2.id !== restaurant.id));

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#id${restaurant.id}`}>
            Delete
            </button>
    
            {/* 
                id = id10
            */}
    
            <div class="modal" id={`id${restaurant.id}`} >
            <div class="modal-dialog">
                <div class="modal-content">
    
                <div class="modal-header">
                    <h4 class="modal-title text-dark">Delete Restaurant</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
    
                <div class="modal-body">
                    {/* <input type="text" className="form-control" value={description}/> */}
                    <p className='text-dark'>Are you sure you want to delete {restaurant.name}?</p>
                </div>
    
                <div class="modal-footer">
                    <button onClick={(e) => deleteRestaurant(e)} 
                            type="button" class="btn btn-danger" data-bs-dismiss="modal">Delete</button>
                    <button onClick={() => setDescription(todo.description)} 
                            type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                </div>
    
                </div>
            </div>
            </div>
        </Fragment>
      )
}

export default DeleteButtonModal