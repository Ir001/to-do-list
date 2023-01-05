import React, {Component,useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import axios from "axios";

const Login = ()=>{
    document.title = `ToListApp - Login`
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')
    const Login = async(e)=>{
        e.preventDefault()
        const [data] = await axios.post('/api/auth/login',{
            username,
            password
        })
        if(data.success){
            setMsg(<p className="bg-green-500 text-white py-4 px-5 rounded mb-2">{data.message}</p>)
            return setTimeout(() => {
                window.location.href='/'
            }, 1000);
        }
        return setMsg(<p className="bg-red-500 text-white py-4 px-5 rounded mb-2">{data.message}</p>)
    }
    return (
        <div className="font-[Poppins-Regular]">
            <div className="flex bg-white justify-between">
                <div className="w-[65%] bg-gradient-to-br from-red-100 to-white px-20 py-16">
                    <h1 className="text-[5.5rem] font-extrabold font-[Poppins-ExtraBold] w-[50%] leading-[1.2] bg-clip-text text-transparent bg-gradient-to-tr from-pink-500 to-red-900">TO DO LIST</h1>
                    <img src="hero.png" className="object-cover w-[80%]" alt="" />
                </div>
                <div className="px-14 w-[35%]">
                    <div className="pt-6 pb-6">
                        <h2 className="text-xl font-[Poppins-Bold] pb-3 text-[##5D5871] font-[500]">Welcome to To Do List</h2>
                        <p className="text-[#6D6B7A] text-sm">Please sign-in to your account, and start manage futher</p>
                    </div>
                    {msg != '' ? msg : ``}
                    <h3 className="text-xl text-[##5D5871] mb-4">Sign In</h3>
                    <form onSubmit={Login}
                     className="block w-full">
                        <div className="mb-3">
                            <label htmlFor="text" className="block mb-1 font-[##5D5871]">Username</label>
                            <input onChange={e => setUsername(e.target.value)}
                            className="block px-5 text-sm py-3 border rounded outline-none w-full" type="text" placeholder="Your registered username" />
                        </div>
                       <div className="mb-8">
                            <label htmlFor="password" className="block mb-1 font-[##5D5871]">Password</label>
                            <input onChange={e => setPassword(e.target.value)}
                             className="block px-5 text-sm py-3 border rounded outline-none w-full" type="password" placeholder="*****" />
                       </div>
                        <button type="submit" className="block w-full bg-[#1571DE] text-white py-3 rounded">Login</button>
                        <p className="text-center text-xs font-[#333333] mt-5">
                            Don't have an account yet? <Link to="/register" className="text-[#1571DE]">Sign Up</Link>
                        </p>
                    </form>
                </div>
            </div>
            
        </div>
    )
}
export default Login