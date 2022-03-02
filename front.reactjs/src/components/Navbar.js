import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { authenticated } from '../store'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'

function Navbar() {
    const [auth, setAuth] = useRecoilState(authenticated)
    const logout = async () => {
        try {
            let response = await axios.post('logout')
            setAuth({
                check: false
            })
            localStorage.removeItem('tokenUser')
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } catch (e) {
            toast.error(e, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                            </li>
                        </ul>

                        {
                            auth.check ?
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/">{auth.user.name}</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link btn" onClick={logout}>Logout</button>
                                    </li>
                                </ul>
                            :
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/login">Login</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/register">Register</NavLink>
                                    </li>
                                </ul>

                        }
                    </div>
                </div>
            </nav>

            <Outlet />
            <ToastContainer />
        </div>
    )
}

export default Navbar