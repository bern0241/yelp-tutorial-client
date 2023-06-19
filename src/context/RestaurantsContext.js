import React, {useState, useEffect, createContext, useContext} from 'react'
import AddRestaurant from '../components/AddRestaurant';

const RestaurantsContext = createContext();

function RestaurantContextProvider (props) {
    const [restaurants, setRestaurants] = useState([]);

    const AddRestaurant = (restaurant) => {
        setRestaurants([...restaurants, restaurant]);
    } 

    // useEffect(() => {
    //     getRestaurants();
    // }, [])

    // async function getRestaurants() {
    //     const response = await fetch('http://localhost:3020/api/v1/restaurants')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log("Data from context!");
    //         console.log(data.data.restaurants);
    //         setRestaurants(data.data.restaurants);
    //     })
    // }

    return (
        <RestaurantsContext.Provider value={[restaurants, setRestaurants, AddRestaurant,
                                            ]} {...props} />
    )
}

function useRestaurants() {
    const context = useContext(RestaurantsContext);
    if (!context) throw new Error("Issue with provider");
    return context;
}

export {RestaurantContextProvider, useRestaurants};