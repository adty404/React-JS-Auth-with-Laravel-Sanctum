import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { authenticated } from '../store'
import { useNavigate } from 'react-router-dom'

function Authenticated({children}) {
    const auth = useRecoilValue(authenticated)

    let navigate = useNavigate()

    useEffect(() => {
        if (!auth.check) {
            navigate("/login")
        }
    }, [auth.check, navigate])

    return children
}

export default Authenticated