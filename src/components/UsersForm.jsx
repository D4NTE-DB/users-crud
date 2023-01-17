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
                <div className="form-container">
                 
                 <div className="fn-container">
                 <box-icon name='user'></box-icon>
                    <label htmlFor="first_name"></label>
                    <input
                        required
                        placeholder='first name'
                        type="text"
                        name="first_name"
                        id="first_name"
                        {...register("first_name")}
                    />
                </div>
                <div className="ln-container">
                    <label htmlFor="last_name"></label>
                    <input
                        required
                        placeholder='last name'
                        type="text"
                        name="last_name"
                        id="last_name"
                        {...register("last_name")} 
                    />
                </div>
                <div className="e-container">
                <box-icon name='envelope' type='solid' ></box-icon>
                    <label htmlFor="email"></label>
                    <input
                        required
                        placeholder='email'
                        type="text"
                        name="email"
                        id="email"
                        {...register("email")}
                    />
                </div>
                <div className="p-container">
                <box-icon name='lock-alt' type='solid' ></box-icon>
                    <label htmlFor="password"></label>
                    <input
                        required
                        placeholder='password'
                        type="password"
                        name="password"
                        id="password"
                        {...register("password")}
                    />
                </div>
                <div className="b-container">
                <box-icon name='calendar-event' ></box-icon>
                    <label htmlFor="birthday"></label>
                    <input
                        required
                        placeholder='Birthday'
                        type="date"
                        name="birthday"
                        id="birthday"
                        {...register("birthday")}
                    />
                </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default UsersForm;