import React,{useState,useEffect} from 'react'              //useEffect example

export const OurSites = () => {
    const [count,setCount] = useState(0);
    
    const countUpdate = (val) =>{
        if (val==="inc") return setCount(count + 1);
        if (val==="dec") return setCount(count-1);
    };

    useEffect (()=>{
        document.title = count;
    });


  return (
    <>
    <div className = "container">
        <button onClick={()=>countUpdate("inc")}>Inc</button>
        <h1>{count}</h1>
        <button onClick={()=>countUpdate("dec")}>Dec</button>
        </div>
    </>
  )
}

export default OurSites