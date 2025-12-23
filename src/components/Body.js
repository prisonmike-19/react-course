import RestarauntCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body= ()=>
{
    const [RestaurantList, setRestaurantList]= useState(resList);
    const [filteredRestaurant, setfilteredRestaurant]=useState(resList);
    const [searchText, setsearchText]=useState("");
    // useEffect(()=>{
    //     fetchData();
    // },[]);


    // const fetchData= async()=>{

    //      const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    // );

    // const json =await data.json();
    // console.log(json);
    // };


   // Conditional Rendering 
    if(RestaurantList.length===0)
    {
        return <h1>
            return <Shimmer />
        </h1>
    };
    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}/>
                    <button className="search-btn" onClick={()=>{
                       
                       const filterRest= RestaurantList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())) ;
                       setfilteredRestaurant(filterRest);
                    }}>
                        Search
                    </button>
                
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList=RestaurantList.filter((res)=>res.info.rating.aggregate_rating>4);
                    setfilteredRestaurant(filteredList);
                }}> Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                   filteredRestaurant.map((restaurant) => (<Link
        key={restaurant.info.resId}
        to={"/restaurant/" + restaurant.info.resId}
      >
    <RestarauntCard 
        key={restaurant.info.resId}
        resdata={restaurant}
    />
    </Link>
))

                } 
            </div>
        </div>
    );
};

export default Body;