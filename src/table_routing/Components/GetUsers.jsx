import React, { useEffect, useState } from "react"
import { Link,useNavigate } from "react-router-dom";
import axios from "axios"
let GetUsers=()=>{
    let [thead,setThead]=useState([]);
    let [tbody,setTbody]=useState({users:[]})
     useEffect(()=>{
        let api=axios.get("http://localhost:5050/users")
        api.then(val=>{
           setThead(Object.keys(val.data[0]).slice(0,4));
           setTbody({users:val.data})
    
        })
    })

    function del(id){
        // axios.delete("http://localhost:5050/users/"+id)
        axios.delete(`http://localhost:5050/users/${id}`)
        .then(res=>
            console.log(res)
        )
        // navigate("/")

    }

    let navigate=useNavigate()
    return(
        <div className="table" >
       <div className="table_div">
       <h1>CRUD Operations</h1>
        {/* <Link to="/add">
              <button>Add+</button>
        </Link> */}
        <button onClick={()=>navigate("/add")} className="btn add_btn">Add +</button>
        <table   >
           <thead>
           <tr >
                {thead.map((x,id)=>
                          <th key={id}>{x}</th>
                )}
                <th>Modify</th>
            </tr>
           </thead>
           <tbody>
               {tbody.users.map(x=>{
                return(
                    <tr key={x.id} style={{backgroundColor:"#DCE4C9"}}>
                          <td>{x.id}</td>
                          <td>{x.name}</td>
                          <td>{x.username}</td>
                          <td>{x.email}</td>
                        <td>
                            <button onClick={()=>navigate(`/edit/${x.id}`)} className="btn update_btn">Update</button>
                            <button className="btn delete_btn" onClick={()=>del(x.id)}>Delete</button>
                        </td>
                    </tr>  
                )
               })}
            </tbody>
        </table>
       </div>
        </div>
    )
}
export default GetUsers;


// npx json-server --watch db.json --port (portnumber) --to run json file
// npm install axios to install axios ;
