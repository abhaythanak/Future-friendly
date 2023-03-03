

export default function NavBar() {
    return (
        <>
        <div className="">
            <img src="logo" alt="logo" className="h-5" />
            <div className="">
                <ul className="flex flex-row">
                    <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">Home</li>
                    <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">Skills</li>
                    <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">Companies</li>
                    <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">Portfolio</li>
                    <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">About</li>
                    <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">Contact Me</li>
                </ul>
            </div>
            </div>
        </>
    )
};
