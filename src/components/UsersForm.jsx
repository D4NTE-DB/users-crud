import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({getUsers, userSelected}) => {

    const {handleSubmit, register, reset} = useForm();
    
    useEffect(() =>{
        if (userSelected !== null) {
            reset(userSelected)      
        }
    }, [userSelected])

    const submit = (data) => {
        console.log(data)
      
        if (userSelected !== null) {
            console.log(`ss ${userSelected.id}`)
            axios.put(`https://users-crud.academlo.tech/users/${userSelected.id}/`, data)
            .then(() => getUsers())
        } else {
            axios.post(`https://users-crud.academlo.tech/users/`, data)
            .then(() => getUsers())
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <h2>User List</h2>
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input
                        required
                        type="text"
                        name="email"
                        id="email"
                        {...register("email")}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input
                        required
                        type="password"
                        name="password"
                        id="password"
                        {...register("password")}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="first_name">First name</label>
                    <input
                        required
                        type="text"
                        name="first_name"
                        id="first_name"
                        {...register("first_name")}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="last_name">Last name</label>
                    <input
                        required
                        type="text"
                        name="last_name"
                        id="last_name"
                        {...register("last_name")} 
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="birthday">Birthday</label>
                    <input
                        required
                        type="date"
                        name="birthday"
                        id="birthday"
                        {...register("birthday")}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default UsersForm;