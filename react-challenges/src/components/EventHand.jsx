import { useState } from "react"


export default function EventHand() {

    const [ objData, setObjData] = useState({});
    const getInputs = (value, name) =>{
        let data = {[name]: value };

        setObjData({ ...objData, ...data})
    }

    const submit = (e) => {
         e.preventDefault();
        console.log(objData)
    }

    // const getInputs = (value, name) => {
    //     console.log({[name] : value })
    // }


    return(
        <form onSubmit={submit}>
        <div className="app1">
            <input type="text"
            placeholder="Write your name"
            name="name"
            onChange={(e) => getInputs(e.target.value, e.target.name)}
            />
            <input type="number"
            placeholder="Write your age"
            name="age"
            onChange={(e) => getInputs(e.target.value, e.target.name)}
            />
            <input type="text"
            placeholder="Write your hobbies"
            name="hobbies"
            onChange={(e) => getInputs(e.target.value, e.target.name)}
            />
            <input type="date"
            placeholder="Write a date"
            name="date"
            onChange={(e) => getInputs(e.target.value , e.target.name)}
             />
            <button type="submit" onClick={submit}>Submit</button>
            <button type="reset">Reset</button>
        </div>
        </form>
    )
};
