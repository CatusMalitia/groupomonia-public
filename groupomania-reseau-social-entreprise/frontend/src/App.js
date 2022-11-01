import React, { useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Private from './pages/Private/Private'
import ConnectedHome from './pages/ConnectedHome/ConnectedHome'
import GlobalStyle from './style/Body'
import './styles/App.css'
import './styles/Cursor.css'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/private" element={<Private />}>
                    <Route
                        path="/private/connected-home/"
                        element={<ConnectedHome />}
                    />
                </Route>
            </Routes>
            <GlobalStyle />
        </div>
    )
}

export default App
