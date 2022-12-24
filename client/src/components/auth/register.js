import React, {Component,useState, useEffect} from "react";
import axios from "axios";

const Register = ()=>{
    
    return (
        <div>
            <form>
                <label htmlFor="fullname">Full Name</label>
                <input type="text" placeholder="Full Name" />
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
export default Register