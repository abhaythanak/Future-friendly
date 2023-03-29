import { useEffect } from "react"


export default function IfElse() {
    let age = 25;
    let name = "Abhay";

    useEffect(() => {
        // let age = 25;
        // let name = "Abhay";
// ternary operators
        // if(age > 26) {
        //     console.log("now your old")
        // } else if (name === "Abhay" && age ===26) {
        //     console.log("Abhay is my name")
        //     console.log("I am 26 years old")
        // } else {
        //     console.log("Abhay is not my name")
        //     console.log("I am less than 26 years old")
        // }

        //  inline operators
        // age > 26 ? (console.log("now your old")) :
        // name === "Abhay" && age === 26 ? (
        //     <>
        //     {console.log("Abhay is my name")}
        //     {console.log("Iam 26 years old")}
        //     </>
        // ) : (
        //     <>
        //     {console.log("Abhay is not my name")}
        //     {console.log("Iam less than 26 years old")}
        //     </>
        // )
    },[])
    return(
        
        <div className="">
            { age > 26 ? (<h1>your now old</h1>) :
        name === "Abhay" || age === 26 ? (
            <>
            <h1>I am 26 years old</h1>
            <h1>Abhay is my name</h1>
            </>
        ) : (
            <>
            <h1>I am less than 26 years old</h1>
            <h1>Abhay is not my name</h1>
            </>
        )}
        </div>
        
    )
};
