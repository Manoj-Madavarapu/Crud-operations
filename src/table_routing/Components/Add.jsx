import React, {useEffect, useState,} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
let Add=()=>{
    let [search,setsearch]=useState({name:"",username:"",email:""});
    // for generating sequential id
    let [users,setusers]=useState([]);
    useEffect(()=>{
      axios.get("http://localhost:5050/users")
      .then(res=>{
        setusers(res.data)
      })
      .catch(err=>{
        console.log(err);
    })
    },[])

    let change=(e)=>{
        setsearch({...search,
            [e.target.name]:e.target.value
        });
    }
    let navigate=useNavigate()
    function addUser(e){
        e.preventDefault();

        // for getting maxId
        // let maxId = Math.max(...users.map((user) => user.id));
        // let newuser = { id: maxId + 1, ...search };
        let newId= (users.length+1).toString()
        let newuser = { id:newId, ...search };

        // axios.post("http://localhost:5050/users",search)
        axios.post("http://localhost:5050/users",newuser)
        .then(()=>{
            navigate("/")
        })
        .catch((err)=>{
            console.log(err);
            alert("Data is not added");
        })
    }
    return(
        <div className="input_div">
        <div className="input">
        <h1>Add a New Users</h1>
        <form action="" onSubmit={addUser}>
           <input type="text" placeholder="Enter Your Name"  name="name" required value={search.name} onChange={change}/><br />
           <input type="text" placeholder="Enter Your UsernName"  name="username" required value={search.username} onChange={change}/><br />
           <input type="email"  placeholder="Enter your email" name="email" required value={search.email} onChange={change}/><br />
           <button >Add User</button>
        </form>

        {/* if we use form tag and write the input tags the data will be added and redirected to its add page only so to remain in home page only we have to use e.PreventDefault().
        Instead of onclick={addUser} in button we can use onSubmit={addUser} in form tag
         */}
        </div>
        </div>
    )
}
export default Add;
