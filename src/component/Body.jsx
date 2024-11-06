import { useEffect, useState } from 'react';
import RestCart from "./RestCard";
import resData from '../utils/mockData';
 import Shimmer from './Shimmer';

import { Link } from 'react-router-dom';



const Body = () => {
  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State Variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resData);
  
  const[FilteredRestaurant,setFilteredRestaurant]=useState(resData);
  const [searchText, setSearchText] = useState('');

  // * Whenever a state variable updates or changes, react triggers a reconciliation cycle(re-renders the component)
  console.log('Body rendered');

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   const json = await data.json();

  //   console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  //   // * optional chaining
  //   // setListOfRestaurants(json.data.cards[2].data.data.cards);
  //   setListOfRestaurants(json?.data?.cards[4]?.card?.card.gridElements?.infoWithStyle.restaurants);
  //   setFilteredRestaurant(json?.data?.cards[4]?.card.card.gridElements?.infoWithStyle.restaurants);
  // };

  // * Conditional Rendering
       if (listOfRestaurants.length === 0) {  
    return <Shimmer />;
     }

  return (
  
 
    <><div className="filter">
      <><div className="search">
        <input
          type="text"
          placeholder="Search a restaurant you want..."
          className="searchBox"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          } } />
        <button
          onClick={() => {
            // * Filter th restaurant cards and update the UI
            // * searchText
            console.log(searchText);

            const filteredRestaurant = listOfRestaurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurant(filteredRestaurant);
          } }
        >
          Search
        </button>
      </div><button
        className="filter-btn"
        onClick={() => {
          // * Filter logic
          const filteredList = listOfRestaurants.filter(
            (res) => res.data.avgRating > 4
          );

          setListOfRestaurants(filteredList);
          console.log(filteredList);
        } }
      >
          Top Rated Restaurants
        </button></>
    </div><div className="res-container">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {FilteredRestaurant.map((restaurant) => (
          <Link key={restaurant.data.id} to={"/resturent/"+restaurant.data.id }><RestCart key={restaurant.data.id} rescarddata={restaurant} /></Link>
        ))}
      </div></>
    
  )
   
    

};

export default Body;
