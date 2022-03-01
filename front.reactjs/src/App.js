import React, { useEffect, useState } from "react";
import Router from "./router";
import { authenticated } from './store'
import { useRecoilState } from 'recoil'
import axios from 'axios'

function App() {
    const [auth, setAuth] = useRecoilState(authenticated)
    const [ready, setReady] = useState(false)

    const getUser = async () => {
        try {
            let response = await axios.get('me')
            setAuth({
                check: true,
                user: response.data.data,
            })
        } catch (e) {
            console.log(e);
        }

        setReady(true)
    }

    useEffect(() => {
        getUser()
    }, [auth.check, ready])

    if (!ready) {
        return (
            <div className="row justify-content-center align-items-center vh-100">
                <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <path fill="none" stroke="#e90c59" strokeWidth={8} strokeDasharray="42.76482137044271 42.76482137044271" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" strokeLinecap="round" style={{transform: 'scale(0.8)', transformOrigin: '50px 50px'}}>
                        <animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0;256.58892822265625" />
                    </path>
                </svg>
            </div>
        )
    }

    return <Router />
}

export default App;
