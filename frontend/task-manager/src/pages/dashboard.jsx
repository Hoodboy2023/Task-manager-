
import {useState, useEffect} from "react"
import Overview from "../components/overview"
import AddTask from "../components/addTask"


const Dashboard =  () => {
    
    
    return (<div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-2">
               <h1>TaskBuddy</h1>
                <p>Hi user</p>
                <div>
                    <h2>Main</h2>
                    <button>Overview</button>
                    <button>Today</button>
                    <button>Add Task</button>
                </div>
                <div>
                    <h2>Categories</h2>
                    <button>Work</button>
                    <button>Personal</button>
                    <button>Hobby</button>
                </div>

            </div>
            <div className="col-10">
                <div>
                   <Overview/>    
                </div>
                <div>
                    <AddTask/>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</div> )
}

export default Dashboard