import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { authenticated } from '../store'
import { useNavigate } from 'react-router-dom'

function Authenticated({children}) {
    const [auth, setAuth] = useRecoilState(authenticated)

    let navigate = useNavigate()

    useEffect(() => {
        if (!auth.check) {
            navigate("/login")
        }
    }, [auth.check])

    return children
}

export default Authenticated