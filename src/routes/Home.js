import React, {useState, useEffect} from 'react'

//components
import Header from '../components/Header'
import AddRestaurant from '../components/AddRestaurant'
import RestaurantList from '../components/RestaurantList'
// import ListTable from '../components/Mine/ListTable'

function Home() {

  return (
    <div>
        <Header />
        <AddRestaurant />
        <RestaurantList />
    </div>
  )
}

export default Home