import React from 'react';

const UsersList = ({ usersList, selectUser }) => {
    return (
        <div>
            <h1>Users List</h1>
            <ul className='ul-list'>
                {usersList.map(user => (
                    <li className='li-list' key={user.id}>
                        <h4>New User</h4>
                        <h4><b>First Name: </b>{user.first_name}</h4>
                        <h4><b>Last Name: </b>{user.last_name}</h4>
                        <h4><b>Email: </b>{user.email}</h4>
                        <h4><b>Password: </b>{user.password}</h4>
                        <h4><b>Birthday: </b>{user.birthday}</h4>
                        <button onClick={() => selectUser(user)}>
                            Select
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;