import React from 'react'


const Register = () => {
  /*   const[form,setForm] = useState({
        name:"",
        email:"",
        phone:"",
        password:""
    }) */
   async function handleSubmit(e){
        e.preventDefault();

       const data = new FormData(e.currentTarget);
      const form = {
        name:data.get('name'),
        email:data.get('email'),
        phone:data.get('phone'),
        password:data.get('password'),
      }
      console.log(form);
        
    //    const res = await fetch("http://localhost:5000/sign_up",{      //commented to deploy on Netlify 
    //         method:"POST",
    //         headers:{"Content-Type":"application/json"},
    //         body:JSON.stringify(form)
    //     });

    }
     /* function handleChange(e){
     setForm({...form,[e.target.name]:e.target.value});
     } */

    return (
        <>
            <h2>
                <a href="/">Home</a>
            </h2>
            <form onSubmit={handleSubmit}>
             {/*    <h2>Sign Up Form</h2>
                <input type="text"  id="name"  name="name" placeholder="Name" onChange={handleChange} /><br /><br />
                <input type="text"  id="email" name="email" placeholder="Email" onChange={handleChange} /><br /><br />
                <input type="text"  id="phone" name="phone" placeholder="Phone" onChange={handleChange} /><br /><br />
                <input type="text"  id="password" name="password" placeholder="Password" onChange={handleChange} /><br /><br />
                <input type="submit" value="submit" id="submit"></input>
              */} 
                 <h2>Sign Up Form</h2>
                <input type="text"  id="name"  name="name" placeholder="Name"  /><br /><br />
                <input type="text"  id="email" name="email" placeholder="Email"  /><br /><br />
                <input type="text"  id="phone" name="phone" placeholder="Phone"  /><br /><br />
                <input type="text"  id="password" name="password" placeholder="Password"  /><br /><br />
                <input type="submit" value="submit" id="submit"></input>


            </form>
        </>
    )
}

export default Register