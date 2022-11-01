import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const defaultValue = {
    token: '',
    userId: '',
    login: () => {},
    logout: () => {},
}

const AuthContext = createContext(defaultValue)

const tokenLocalStorage = localStorage.getItem('token')
const userIdLocalStorage = localStorage.getItem('userId')

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(tokenLocalStorage)
    const [userId, setUserId] = useState(userIdLocalStorage)
    const navigate = useNavigate()

    const loginHandle = (token, userId) => {
        setToken(token)
        setUserId(userId)
        localStorage.setItem('token', token)
        localStorage.setItem('userId', userId)
    }
    const logoutHandle = () => {
        setToken(token)
        setUserId(userId)
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        navigate('/')
    }

    const contextValue = {
        token: token,
        userId: userId,
        login: loginHandle,
        logout: logoutHandle,
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
