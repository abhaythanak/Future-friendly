import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export default function SideBar() {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

//Early Return Pattern
if (!isMenuOpen) return null;

    return(
    <div className="p-5 shadow-lg col-span-2 w-48">
        
            <ul className="font-bold pb-5">
                <li><Link to={"/"}>Home</Link></li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>

            <h1 className="font-bold">Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>

            <h1 className="font-bold pt-5">Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    )
};
