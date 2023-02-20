import Title from "./Title"
export default function Header() {
    return(
        <>
        <div className="header">
            {Title()}
            <div className="nav-items">
                <ul className="ul-list">
                    <li className="li">About</li>
                    <li  className="li">ContactUs</li>
                    <li className="li">Cart</li>
                </ul>
            </div>
        </div>
        </>
    )
};
