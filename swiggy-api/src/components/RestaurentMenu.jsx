import { useParams } from "react-router-dom"

export default function RestaurentMenu() {

    //  const params = useParams()
     //  console.log(params)
    //  const {id} = params
            //  OR only this line  //
     const {id} = useParams()       
   

    return(
        <div>
            <h1>Restaurent id: {id}</h1>
        <h2>Namaste</h2>
        </div>
        

    )
};
