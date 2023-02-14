import React,{useState} from 'react'

const HillStations = () => {
       const[form,setForm] = useState({
        hill_name:"",
        person_name:"",
        family_members:"",
        days_req:""
    }) 
    async function handleSubmit(e){
        e.preventDefault();
  //console.log(form);
        // const res = await fetch("http://localhost:5000/register_hill",{        // commented to deploy on Netlify
        //     method:"POST",
        //     headers:{"Content-Type":"application/json"},
        //     body:JSON.stringify(form)
        // });
    }
    function handleChange(e){
     setForm({...form,[e.target.name]:e.target.value});
     } 
       
    
    return (
        <>
         <h2>
                <a href="/">Hill Stations</a>
            </h2>
            <form onSubmit={handleSubmit}>
                 <h2>Register a Hillstation</h2>
                <input type="text"  id="name"  name="hill_name" placeholder="Hill Name" onChange={handleChange} /><br /><br />
                <input type="text"  id="email" name="person_name" placeholder="Person Name" onChange={handleChange} /><br /><br />
                <input type="text"  id="phone" name="family_members" placeholder="Family members" onChange={handleChange} /><br /><br />
                <input type="text"  id="password" name="days_req" placeholder="No. of days" onChange={handleChange} /><br /><br />
                <input type="submit" value="submit" id="submit"></input>
              
           </form> 
        </>
    )
}

export default HillStations