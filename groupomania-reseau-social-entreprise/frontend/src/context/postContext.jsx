import { createContext, useState } from 'react'

export const PostContext = createContext()

export function PostContextProvider(props) {
    const [modalPostState, setModalPostState] = useState({
        postModal: false,
    })

    const togglePostModal = (modal) => {
        if (modal === 'postModal') {
            setModalPostState({
                postModal: true,
            })
        }
        if (modal === 'close') {
            setModalPostState({
                postModal: false,
            })
        }
    }

    return (
        <PostContext.Provider value={{ modalPostState, togglePostModal }}>
            {props.children}
        </PostContext.Provider>
    )
}
