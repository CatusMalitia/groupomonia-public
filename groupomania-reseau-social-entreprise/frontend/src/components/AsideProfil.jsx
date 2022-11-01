import React, { useContext, useEffect, useState } from 'react'
import { ConnectedHomeContext } from '../context/ConnectedHomeContext'
import { AsideProfilContext } from '../context/asideProfilContext'
import AuthContext from '../context/authContext'
import styled from 'styled-components'
import colors from '../style/Colors'
import '../styles/StyleButton.css'
import '../styles/DisplayModalsMenu.css'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    faCircleXmark,
    faGear,
    faMessage,
    faNewspaper,
    faUser,
} from '@fortawesome/free-solid-svg-icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom'
import '../styles/AnchorLink.css'
import '../styles/AnimationMenuSelect.css'

const AsideProfilContenair = styled.div.attrs({
    id: 'asideProfil',
})`
    width: 26%;
    height: 100%;
    background-color: ${colors.tertiary};
    position: fixed;
    z-index: 9;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 961px) {
        width: 70%;
        height: 100.5%;
        z-index: 12;
        border-right: 2px solid ${colors.secondary};
    }
`

const BlockAsideProfil = styled.div`
    width: 100px;
    @media screen and (max-width: 961px) {
        display: flex;
        width: 100px;
        height: 100%;
        background-color: red;
    }
`

const MenuAcces = styled.div.attrs({
    id: 'menuAcces',
})`
    display: none;
    @media screen and (max-width: 961px) {
        width: 100%;
        height: 4%;
        min-height: 38px;
        display: flex;
        justify-content: flex-end;
        border-bottom: 2px solid ${colors.secondary};
        background-color: ${colors.tertiary};
        filter: brightness(90%);
    }
`

const BlockButtonCloseMenuSelect = styled.button.attrs({
    id: 'blockButtonClose',
})`
    width: 40px;
    height: 100%;
    margin-top: auto;
    margin-bottom: auto;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
`

const BlockIcon = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    filter: brightness(180%);
    &:hover {
        filter: brightness(150%);
    }
`

const ProfilUser = styled.div`
    width: 96%;
    height: 30%;
    min-height: 280px;
    background-color: ${colors.secondary};
    border-radius: 14px;
    box-shadow: 0 0 5px ${colors.secondary};
    margin-top: 6px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 961px) {
        height: 25%;
    }
`

const WallpaperUser = styled.div`
    width: 97.5%;
    height: 54%;
    border: 2px solid ${colors.tertiary};
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    margin-top: 3px;
    margin-left: auto;
    margin-right: auto;
`

const PictureUser = styled.div`
    width: 90px;
    height: 90px;
    border: 2px solid ${colors.tertiary};
    border-radius: 100%;
    background-color: #f8f1f1;
    margin-top: -45px;
    position: absolute;
    left: calc(50% - 45px);
    text-align: center;
    @media screen and (max-width: 961px) {
        width: 80px;
        height: 80px;
        margin-top: -30px;
        left: calc(50% - 40px);
    }
`
const ImageLandscape = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`

const ImagePicture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
`

const DivFont = styled.div`
    width: 100%;
    height: 100%;
`

const NameUser = styled.div`
    width: 96%;
    height: 10%;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    @media screen and (max-width: 961px) {
    }
`

const CityUser = styled.div`
    width: 96%;
    height: 10%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`

const DivBio = styled.div`
    width: 96%;
    height: 40%;
    min-height: 200px;
    background-color: ${colors.secondary};
    border-radius: 10px;
    box-shadow: 0 0 3px ${colors.secondary};
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 4px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: ${colors.tertiary};
    @media screen and (max-width: 961px) {
        height: 25%;
    }
`

const Bio = styled.div`
    width: calc(100% - 18px);
    height: 100%;
    background-color: ${colors.secondary};
    border: 3px solid ${colors.tertiary};
    border-radius: 10px;
    box-shadow: 0 0 3px ${colors.secondary};
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 12px;
    padding-top: 12px;
    font-size: 17px;
    overflow-x: hidden;
    overflow-y: scroll;
    word-wrap: break-word;
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px ${colors.secondary};
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${colors.tertiary};
        border-radius: 20px;
    }
    &::-webkit-scrollbar {
        width: 10px;
        margin-right: 10px;
    }
`

const DivFontTextBio = styled.div`
    margin-left: 14px;
    margin-right: 16px;
    margin-top: 10px;
    font-size: 20px;
`

const MenuSelect = styled.div`
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const FilActuality = styled.div`
    width: 96%;
    padding-top: 3.4%;
    padding-bottom: 3.4%;
    background-color: ${colors.secondary};
    border-radius: 10px;
    box-shadow: 0 0 3px ${colors.secondary};
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    text-decoration: none;
    display: flex;
    &:hover {
        filter: brightness(95%);
        transition-delay: 200ms;
    }
`
const MyProfile = styled.div`
    width: 96%;
    padding-top: 3.4%;
    padding-bottom: 3.4%;
    background-color: ${colors.secondary};
    border-radius: 10px;
    box-shadow: 0 0 3px ${colors.secondary};
    margin-top: 3%;
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    display: flex;
    &:hover {
        filter: brightness(95%);
        transition-delay: 200ms;
    }
`

const Message = styled.div`
    width: 96%;
    padding-top: 3.4%;
    padding-bottom: 3.4%;
    background-color: ${colors.secondary};
    border-radius: 10px;
    box-shadow: 0 0 3px ${colors.secondary};
    margin-top: 3%;
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    display: flex;
    &:hover {
        filter: brightness(95%);
        transition-delay: 200ms;
    }
`

