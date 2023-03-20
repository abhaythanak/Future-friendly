import { useState, useEffect} from "react"

export default function Map() {
    const [users , setUsers]= useState([])
    const [numbers , setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  
    useEffect(()=> {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) =>setUsers(json));
    }, [])
  //  For API
  // const mapData = () => {
  //   let filteredData = users.filter((user) =>{
  //     return user.id > 5;
  //   })
  //   setUsers(filteredData)
  // }
  //   maping ------
  // const mapData = () => {
  //   let square = numbers.map((number)=>{
  //     return number * number;
  //   })
  //   setNumbers(square);
   
  // }
  const mapData = () => {
    let numberLessThan5 = numbers
    .map((number)=>{
      return number * number;
    })
    .filter((filter) =>{
      return filter <= 50
    })
    setNumbers(numberLessThan5);
   
  }
  
  
    return (
        <div className="App">
        <h1>Users</h1>
        <div>
          {users.map((user)=>(
            <div>
              <p>{user.name}</p>
              <p>{user.username}</p>
            </div>
          ))}
        </div>
        <div>
          {numbers.map((number) =>(
            <div>{number}</div>
          ))}
        </div>
        <button onClick={mapData}>see map arry changes</button>
      </div>
    )
    
};
