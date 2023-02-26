import { useSelector } from "react-redux"
import FoodItems from "./FoodItems"


export default function Cart() {

const cartItems = useSelector(store => store.cartItems)

    return(
        <>
        <div >Cart {cartItems.length}</div>
        {cartItems.map((item) => (
            <FoodItems key={item.id}  {...item[0]}/>
        ))}
        
        </>
    )
};
