import { useRouteError } from "react-router-dom"

export default function Error() {
    const err = useRouteError();
    return(
        <div className="">
        <h1>Oops!!</h1>
        <h2>Something went wrong!!</h2>
        <h2>{err.status + " : " + err.statusText}</h2>
        </div>
    )
};
