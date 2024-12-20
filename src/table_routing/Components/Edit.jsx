import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
let Edit=()=>{
  let [values,setvalues]=useState({name:"",username:"",email:""})
  let change=(e)=>{
    setvalues({...values,[e.target.name]:e.target.value})
  }

  console.log(useParams())
  let {id}=useParams()

  useEffect(()=>{
    axios.get("http://localhost:5050/users/"+id)
    .then(res=>
      setvalues(res.data))
  },[]);

  let navigate=useNavigate()
  function updateUser(e) {
    e.preventDefault();
    axios.put("http://localhost:5050/users/"+id,values)
    .then(()=>navigate("/"))
  }
    return (
        <div className="input_div">
          <div className="input">
          <h1>Update Your account</h1>
          <form action="" >
             <input type="text" placeholder="Enter Your Name" name="name" value={values.name} onChange={change}/><br />
             <input type="text" placeholder="Enter Your UserName" name="username" value={values.username} onChange={change}/><br />
             <input type="email"  placeholder="Enter your email" name="email" value={values.email} onChange={change}/><br />
             <button onClick={updateUser}>Update</button>
          </form>
          </div>
        </div>
    )
}
export default Edit;