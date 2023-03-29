

export default function Props({valueProps,changeName}) {
    return(
        <>
        <h1>{valueProps}</h1>
        <button onClick={()=> changeName("hrithik")}>changeName</button>
        </>
    )
};
