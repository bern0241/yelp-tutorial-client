import React, {useState, useEffect, createContext, useContext} from 'react'

const SelectedRestaurantContext = createContext();

function SelectedRestaurantContextProvider (props) {
    
    const [selectedRestaurant, setSelectedRestaurant] = useState({});

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
        <SelectedRestaurantContext.Provider value={[selectedRestaurant, setSelectedRestaurant]} {...props} />
    )
}

function useSelectedRestaurant() {
    const context = useContext(SelectedRestaurantContext);
    if (!context) throw new Error("Issue with provider");
    return context;
}

export {SelectedRestaurantContextProvider, useSelectedRestaurant};