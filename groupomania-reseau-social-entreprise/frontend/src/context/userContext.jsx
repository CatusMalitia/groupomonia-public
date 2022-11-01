import { createContext, useState } from 'react'

export const UserContext = createContext()

export function UserContextProvider(props) {
    const [modalState, setModalState] = useState({
        signUpModal: false,
    })

    const toggleModals = (modal) => {
        if (modal === 'signUpModal') {
            setModalState({
                signUpModal: true,
            })
        }
        if (modal === 'close') {
            setModalState({
                signUpModal: false,
            })
        }
    }

    return (
        <UserContext.Provider value={{ modalState, toggleModals }}>
            {props.children}
        </UserContext.Provider>
    )
}
