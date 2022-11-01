import { createContext, useState } from 'react'

export const ValidationContext = createContext()

export function ValidationContextProvider(props) {
    const [modalValidationState, setValidationState] = useState({
        validationModal: true,
    })

    const toggleValidationModal = (modal) => {
        if (modal === 'validate') {
            setValidationState({
                validationModal: true,
            })
        }
        if (modal === 'messageOff') {
            setValidationState({
                validationModal: false,
            })
        }
    }

    return (
        <ValidationContext.Provider
            value={{ modalValidationState, toggleValidationModal }}
        >
            {props.children}
        </ValidationContext.Provider>
    )
}
