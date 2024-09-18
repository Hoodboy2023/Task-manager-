import { useState, useEffect } from "react";

const AddTask =  () => {
    const [taskName, setTaskName] = useState("")
    const [description, SetDescription] = useState("")
    return (
        <div>
            <form action="">
                <label>Task Name <input type="text" onChange={(e) =>{setTaskName(e.target.value)}}/></label>
                <label>Description <input type="text" onChange={(e) =>{SetDescription(e.target.value)}}/></label>
            </form>
        </div>
    )
}

export default AddTask