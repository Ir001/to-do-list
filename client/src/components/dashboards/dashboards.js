import React, {useState} from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
const Dashboards = ()=>{
    document.title = 'TodoApp - Dashboards'
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState('')
    const [categoryId, setCategoryId] = useState('')

    const getTasks = async()=>{
        const {data} = await axios.get('/api/to-do-list/index')
        if(data.success){
            
        }
    }
    const createNew = async(e)=>{
        e.preventDefault()
    }
    const createNewOnPressEnter = async(e)=>{

    }
    const store = async()=>{
        const {data} = await axios.post('/api/to-do-list/store',{
            name : task,
            category : categoryId
        })
        if(data.success){
            setTask('')
            getTasks()
        }
    }
    return (
        <div>
            <div className="flex justify-between">
                <div className="w-1/5 bg-red-300">
                    Category
                </div>
                <div className="w-4/5 bg-green-50 px-12 py-10">
                   <div className="container">
                   <h1 className="text-3xl font-light font-[Poppins-Bold]">All Tasks</h1>
                        <form className="py-5">
                            <input
                             type="text" onChange={createNew} onKeyDown={createNewOnPressEnter} className="outline-none border-none hover:ring-1 ring-indigo-500 transition duration-700 text-gray-700 font-[Poppins-Regular] px-4 py-2 rounded w-full" 
                             placeholder="Add a new task"/>
                        </form>
                        <label className="w-fit text-xl font-[Poppins-Regular] flex items-center align-middle">
                            <input type="checkbox" 
                            className="peer form-check-input appearance-none h-6 w-6 border relative
                             border-red-300 rounded bg-transparent checked:border-red-600 
                             focus:outline-none transition duration-200 " />
                            <svg xmlns="http://www.w3.org/2000/svg" className="invisible peer-checked:visible absolute w-10 h-10 -mt-5 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                             <span className="mx-3">Lorem ipsum dolor sit.</span>
                        </label>
                   </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboards