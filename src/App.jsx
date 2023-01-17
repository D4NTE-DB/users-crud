import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import axios from 'axios'
import { BoxIconElement } from 'boxicons'


function App() {

  const [usersList, setUsersList] = useState([])
  const [userSelected, setUserSelected] = useState(null)

  useEffect(() => {
    axios.get(`https://users-crud.academlo.tech/users/`)
      .then(res => setUsersList(res.data))
  }, [])

  const getUsers = () => {
    axios.get(`https://users-crud.academlo.tech/users/`)
      .then(res => setUsersList(res.data))
  }

  const selectUser = (user) => {
    setUserSelected(user)
    console.log(user)
  }

  return (
    <div className="App">
      <h3>User App</h3>
      <div className="users-main">
      <UsersForm getUsers={getUsers} userSelected={userSelected} />
      <UsersList usersList={usersList} selectUser={selectUser} getUsers={getUsers} />
      </div>
    </div>
  )
}

export default App
