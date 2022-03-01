import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [message, setMessage] = useState('')

    const credentials = {
        email, password
    }

    const login = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.post('login', credentials)
            localStorage.setItem('tokenUser', response.data.token)
            navigate("/")
        } catch (e) {
            setErrors(e.response.data.errors)
            setMessage(e.response.data.message)
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    {
                        message ? <div className="alert alert-danger" role="alert">{message}</div> : ''
                    }
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form onSubmit={login}>
                                <div className="mb-4">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="email" />
                                    {
                                        errors.email ? <div className="invalid-feedback">{errors.email[0]}</div> : ''
                                    }
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} id="password" />
                                    {
                                        errors.password ? <div className="invalid-feedback">{errors.password[0]}</div> : ''
                                    }
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login