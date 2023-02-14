import React,{useState} from 'react';
//import "./Contact.css";

export const Contact = () => {
    const purple = "#8e44ad";
    const [bg,setBg]= useState(purple);
    const [name,setName]=useState('Click me');

    const bgChange = ()=>{
        //console.log("clicked")
        let newBg = "#34495e"
        setBg(newBg);
        setName("Ouch!!");
    };
    
    const bgBack = ()=>{
        setBg(purple);
        setName("Ayyo!!")
    };


  return (
    <>
    <div style={{backgroundColor: bg}}>
        <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
        {/* <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button> */}
    </div>
    </>
  )
}

export default Contact