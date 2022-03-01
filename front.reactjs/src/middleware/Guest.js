import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { authenticated } from '../store'
import { useNavigate } from 'react-router-dom'

function Guest({children}) {
    const [auth, setAuth] = useRecoilState(authenticated)

    let navigate = useNavigate()

    useEffect(() => {
        if (auth.check) {
            navigate("/")
        }
    }, [auth.check])

    return children
}

export default Guest