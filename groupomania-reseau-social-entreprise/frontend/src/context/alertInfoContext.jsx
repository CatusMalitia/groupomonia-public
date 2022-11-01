import { createContext, useState, useEffect } from 'react'

export const AlertInfoContext = createContext()

export function AlertInfoContextProvider(props) {
    const [alertInfoState, setAlertInfoState] = useState({
        alertInfoSignUp: false,
    })

    const toggleAlertInfo = (alert) => {
        if (alert === 'alertInfoError') {
            setAlertInfoState({
                alertInfoSignUp: true,
            })
        }
        if (alert === 'alertInfoNoError') {
            setAlertInfoState({
                alertInfoSignUp: false,
            })
        }
    }

    return (
        <AlertInfoContext.Provider value={{ alertInfoState, toggleAlertInfo }}>
            {props.children}
        </AlertInfoContext.Provider>
    )
}
