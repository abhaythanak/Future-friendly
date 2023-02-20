/* eslint-disable no-useless-concat */
export default function RestaurantCard(props) {
    return (
        <>
        
        <div className="card">
        <img style={{borderRadius:"4px"}}
        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + `${props.link}`  }
         alt="img" />
            {/* {console.log(props)} */}
            <h2>{props.name}</h2>
            <h3>{props.cuisines.join(", ")}</h3>
            <h4>{props.price}</h4>
        </div>
        </>
        )
};
