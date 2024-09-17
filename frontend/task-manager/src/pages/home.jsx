import {useEffect, useState} from "react"
import Overview from "../components/overview"

const Home =  () =>{
   

    return <div>
        <div className="container">
            <div className="row">
                <div className="col-4">
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
                <div className="col-8">
                    <div>
                       <Overview/>    
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
}