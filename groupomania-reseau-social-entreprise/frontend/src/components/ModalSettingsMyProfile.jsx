import React, { useContext } from 'react'
import AuthContext from '../context/authContext'
import Button from './Button'
import styled from 'styled-components'
import colors from '../style/Colors'
import '../styles/StyleButton.css'
import '../styles/DisplayModalsMenu.css'

const ContenairMenuModals = styled.div`
    width: 72%;
    height: 100%;
    margin-bottom: 20px;
    margin-left: 27%;
    margin-top: 18%;
    @media screen and (max-width: 961px) {
        width: 100%;
        margin-left: 0%;
        opacity: 0;
        animation-name: displayModalsMenu;
        animation-delay: 120ms;
        animation-duration: 300ms;
        animation-fill-mode: forwards;
    }
`

const BlockMenuModals = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    top: 50px;
`

function Settings() {
    const authContext = useContext(AuthContext)

    return (
        <ContenairMenuModals>
            <BlockMenuModals>
                <Button value={'Thèmes'} className={'buttonMenuSettings'} />
                <Button
                    value={'Informations personnelles'}
                    className={'buttonMenuSettings'}
                />
                <Button
                    value={'Nous signaler un bug'}
                    className={'buttonMenuSettings'}
                />
                <Button
                    value={'Nous contacter'}
                    className={'buttonMenuSettings'}
                />
                <Button
                    value={'Suppression de compte'}
                    className={'buttonMenuSettings'}
                />
                <Button
                    value={'Déconnexion'}
                    className={'buttonMenuSettings'}
                    onClick={authContext.logout}
                />
            </BlockMenuModals>
        </ContenairMenuModals>
    )
}

export default Settings
