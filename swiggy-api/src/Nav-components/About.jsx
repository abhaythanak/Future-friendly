import Profile from "../classVSfunction/profile";

export default function About() {
    return (
            <div className="container content-center m-2">
                <div className="row">
                    <div className=" about-content animated fadeIn scrollable">
                        <h1 className="animated fadeIn one">about us</h1>
                        <div
                            className="about-me"
                            style={{ transform: "translateY(0px) translateZ(0px)", marginTop: 20 }}
                        >
                            <div
                                className="Synopsis-highlightLine five"
                                style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                            />
                            <div className="animated fadeIn three">
                                <p className="Synopsis-highlight">
                                    Our mission is to elevate the quality of life for the urban consumer
                                    with unparalleled convenience. Convenience is what makes us tick. It's
                                    what makes us get out of bed and say, "Let's do this."
                                </p>
                            </div>
                            <div
                                className="Synopsis-highlightLine five"
                                style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                            />
                            <div className="animated fadeIn four">
                                <p />
                                <p />
                                <p>.</p>
                                <p />
                            </div>
                        </div>
                    </div>
                    <div className="about-panel-wrapper">
                        <div className=" about-panel animated fadeIn">
                            <div className="perspective-container">
                                <div
                                    className="zero photo-about animated fadeIn"
                                    style={{ transform: "translateY(0px) translateZ(0px)" }}
                                >
                                    <div className="hide-photo-filter animated fadeIn" />
                                    <div className="about-info">
                                        <h3 className="about-info-name animated fadeInUp up-one">
                                            FOOD VILLA
                                        </h3>
                                        <div className="about-info-contact">
                                            <h4 className="animated fadeInUp up-two">
                                                {" "}
                                                We Work Hard And Party Harder!
                                            </h4>
                                            <p className="animated fadeInUp up-three">Nashik , Maharashtra</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    

    //     <div className="about mt-24 flex sm:flex-wrap my-3 ">
    //         <Profile />
    //         <div className="shadow-xl w-2/3 my-5 text-center">
    //             <h1 className="font-bold text-2xl mb-5 text-white">About this project</h1>
    //             <h4 className="text-white">This is Food Ordering Webapp - a Swiggy App Clone 
    //                 where you order food from near local restaurant.</h4>
    //             <h3 className="font-medium text-2xl m-5 text-white">Some Feature of this Project : </h3>
    //             <div className="text-justify mx-64 text-white">
    //                 <h4> - Integrated Swiggy Public API</h4>
    //                 <h4> - Shimmer UI</h4>
    //                 <h4> - Search Restaurant</h4>
    //                 <h4> - Restaurant Menu Page</h4>
    //                 <h4> - Landing with Restaurant List</h4>
    //                 <h4> - Indication of Online or Offline</h4>
    //             </div>
    //         </div>
    //     </div>
    // );   
};


/**
 *
 * Parent Constructor
 * Parent render
 *    First Child constructor
 *    First Child render
 *    Second Child constructor
 *    Second Child render
 *
 *    DOM UPDATED for children
 *
 *    first Child componentDidMount
 *    Second Child componentDid
 *  Parent componentDidMount
 *
 *
 */