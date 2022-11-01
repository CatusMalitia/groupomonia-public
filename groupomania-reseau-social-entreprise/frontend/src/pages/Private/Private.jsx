import React, { useContext } from 'react'
import AuthContext from '../../context/authContext'
import { Outlet, Navigate } from 'react-router-dom'

export default function Private() {
    const authContext = useContext(AuthContext)

    if (!authContext.userId && !authContext.token) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}
