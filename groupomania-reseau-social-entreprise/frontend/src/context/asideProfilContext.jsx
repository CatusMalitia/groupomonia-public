import { createContext, useState } from 'react'

export const AsideProfilContext = createContext()

export function AsideProfilContextProvider(props) {
    const [modalAsideProfilState, setModalAsideProfilState] = useState({
        asideProfil: false,
    })
    const toggleAsideProfilModal = (modal) => {
        if (modal === 'asideProfilDisplay') {
            setModalAsideProfilState({
                asideProfil: true,
            })
        }
        if (modal === 'asideProfilClose') {
            setModalAsideProfilState({
                asideProfil: false,
            })
        }
    }
    return (
        <AsideProfilContext.Provider
            value={{ modalAsideProfilState, toggleAsideProfilModal }}
        >
            {props.children}
        </AsideProfilContext.Provider>
    )
}
