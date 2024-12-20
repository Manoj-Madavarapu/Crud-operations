import React from "react"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import GetUsers from "./Components/GetUsers"
import Add from "./Components/Add"
import Edit from "./Components/Edit"
import Error from "./Components/Error"
import "./table_style.css"
let Table_App=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<GetUsers/>}></Route>
            <Route path="/add" element={<Add/>}></Route>
            <Route path="/edit/:id" element={<Edit/>}></Route>
            <Route path="*" element={<Navigate to="/pagenotfound"/>}></Route>
            <Route path="/pagenotfound" element={<Error/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Table_App;