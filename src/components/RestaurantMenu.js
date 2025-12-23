import { useParams } from "react-router-dom";
import resList from "../utils/mockData";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = resList.find(
    (res) => res.info.resId.toString() === resId
  );

  if (!restaurant) return <h2>Restaurant not found</h2>;

  const {
    image,
    name,
    cuisine = [],
    rating = {},
    cfo
  } = restaurant.info;

  return (
    <div className="menu">
      <img src={image.url} className="res-image" />

      <div className="info">
        <h1>{name}</h1>

        <h2>
          {cuisine.map(c => c.name).join(", ")}
        </h2>

        <h3>{cfo.text}</h3>

        <h4>{rating.aggregate_rating}</h4>
      </div>
    </div>
  );
};

export default RestaurantMenu;
