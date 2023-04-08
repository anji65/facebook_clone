import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import './login.scss'

const Login = () => {
  const { login } = useContext(AuthContext)
  const [err, setErr] = useState(null)
  const [data, setData] = useState({
    userName: '',
    password: ''
  })

  const handleChane = (e) => {
    setData((prev) => {
      return {
        ...data,
        [e.target.name]: e.target.value
      }
    })
  }

  const loginUser = async (e) => {
    e.preventDefault()

    try {
      await axios.post("http://localhost:8000/api/auth/login",)
    } catch (err) {
      setErr(err)
    }
  }

  const handleLogin = () => {
    login()
  }
  
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga perspiciatis deserunt fugit incidunt cupiditate possimus optio voluptatem commodi, dolorum laboriosam tenetur vero ratione earum ipsum omnis officiis mollitia nihil aut!
          </p>
          <span>Dont't you have an account?</span>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='Username' name='userName' onChange={handleChane} />
            <input type="text" placeholder='Password' name='password' value={data.password} onChange={handleChane} />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login