import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { authenticated } from '../store'
import { useNavigate } from 'react-router-dom'

function Guest({children}) {
    const auth = useRecoilValue(authenticated)

    let navigate = useNavigate()

    useEffect(() => {
        if (auth.check) {
            navigate("/")
        }
    }, [auth.check, navigate])

    return children
}

export default Guest