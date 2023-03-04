import { AppText } from "../constants"

export default function Home(params) {
    return(
        <div className="mt-7 px-4 flex">
            <h1 className="text-5xl font-bold">{AppText.hello}</h1>
            <h1 className="text-5xl font-bold">{AppText.Iam} 
            <span className="text-purple-800">{AppText.abhaythanak}</span></h1>
            <h1 className="text-gray-500 mt-4">{AppText.aboutMeDescripion}</h1>
            <button className="bg-purple-600 p-2 px-3 mt-4 transition-all ease-in-out hover:scale-110 cursor-pointer text-white rounded-md">Resume</button>
            <img src="" className="w-[400px] " alt="homeImage" />
        </div>
    )
};
