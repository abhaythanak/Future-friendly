


export default function Shimmer() {
    return (
        <>
        <div className="restaurant-list">
            {Array(30)
            .fill('')
            .map((e,index) => (
                <div key={index} className="shimmer-card"></div>
                
            ))
            }
        </div>
        <h1>shimmer Loading ....</h1>
    </>
    )
};
