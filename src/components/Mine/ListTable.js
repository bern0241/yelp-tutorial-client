import React, {Fragment, useState, useEffect} from 'react'

function ListTable() {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
      fetchData(); 
    }, [])
  
    const fetchData = async () => {
      const data = await fetch('http://localhost:3020/api/v1/restaurants')
      .then(res => res.json())
      .then(data => {console.log(data.data.restaurants); setRestaurants(data.data.restaurants);})
      .catch(err => {
        console.error(err.message);
      })
    }

  return (
    <Fragment>
    <table class="table mt-5 table-dark text-center">
        <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Location</th>
            <th>Price Range</th>
        </tr>
        </thead>
        <tbody>
             {restaurants && restaurants.map(restaurant => (
                <tr key={restaurant.id}>
                    <td>{restaurant.id}</td>
                    <td>{restaurant.name}</td>
                    <td>{restaurant.location}</td>
                    <td>{restaurant.price_range}</td>
                </tr>
             ))}
        </tbody>
  </table>
  </Fragment>
  )
}

export default ListTable