import { useEffect, useState } from "react";

export default function useOnline() {

    //its junior developers code
    // const [isOnline, setIsOnline] = useState(true);

    // useEffect(()=> {
    //     window.addEventListener("online", () => {
    //         setIsOnline(true);
    //     });
    //     window.addEventListener("offline", () => {
    //         setIsOnline(false);
    //     });
    // },[]);


    //its senior developers code

    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=> {
        const handleOnline = () => {
            setIsOnline(true);
        };
        const handleOffline = () => {
            setIsOnline(false);
        };

        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)

        return () =>{
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
        }
    },[]);

    //return not change

    return isOnline

   
};
