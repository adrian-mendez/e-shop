import { useState, useContext } from 'react'
import UserContext from '../../context/UserContext'
import NotificationContext from '../../context/NotificationContext'
import { useHistory } from 'react-router-dom'
import './Login.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useContext(UserContext)
  const { setNotification } = useContext(NotificationContext)
  const history = useHistory()

  const handleLogin = (event) => {
    event.preventDefault()

    const objUser = {
      username,
      password
    }

    login(objUser)
    setNotification('success', `Bienvenido ${objUser.username}`)
    history.push('/')
  }

  return (
    <div className="container">
      <h2>SignIn</h2>
      <form onSubmit={handleLogin}>
        <div className="flex"><h5 className="log" >Username</h5>
          <input
            className="margin-b"
            type='text'
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div className="flex"><h5 className="log" >Password</h5>
          <input
            className="margin-b"
            type='password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button className="Button" type='submit'>login</button>
      </form>
    </div>
  )
}

export default Login