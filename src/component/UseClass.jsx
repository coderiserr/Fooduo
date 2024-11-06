import React from "react";
import User from "./User.jsx";
class UseClass extends  React.Component{
    constructor(){
        super();
       this.state={
            userInfo:{
      name:"Dummy",
      id:"Default",
    
            }
       }
          
    }
   async componentDidMount(){
    //    const data=await fetch("https://api.github.com/users/coderiserr")
    //    const json= await data.json();
    //    this.setState({
    //     userInfo:json
        
    //    })
   this.timer= setInterval(()=>{
        console.log("heloo");
       },1000);
       }
    

    componentWillUnmount(){
       clearInterval(this.timer);
       console.log("unmount")
    }


 render(){
    const{name,id,
        avatar_url}=this.state.userInfo;
    return (
        <div className="card">

            {/* <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}
            >Click Me</button> */}
            {/* <h4>count:{count}</h4> */}
            <img src={avatar_url}></img>
            <h1>Name:{name} </h1>
            <h2>ID:{id}</h2>
           
        </div>
    )
 }
}
export default UseClass;