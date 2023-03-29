


export default function Shimmer() {
    return (
        <>
        <div className="flex flex-wrap justify-center gap-6 bg-gray-800 text-slate-100">
            {Array(30)
            .fill('')
            .map((e,index) => (
                <div key={index} className="rounded-2xl w-52 h-60 bg-black m-5 ">
                    
                    
                </div>
                
            ))
            }
        </div>
        <h1>shimmer Loading ....</h1>
    </>
    )
};
