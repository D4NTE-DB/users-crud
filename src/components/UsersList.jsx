import axios from 'axios';
import React from 'react';

const UsersList = ({ usersList, selectUser, getUsers }) => {

    const deleteUser = (user) => {
        axios.delete(`https://users-crud.academlo.tech/users/${user.id}/`)
        .then(() => {
            getUsers()
        })
    }

    return (
        <div>
            <ul className='ul-list'>
                {usersList.map(user => (
                    <div className='li-list' key={user.id}>
                        <h4>New User</h4>
                        <h4><b>First Name: </b>{user.first_name}</h4>
                        <h4><b>Last Name: </b>{user.last_name}</h4>
                        <h4><b>Email: </b>{user.email}</h4>
                        <h4><b>Password: </b>{user.password}</h4>
                        <h4><b>Birthday: </b>{user.birthday}</h4>
                        <button onClick={() => selectUser(user)}>
                            Select
                        </button>
                        <button onClick={() => deleteUser(user)} >Delete</button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;