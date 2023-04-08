import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.scss'
import axios from 'axios'

const Register = () => {
  const [err, setErr] = useState(null)
  const [data, setData] = useState({
    name: '',
    email: '',
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

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8000/api/auth/register', data)
    } catch (err) {
      setErr(err.response.data)
    }
  }

 



  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Social World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga perspiciatis deserunt fugit incidunt cupiditate possimus optio voluptatem commodi, dolorum laboriosam tenetur vero ratione earum ipsum omnis officiis mollitia nihil aut!
          </p>
          <span>Do you have an account?</span>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Username' name="userName" onChange={handleChane} />
            <input type="email" placeholder='Email' name='email' onChange={handleChane} />
            <input type="text" placeholder='Name' name="name" onChange={handleChane} />
            <input type="password" placeholder='Password' name="password" onChange={handleChane} />
            {err && <p style={{ color: 'red' }}>err</p>}
            <button onClick={onSubmitForm}>Register</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Register