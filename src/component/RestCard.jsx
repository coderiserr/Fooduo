import { CDN_Link } from "../utils/links"
const RestCart=(props)=>{
    const {rescarddata} = props
    const{cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      deliveryTime}=rescarddata?.data;
    return(
       <div className="res-card">
        
          <img className="cartimg" alt="res-logo"src={cloudinaryImageId}/>
          <h3 className="name">{name}</h3>
          <h4 className="cuisine">{cuisines.join(",")}</h4>
          <h4 className="rating">{avgRating}Star</h4>
          <h4 className="dt">{deliveryTime}-MIN</h4>
         
       </div>
    )
  }
  export default RestCart;