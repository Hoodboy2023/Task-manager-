import { useState, useEffect } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import {format} from "date-fns"

const AddTask =  () => {
    const [taskName, setTaskName] = useState("")
    const [description, SetDescription] = useState("")
    const [category, setCategory] = useState(null)
    const [date, setDate] = useState(Date())
    const [formatedDate, setFormatedDate] = useState("")
    const [isDatepickeOpen, setIsDatepickerOpen] = useState(false)
    
    const toggle = ()=> {
        setIsDatepickerOpen(!isDatepickeOpen)
    }
    const handleDateChange = async (date) =>{
         
        await setDate(date)
        const currentDate = new Date()
        currentDate.setHours(0,0,0,0)
        if(date>currentDate){
            console.log(date)
            await setDate(date)
            setFormatedDate( await format(date, "MMM, dd"))
            console.log(formatedDate)
            button.innerHTML = formatedDate
            toggle()
        }

    }
    const handleCategory = (e)=>{
        setCategory(e.target.value)
    }
    return (
        <div>
            <form action="">
                <label>Task Name <input type="text" onChange={(e) =>{setTaskName(e.target.value)}}/></label>
                <label>Description <input type="text" onChange={(e) =>{SetDescription(e.target.value)}}/></label>
                <button id="dateButton" type="button" onClick={toggle}>{formatedDate === ""? "Set due date":formatedDate}</button>
                {isDatepickeOpen && 
                (<DatePicker selected={date} onChange={handleDateChange} inline/>)
                }
                <label><input type="radio" onChange={setCategory} value="work" name="category"/>Work</label>
                <label><input type="radio" onChange={setCategory} value="personal" name="category"/>Personal</label>
                <label><input type="radio" onChange={setCategory} value="hobby" name="category"/>Hobby</label>
                <input type="submit" value="create task"/>
            </form>
        </div>
    )
}

export default AddTask