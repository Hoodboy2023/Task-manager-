import { useEffect, useState } from "react";
import AddTask from "./addTask";

const Overview =  () => {
    const [data, setData] = useState(null)


    if(data === null){
        <Loading/>
    }

    if (data.length !== 0) {
    return (
        
        <div className="container-fluid">
            <div className="row">
               <div className="col-4">
                <h3>Todo</h3>
               </div>
               <div className="col-4">
                <h3>Completed</h3>
               </div>
               <div className="col-4">
                <h3>Overdue</h3>
               </div>
            </div>
        </div>
    )} 
    if (data.length === 0){
        return (
            <div className="container-fluid">
               <AddTask/>
                
            </div>
        )
    }
}

export default Overview
