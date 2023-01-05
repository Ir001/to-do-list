import React, {Component,useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

const Register = ()=>{
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')

    const Register = async(e)=>{
        e.preventDefault()
        try {
            const {data} = await axios.post('api/auth/register',{
                name : name,
                phone : phone,
                email : email,
                username : username,
                password : password,
            })
            if(data.success){
                 setMsg(<p className="bg-green-500 text-white py-4 px-5 rounded my-1">{data.message}</p>)
                 return setTimeout(() => {
                    window.location.href="/login"
                 }, 800);
            }
            setPassword('')
            return setMsg(<p className="bg-red-500 text-white py-4 px-5 rounded my-1">{data.message}</p>)
        } catch (error) {
            if(error.response) console.log(error)
        }

    }
    return (
        <div className="font-[Poppins-Regular]">
        <div className="flex bg-white justify-between">
            <div className="w-[65%] bg-gradient-to-br from-red-100 to-white px-20 py-16">
                <h1 className="text-[5.5rem] font-extrabold font-[Poppins-ExtraBold] w-[50%] leading-[1.2] bg-clip-text text-transparent bg-gradient-to-tr from-pink-500 to-red-900">TO DO LIST</h1>
                <img src="hero.png" className="object-cover w-[80%]" alt="" />
            </div>
            <div className="px-14 w-[35%]">
                <div className="pt-6 pb-4">
                    <h2 className="text-xl font-[Poppins-Bold] pb-3 text-[##5D5871] font-[500]">Welcome to To Do List</h2>
                    <p className="text-[#6D6B7A] text-sm">Please sign-in to your account, and start manage futher</p>
                </div>
                {msg != `` ? msg : ``}
                <h3 className="text-xl text-[##5D5871] mb-4">Sign Up</h3>
                <form onSubmit={Register} className="block w-full">
                    <div className="mb-3">
                        <label htmlFor="name" className="block mb-1 font-[##5D5871]">Name</label>
                        <input value={name} onChange={e => setName(e.target.value)}
                         className="block px-5 text-sm py-3 border rounded outline-none w-full" type="text" placeholder="Your name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="block mb-1 font-[##5D5871]">Phone Number</label>
                        <input value={phone} onChange={e => setPhone(e.target.value)}
                        className="block px-5 text-sm py-3 border rounded outline-none w-full" type="text" placeholder="+62" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="block mb-1 font-[##5D5871]">Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)}
                        className="block px-5 text-sm py-3 border rounded outline-none w-full" type="email" placeholder="example@mail.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="block mb-1 font-[##5D5871]">Username</label>
                        <input value={username} onChange={e => setUsername(e.target.value)}
                        className="block px-5 text-sm py-3 border rounded outline-none w-full" type="text" placeholder="Your username" />
                    </div>
                   <div className="mb-3">
                        <label htmlFor="password" className="block mb-1 font-[##5D5871]">Password</label>
                        <input value={password} onChange={e => setPassword(e.target.value)}
                        className="block px-5 text-sm py-3 border rounded outline-none w-full" type="password" placeholder="*****" />
                   </div>
                    <button type="submit" className="block w-full bg-[#1571DE] text-white py-3 rounded">Sign Up</button>
                    <p className="text-center text-xs font-[#333333] mt-5">
                        Have an account? <Link to="/login" className="text-[#1571DE]">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
        
    </div>
    )
}
export default Register