const Settings = styled.div`
    width: 96%;
    padding-top: 3.4%;
    padding-bottom: 3.4%;
    background-color: ${colors.secondary};
    border-radius: 10px;
    box-shadow: 0 0 3px ${colors.secondary};
    margin-top: 3%;
    margin-bottom: 3%;
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    display: flex;
    &:hover {
        filter: brightness(95%);
        transition-delay: 200ms;
    }
`

const DivFontText = styled.div`
    margin-left: 24px;
    margin-right: 16px;
    text-decoration: none;
`

const DivFontTextLogout = styled.div`
    margin-left: 30px;
    margin-right: 16px;
`

function AsideProfil() {
    const authContext = useContext(AuthContext)
    const [dataResult, setDataResult] = useState({ infos: {} })
    const { toggleMenuModal, modalMenuState } = useContext(ConnectedHomeContext)
    const { modalAsideProfilState, toggleAsideProfilModal } =
        useContext(AsideProfilContext)
    const urlGet = 'http://localhost:4200/api/ficheUser/' + authContext.userId

    /* useEffect(() => {
    fetch(urlGet,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authContext.token}`
      }
    })
    
      .then( response => {
        return response.json()
      })
      .then( result  => setDataResult({infos: result}))
      
    }, []) */
    useEffect(() => {
        const fetchHandler = async () => {
            const response = await fetch(urlGet, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authContext.token}`,
                },
            })

            const dataResponse = await response.json()
            if (response.ok) {
                setDataResult({ infos: dataResponse })
            }
        }

        fetchHandler()
    }, [])

    const closeMenuSelect = async () => {
        if (document.body.clientWidth < 961) {
            const asideProfil = document.querySelector('#asideProfil')
            asideProfil.classList.add('effectCloseMenuSelect')
            asideProfil.classList.remove('effectOpenMenuSelect')
        }
    }

    const closeMenuSelectFuncAsync = async () => {
        await closeMenuSelect()

        if (closeMenuSelect === true) {
            toggleAsideProfilModal('asideProfilClose')
        }
    }

    const clickActualityThread = () => {
        toggleMenuModal('actualityThread')
        closeMenuSelect()
    }

    const clickMyProfile = () => {
        toggleMenuModal('myProfile')
        closeMenuSelect()
    }

    const clickMessages = () => {
        toggleMenuModal('messages')
        closeMenuSelect()
    }

    const clickSettings = () => {
        toggleMenuModal('settingsOptions')
        closeMenuSelect()
    }

    return (
        <>
            <AsideProfilContenair>
                <MenuAcces>
                    <BlockButtonCloseMenuSelect
                        onClick={() => closeMenuSelectFuncAsync()}
                    >
                        <BlockIcon>
                            <FontAwesomeIcon
                                icon={faXmark}
                                fontSize="26px"
                                color={colors.tertiary}
                            />
                        </BlockIcon>
                    </BlockButtonCloseMenuSelect>
                </MenuAcces>
                <ProfilUser>
                    <WallpaperUser>
                        <ImageLandscape
                            src={
                                dataResult.infos.imageUrlLandscapePicture || ' '
                            }
                        ></ImageLandscape>
                    </WallpaperUser>

                    <PictureUser>
                        <DivFont>
                            <ImagePicture
                                src={
                                    dataResult.infos.imageUrlProfilePicture ||
                                    ' '
                                }
                            ></ImagePicture>
                        </DivFont>
                    </PictureUser>

                    <NameUser>
                        {dataResult.infos.firstname} {dataResult.infos.lastname}
                    </NameUser>
                    <CityUser>Ville</CityUser>
                </ProfilUser>

                <DivBio>
                    <DivFontTextBio>Ma Bio</DivFontTextBio>
                    <Bio>{dataResult.infos.bioProfile}</Bio>
                </DivBio>

                <MenuSelect>
                    <AnchorLink className="noDecoration" href="#anchorMenu">
                        <FilActuality onClick={() => clickActualityThread()}>
                            <DivFontText>
                                <FontAwesomeIcon
                                    icon={faNewspaper}
                                    fontSize="20px"
                                />
                            </DivFontText>
                            Actualités
                        </FilActuality>
                    </AnchorLink>
                    <AnchorLink className="noDecoration" href="#anchorMenu">
                        <MyProfile onClick={() => clickMyProfile()}>
                            <DivFontText>
                                <FontAwesomeIcon
                                    icon={faUser}
                                    fontSize="20px"
                                />
                            </DivFontText>
                            Mon profil
                        </MyProfile>
                    </AnchorLink>
                    <AnchorLink className="noDecoration" href="#anchorMenu">
                        <Message onClick={() => clickMessages()}>
                            <DivFontText>
                                <FontAwesomeIcon
                                    icon={faMessage}
                                    fontSize="20px"
                                />
                            </DivFontText>
                            Messages
                        </Message>
                    </AnchorLink>
                    <AnchorLink className="noDecoration" href="#anchorMenu">
                        <Settings onClick={() => clickSettings()}>
                            <DivFontText>
                                <FontAwesomeIcon
                                    icon={faGear}
                                    fontSize="20px"
                                />
                            </DivFontText>
                            Paramètres
                        </Settings>
                    </AnchorLink>
                </MenuSelect>
            </AsideProfilContenair>
        </>
    )
}

export default AsideProfil
