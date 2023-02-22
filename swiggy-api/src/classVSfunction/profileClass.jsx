import React from "react";

export class profile extends React.Component {

constructor(props){
    super(props);
    console.log("constructor")
    //create state
    this.state = {
        count: 0,
        count2: 0,
    }
   
}

componentDidMount(){
    //best place to make an API call
    console.log("componentDidMount")
}

    render() {
        console.log("render")
        return (
            <>
            <h1>h</h1>
            <p>name:{this.props.name}</p>  {/* passing the props using this.props.name */}
            <h2>count:{this.state.count}</h2>
            <button
            onClick={()=> {
                //we do not mutate state directly
                //never do this.state = something
                this.setState({
                    count:1,
                })
            }}
            >setCount</button>
            </>
        )
    }
}

//parent constructor        //constructor and render ==> render phase
//parent render
//child constru.
//child render                //commit fase render after renderphase
//child component didmount
//parent component didmount


//react cycle method diagram   website  IMP IMP IMP