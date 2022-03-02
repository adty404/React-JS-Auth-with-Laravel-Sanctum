import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])
    const [message, setMessage] = useState('')

    let navigate = useNavigate()

    const record = { name, email, password, password_confirmation }
    const store = async (e) => {
        e.preventDefault()
        try {
            await axios.post('register', record)
            setName('')
            setEmail('')
            setPassword('')
            setPasswordConfirmation('')
            navigate("/login")
        } catch (e) {
            setErrors(e.response.data.errors)
            setMessage(e.response.data.message)
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    {
                        message ? <div className="alert alert-danger" role="alert">{message}</div> : ''
                    }
                    <div className="card">
                        <div className="card-header">Register</div>
                        <div className="card-body">
                            <form onSubmit={store}>
                                <div className="mb-4">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} name="name" className={`form-control ${errors.name ? 'is-invalid' : ''}`} id="name" />
                                    {
                                        errors.name ? <div className="invalid-feedback">{errors.name[0]}</div> : ''
                                    }
                                </div>
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
                                <div className="mb-4">
                                    <label htmlFor="password_confirmation">Confirm Password</label>
                                    <input type="password" onChange={(e) => setPasswordConfirmation(e.target.value)} value={password_confirmation} name="password_confirmation" className="form-control" id="password_confirmation" />
                                </div>
                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register