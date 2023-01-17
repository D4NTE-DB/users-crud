import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const UsersList = ({ usersList, selectUser, getUsers }) => {
    const [isToggled, setIsToggled] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    const deleteUser = (user) => {
        axios.delete(`https://users-crud.academlo.tech/users/${user.id}/`)
            .then(() => {
                getUsers()
            })
    }

    const [styles, setStyles] = useState({
        background: '#F7F7F7',
        fontSize: '16px'
    });

    function changeStyles() {
        setStyles({
            backgroundColor: 'green',
            fontSize: '20px'
        });
    }

    const toggleOF = (isToggled) => {
        if (!isToggled) {
            changeStyles()
        } else {
            setStyles({
                background: '#F7F7F7',
                fontSize: '16px'
            })
        }
    }


    return (
        <div>
            <ul className='ul-list'>
                {usersList.map(user => (
                    <div className='li-list' key={user.id}>
                        <h1>{user.first_name} {user.last_name}</h1>
                        <h3><b>CORREO </b></h3>
                        <h4>{user.email}</h4>

                        <h3><b>CUMPLEAÑOS</b></h3>
                        <h4><box-icon name='gift' ></box-icon>{user.birthday}</h4>
                        <div className="buttons-list">
                            <button
                                className='toggle-button'
                                onClick={() => {
                                    setIsToggled(!isToggled);
                                    toggleOF(!isToggled);
                                    selectUser(user, isToggled);
                                    setSelectedUser(user);
                                }} style={user.id === selectedUser.id ? styles : {}}>
                                <box-icon name='edit-alt' ></box-icon>
                            </button>
                            <button onClick={() => deleteUser(user)} style={{ fill: "white", background: "#D85D5D" }}><box-icon name='trash' ></box-icon></button>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;