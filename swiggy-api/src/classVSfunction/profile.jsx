import { Link } from "react-router-dom";


export default function profile(){
    return (
        <div className="w-1/3 shadow-xl p-5  mx-5 text-center m-5">
            <h1 className="font-bold text-2xl mb-5 text-white">About Me</h1>
            <img className="h-52 w-64 rounded-lg m-3 mx-24" alt="aboutPhoto" src="https://www.lambdatest.com/resources/images/news24.gif" />
            <p className="text-white">I am fresher, I love development and coding, currently learning React js and JavaScript & build some interesting project.</p>
            <h3 className="py-2 text-white">Email : nandlal.jaiswal.jaiswal@gmail.com</h3>
            <div className="flex gap-5 mx-28 mt-3">
                <Link to="https://github.com/Nandlal99"><img className="h-10" alt="github" src="" /></Link>
                <Link to="https://www.linkedin.com/in/nandlal-jaiswal-321a10190/"><img className="h-10" alt="Linkedin" src="" /></Link>
            </div>
        </div>
    );
}