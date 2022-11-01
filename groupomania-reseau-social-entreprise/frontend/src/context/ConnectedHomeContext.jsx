import { createContext, useState } from 'react'

export const ConnectedHomeContext = createContext()

export function ConnectedHomeContextProvider(props) {
    const [modalMenuState, setModalMenuState] = useState({
        actuality: true,
        myProfile: false,
        messages: false,
        settings: false,
    })

    const toggleMenuModal = (modal) => {
        if (modal === 'actualityThread') {
            setModalMenuState({
                actuality: true,
                myProfile: false,
                messages: false,
                settings: false,
            })
        }
        if (modal === 'myProfile') {
            setModalMenuState({
                actuality: false,
                myProfile: true,
                messages: false,
                settings: false,
            })
        }
        if (modal === 'messages') {
            setModalMenuState({
                actuality: false,
                myProfile: false,
                messages: true,
                settings: false,
            })
        }
        if (modal === 'settingsOptions') {
            setModalMenuState({
                actuality: false,
                myProfile: false,
                messages: false,
                settings: true,
            })
        }
    }

    return (
        <ConnectedHomeContext.Provider
            value={{ modalMenuState, toggleMenuModal }}
        >
            {props.children}
        </ConnectedHomeContext.Provider>
    )
}
