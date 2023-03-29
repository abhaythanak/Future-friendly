

export default function FoodItems({name, description,cloudinaryImageId,price}) {
    return (
        <div className="">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="cart" />
            <h2>{name}</h2>
            <h3>{description}</h3>
            <h4>Rupees {price / 100}</h4>
        </div>
    )
};
