import { useEffect,useState } from "react";

const Fun=(props)=>{


    const[statee,setstatee]=useState({
        useInfo:{
            name:"Dummy",
            ID:"Dfeault"
        }
    })
      useEffect(()=>{
    //  fetchData();
    const timer=setInterval(()=>{
        console.log("hello i am useeffarc")
    },2000)

    return ()=>{
      clearInterval(timer);
      console.log("stop")
    }
      },[])

// const fetchData= async ()=>{
//         const data= await fetch("https://api.github.com/users/coderiserr")
//         co      nst json=await data.json();

//         console.log(json)
//       }
     const{name,ID}=statee.useInfo;
    return(

        <div className="cart">
            <h3>Name:{name}</h3>
            <h3>ID:{ID}</h3>
        </div>
    )
}
export default Fun;