import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_LINK } from "../utils/links";

const RestaurentMenu = () => {
  const [resInfo, setInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_LINK + resId);
      const json = await data.json();
      setInfo(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (resInfo === null) return <Shimmer />;

  // Safely destructure nested properties
  const { name, avgRating, totalRatingsString, costForTwo } =
    resInfo?.cards?.[2]?.card?.card?.info || {};
  const itemCards =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

  return (
    <div className="Menu">
      <h3>{name}</h3>
      <h5>
        {avgRating} ({totalRatingsString}) - Rs.{costForTwo / 100}
      </h5>
      <h4>Menu</h4>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
