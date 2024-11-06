
import React from "react";
import {Component} from "react";
class User extends Component{
     constructor(props){
       super(props)
       this.state={
        count:1
       }
       console.log("Child construter")
     }
     componentDidMount(){
      
     }
    render(){
         const{name,Location}=this.props; 
         const{count}=this.state;
         console.log("Child render")
        return(
           
        
     
       <div className="card">
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}>Click</button>
           <h4>Count:{count}</h4>
           <h1>Name: {name}</h1>
           <h2>Location : {Location}</h2>

       </div>
  
        )
    }
}

export default User;