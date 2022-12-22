import React, {Component, useState, useEffect} from 'react'
import axios from 'axios'
const Users = ()=>{
    const [users, setUser] = useState([])
    useEffect(() => {
        getUsers()
    },[])
    const getUsers = async ()=>{
        const response  = await axios.get('api/users')
        setUser(response.data)
    }
    return (
        <div>
            <h1>Users tes</h1>
            <p>List Users</p>
            <ol> 
            {users.map((user, index) => (
                <li key={user.id}>{user.email}</li>
            ))}
            </ol>
        </div>
    )
}

export default Users