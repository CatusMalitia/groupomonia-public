import React, { useContext, useEffect, useState } from 'react'
import AsideProfil from '../../components/AsideProfil'
import { ConnectedHomeContext } from '../../context/ConnectedHomeContext'
import { AsideProfilContext } from '../../context/asideProfilContext'
import AuthContext from '../../context/authContext'
import styled from 'styled-components'
import colors from '../../style/Colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Title from '../../components/TitleA'
import '../../styles/InputFocus.css'
import '../../styles/InputStyle.css'
import '../../styles/AlertInfo.css'
import '../../styles/InputFocus.css'
import '../../styles/InputStyle.css'
import '../../styles/AnchorLink.css'
import '../../styles/AnimationMenuSelect.css'
import ModalPageMyProfile from '../../components/ModalPageMyProfile'
import ModalSettingsMyProfile from '../../components/ModalSettingsMyProfile'
import Actuality from '../../components/ModalAcutalityMyProfile'

const ContenairPage = styled.div`
    width: 100%;
    height: 100%;
    margin-top: -18%;
    display: flex;
    position: absolute;
`

const MarginAsideLeft = styled.div`
    width: 2px;
    height: 100%;
    background-color: ${colors.secondary};
    opacity: 0.7;
    position: fixed;
    z-index: 10;
    @media screen and (max-width: 961px) {
        opacity: 1;
    }
`

const MarginAsideRight = styled.div`
    width: 2px;
    height: 100%;
    background-color: ${colors.secondary};
    opacity: 0.7;
    position: fixed;
    left: 26%;
    z-index: 10;
    @media screen and (max-width: 961px) {
        display: none;
    }
`

const MarginAsideRightPage = styled.div`
    width: 2px;
    height: 100%;
    background-color: ${colors.secondary};
    opacity: 0.7;
    position: fixed;
    right: 0%;
    z-index: 10;
`

const MenuPricinpal = styled.div`
    width: 74%;
    background-color: ${colors.tertiary};
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 26%;
    z-index: 9;
    @media screen and (max-width: 961px) {
        width: 100%;
        left: 0%;
    }
`

const DivAnchor = styled.div.attrs({
    id: 'anchorMenu',
})`
    position: absolute;
    top: 0;
`

const TitlePage = styled.div`
    background-color: ${colors.tertiary};
    margin-bottom: 5%;
    position: relative;
    z-index: 9;
    @media screen and (max-width: 961px) {
        margin-top: 2%;
        margin-bottom: 3%;
    }
`

const BlockButtonOpenMenuSelect = styled.div.attrs({
    id: 'blockButtonOpen',
})`
    @media screen and (max-width: 961px) {
        width: 50px;
        height: 40px;
        text-align: center;
        position: absolute;
        top: 0%;
        left: 0;
        z-index: 20;
        filter: brightness(180%);
        &:hover {
            filter: brightness(150%);
        }
        @media screen and (min-width: 961px) {
        }
    }
`

const ContenairPost = styled.div`
    width: 72%;
    height: 100%;
    margin-bottom: 20px;
    margin-left: 27%;
    margin-top: 18%;
    &:hover {
        filter: brightness(95%);
        transition-delay: 200ms;
    }
`

const ContenairMenuModals = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
    margin-left: 27%;
    margin-top: 18%;
`

const MarginTopSide = styled.div`
    width: 98%;
    height: 3px;
    background-color: ${colors.secondary};
    opacity: 0.7;
    margin-left: auto;
    margin-right: auto;
    z-index: 10;
`

const DivTitle = styled.div`
    position: relative;
    right: 15%;
    @media screen and (max-width: 961px) {
        right: 0%;
    }
`

const Button = styled.input.attrs({
    type: 'button',
})`
    width: 100px;
    height: 100px;
`

function ConnectedHome() {
    const { toggleMenuModal, modalMenuState } = useContext(ConnectedHomeContext)
    const { modalAsideProfilState, toggleAsideProfilModal } =
        useContext(AsideProfilContext)
    const authContext = useContext(AuthContext)
    const [dataResult, setDataResult] = useState({ infos: {} })
    const urlGet = 'http://localhost:4200/api/ficheUser/' + authContext.userId
    // const [load, setLoad] = useState(false)
    useEffect(() => {
        fetch(urlGet, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authContext.token}`,
            },
        })
            .then((resp) => resp.json())
            .then((data) => setDataResult({ infos: data }))
    }, [])

    if (document.body.clientWidth > 961) {
        modalAsideProfilState.asideProfil = true
    }

    const openMenuSelect = async () => {
        await toggleAsideProfilModal('asideProfilDisplay')

        if (document.body.clientWidth < 961) {
            const asideProfil = document.querySelector('#asideProfil')
            asideProfil.classList.remove('effectCloseMenuSelect')
            asideProfil.classList.add('effectOpenMenuSelect')
        }
    }

    const [size, setSize] = useState({ x: 0 })

    useEffect(() => {
        const addListenerResize = (e) => {
            window.addEventListener('resize', function (e) {
                if (e.target.innerWidth > 961) {
                    toggleAsideProfilModal('asideProfilDisplay')
                } else {
                    toggleAsideProfilModal('asideProfilClose')
                }
            })
        }

        const removeListenerResize = () => {
            window.removeEventListener('resize', function (e) {
                if (e.target.innerWidth > 961) {
                    toggleAsideProfilModal('asideProfilDisplay')
                } else {
                    toggleAsideProfilModal('asideProfilClose')
                }
            })
        }

        addListenerResize()
        return () => removeListenerResize()
    }, [])

    return (
        <>
            <ContenairPage>
                <MarginAsideLeft />
                {modalAsideProfilState.asideProfil && <AsideProfil />}
                <MarginAsideRightPage />
                <MenuPricinpal>
                    <TitlePage>
                        <BlockButtonOpenMenuSelect
                            onClick={() => openMenuSelect()}
                        >
                            <FontAwesomeIcon
                                icon={faBars}
                                fontSize="40px"
                                color={colors.tertiary}
                            />
                        </BlockButtonOpenMenuSelect>
                        <DivTitle>
                            <Title />
                        </DivTitle>
                    </TitlePage>
                    <MarginTopSide />
                </MenuPricinpal>

                <DivAnchor></DivAnchor>

                <MarginAsideRight />
            </ContenairPage>

            {modalMenuState.actuality && <Actuality />}

            {modalMenuState.myProfile && <ModalPageMyProfile />}

            {modalMenuState.messages && (
                <ContenairMenuModals></ContenairMenuModals>
            )}
            {modalMenuState.settings && <ModalSettingsMyProfile />}
        </>
    )
}

export default ConnectedHome
