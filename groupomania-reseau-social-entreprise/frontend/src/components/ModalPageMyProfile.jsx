import React, { useContext, useEffect, useRef, useState } from 'react'
import AuthContext from '../context/authContext'
import * as RegexFunctionBlur from './RegexFunctionBlur'
import * as RegexFunctionChange from './RegexFunctionChange'
import * as RegexFunctionFocus from './RegexFunctionFocus'
import styled from 'styled-components'
import colors from '../style/Colors'
import '../styles/AlertInfo.css'
import '../styles/InputFocus.css'
import '../styles/InputStyle.css'
import '../styles/EffectErrorAuth.css'
import Input from './Input'
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
        animation-duration: 300ms;
        animation-fill-mode: forwards;
    }
`

const BlockProfile = styled.div`
    width: 96%;
    border: solid 2px rgba(255, 215, 215, 0.7);
    border-radius: 10px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 40px;
    display: flex;
`

const BlockProfileMargin = styled.div`
    width: 4%;
    height: 100%;
`

const ContentProfile = styled.div`
    width: 96%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const DivNameProfile = styled.div`
    width: 100%;
    height: 80px;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
`

const DivNameInput = styled.div`
    width: 48%;
    height: 100%;
    margin-top: 40px;
    display: flex;
`

const FirstNameInput = styled.input.attrs({
    type: 'text',
    value: 'Prénom',
    name: 'firstName',
    id: 'signUpFirstName',
    className: 'input',
    //readonly
})`
    width: 100%;
    height: 60%;
    font-size: 17px;
    font-family: 'Lato', sans-serif;
    color: #4e5166;
    border: 1px solid #4e5166;
    border-radius: 6px;
    background-color: #ffd7d7;
    box-shadow: 0 0 3px ${colors.secondary};
    margin-top: auto;
    margin-bottom: auto;
`

const LastNameInput = styled.input.attrs({
    type: 'text',
    value: 'Nom',
    name: 'lastName',
    id: 'signUpLastName',
    className: 'input',
    //readonly
})`
    width: 100%;
    height: 60%;
    font-size: 17px;
    font-family: 'Lato', sans-serif;
    color: #4e5166;
    border: 1px solid #4e5166;
    border-radius: 6px;
    background-color: #ffd7d7;
    box-shadow: 0 0 3px ${colors.secondary};
    margin-top: auto;
    margin-bottom: auto;
`

const DivCityInput = styled.div`
    width: 100%;
    height: 80px;
    position: relative;
    margin-right: auto;
    margin-top: 20px;
    display: flex;
`

const CityInput = styled.input.attrs({
    type: 'text',
    value: 'Ville',
    name: 'city',
    id: 'signUpCity',
    className: 'input',
})`
    width: 100%;
    height: 60%;
    font-size: 17px;
    font-family: 'Lato', sans-serif;
    color: #4e5166;
    border: 1px solid #4e5166;
    border-radius: 6px;
    background-color: #ffd7d7;
    box-shadow: 0 0 3px ${colors.secondary};
    margin-top: auto;
    margin-bottom: auto;
    position: relative;
`

const DivBioMyProfile = styled.div`
    width: 100%;
    height: 30%;
    min-height: 220px;
    background-color: ${colors.secondary};
    border-radius: 10px;
    box-shadow: 0 0 3px ${colors.secondary};
    margin-top: 5%;
    margin-bottom: 10%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const BioMyProfile = styled.textarea.attrs({
    type: 'text',
    cols: '40',
    rows: '5',
    name: 'bio',
    placeholder: 'Racontez votre parcours professionnel...',
    id: 'signUpBio',
})`
    width: 98%;
    height: 280px;
    margin-top: 15px;
    margin-left: 15px;
    margin-right: 15px;
    font-size: 17px;
    font-family: 'Lato', sans-serif;
    background: transparent;
    resize: none;
    border: none;
    outline: none;
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px ${colors.tertiary};
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

const TextAreaCountSpan = styled.span.attrs({
    id: 'textAreaCount',
    onkeyup: 'textAreaCount();',
})`
    width: 240px;
    height: 30px;
    margin-left: auto;
    margin-top: 10px;
`

const BlockContenairPicture = styled.div`
    width: 100%;
    height: 400px;
    border-radius: 10px;
    display: flex;
    color: ${colors.tertiary};
    border-color: ${colors.tertiary};
    margin-top: 20px;
    @media screen and (max-width: 768px) {
        height: 200px;
    }
`

const BlockInputPicture = styled.label`
    width: 100%;
    height: 400px;
`
const ImageLandscape = styled.img.attrs({
    id: 'previewLandscape',
})`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const ImageProfile = styled.img.attrs({
    id: 'previewProfile',
})`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`

const InputPictureLandscape = styled.input.attrs({
    type: 'file',
    accept: 'jpeg, jpg, png',
    id: 'landscapePicture',
    name: 'image',
})`
    width: 0.01%;
    height: 0%;
    position: absolute;
    color: ${colors.tertiary};
    border-color: ${colors.tertiary};
`
const InputPictureProfile = styled.input.attrs({
    type: 'file',
    accept: 'jpeg, jpg, png',
    id: 'landscapeProfile',
    name: 'image',
})`
    width: 200px;
    height: 230px;
    position: absolute;
    right: 10%;
    transform: rotate(180deg);
`

const DivHiddenInput = styled.div`
    width: 260px;
    height: 40px;
    background-color: ${colors.tertiary};
    position: absolute;
    top: 102%;
    left: -14%;
`

const DivAsidePictureLeft = styled.div`
    width: 20%;
    height: 100%;
    color: ${colors.tertiary};
    border-color: ${colors.tertiary};
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background: linear-gradient(45deg, ${colors.tertiary}, #94959c);
    margin-left: 0;
`
const DivAsidePictureRight = styled.div`
    width: 20%;
    height: 100%;
    color: ${colors.tertiary};
    border-color: ${colors.tertiary};
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background: linear-gradient(45deg, #94959c, ${colors.tertiary});
    margin-right: 0;
`

const PictureUserMyProfile = styled.div`
    width: 200px;
    height: 200px;
    border: 2px solid ${colors.secondary};
    border-radius: 100%;
    background-color: #f8f1f1;
    position: relative;
    top: -60px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    @media screen and (max-width: 768px) {
        width: 100px;
        height: 100px;
        top: -40px;
    }
`

const ButtonValidation = styled.input.attrs({
    type: 'button',
    value: 'Valider',
    id: 'buttonValidation',
})`
    width: 100%;
    height: 40px;
    margin-left: auto;
    margin-bottom: 20px;
    margin-top: 80px;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
    color: ${colors.tertiary};
    border-color: ${colors.secondary};
    border-radius: 6px;
    background-color: ${colors.secondary};
    cursor: none;
    &:hover {
        transition-delay: 200ms;
        filter: brightness(90%);
    }
    @media screen and (max-width: 961px) {
        margin-top: 10px;
        margin-bottom: 10px;
    }
`

let valueFilePictureLandscape, valueFilePictureProfile

function ModalPageMyProfile() {
    const authContext = useContext(AuthContext)
    const [dataResult, setDataResult] = useState({ infos: {} })
    const [fileLandscape, setFileLandscape] = useState({ file: null })
    const [fileProfile, setFileProfile] = useState({ file: null })
    const [pictureDataLandscape, setPictureDataLandscape] = useState(false)
    const [pictureDataProfile, setPictureDataProfile] = useState(false)

    const urlGet = 'http://localhost:4200/api/ficheUser/' + authContext.userId
    const urlPutLandscape =
        'http://localhost:4200/api/ficheUser/landscape/' + authContext.userId
    const urlPutProfile =
        'http://localhost:4200/api/ficheUser/profile/' + authContext.userId

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
                setDataResult(dataResponse)
            }
        }

        fetchHandler()
    }, [])

    useEffect(() => {
        if (dataResult.imageUrlLandscapePicture !== ' ') {
            setPictureDataLandscape(true)
        }
    }, [])
    useEffect(() => {
        if (dataResult.imageUrlProfilePicture !== ' ') {
            setPictureDataProfile(true)
        }
    }, [])

    const regexBlurFirstName = () => {
        RegexFunctionBlur.infoVisible(
            '#signUpFirstName',
            '#alertInfoFirstName',
            '#alertInfoArrowFirstName',
            'alertInfoFirstNameMinLetterVisibleModalMyProfile',
            'alertInfoMinLetterInvisible',
            'alertInfoFirstNameArrowVisibleModalMyProfile',
            'alertInfoArrowInvisible'
        )
        RegexFunctionBlur.firstName('#signUpFirstName')

        const firstNameBlur = document.querySelector('#signUpFirstName')
        if (firstNameBlur.value.match(/^[a-zA-Z-]{2,25}$/)) {
            RegexFunctionBlur.infoInvisible(
                '#signUpFirstName',
                '#alertInfoFirstName',
                '#alertInfoArrowFirstName',
                'alertInfoMinLetterInvisible',
                'alertInfoFirstNameMinLetterVisibleModalMyProfile',
                'alertInfoArrowInvisible',
                'alertInfoFirstNameArrowVisibleModalMyProfile'
            )
            RegexFunctionBlur.firstName('#signUpFirstName')
        }
    }

    const regexBlurLastName = () => {
        RegexFunctionBlur.infoVisible(
            '#signUpLastName',
            '#alertInfoLastName',
            '#alertInfoArrowLastName',
            'alertInfoLastNameMinLetterVisibleModalMyProfile',
            'alertInfoMinLetterInvisible',
            'alertInfoLastNameArrowVisibleModalMyProfile',
            'alertInfoArrowInvisible'
        )
        RegexFunctionBlur.lastName('#signUpLastName')

        const lastNameBlur = document.querySelector('#signUpLastName')
        if (lastNameBlur.value.match(/^[a-zA-Z-]{2,25}$/)) {
            RegexFunctionBlur.infoInvisible(
                '#signUpLastName',
                '#alertInfoLastName',
                '#alertInfoArrowLastName',
                'alertInfoMinLetterInvisible',
                'alertInfoLastNameMinLetterVisibleModalMyProfile',
                'alertInfoArrowInvisible',
                'alertInfoLastNameArrowVisibleModalMyProfile'
            )
            RegexFunctionBlur.lastName('#signUpLastName')
        }
    }

    const regexFormChangeFirstName = (e) => {
        const newDataResult = { ...dataResult }
        newDataResult.firstname = e.target.value
        setDataResult(newDataResult)

        RegexFunctionChange.infoInvisible(
            '#signUpFirstName',
            '#alertInfoFirstName',
            '#alertInfoArrowFirstName',
            'alertInfoMinLetterInvisible',
            'alertInfoFirstNameMinLetterVisibleModalMyProfile',
            'alertInfoArrowInvisible',
            'alertInfoFirstNameArrowVisibleModalMyProfile'
        )
        RegexFunctionChange.firstName('#signUpFirstName')
    }

    const regexFormChangeLastName = (e) => {
        const newDataResult = { ...dataResult }
        newDataResult.lastname = e.target.value
        setDataResult(newDataResult)

        RegexFunctionChange.infoInvisible(
            '#signUpLastName',
            '#alertInfoLastName',
            '#alertInfoArrowLastName',
            'alertInfoMinLetterInvisible',
            'alertInfoLastNameMinLetterVisibleModalMyProfile',
            'alertInfoArrowInvisible',
            'alertInfoLastNameArrowVisibleModalMyProfile'
        )
        RegexFunctionChange.lastName('#signUpLastName')
    }

    const writeBio = (e) => {
        const newDataResult = { ...dataResult }
        newDataResult.bioProfile = e.target.value
        setDataResult(newDataResult)

        const textAreaCount = () => {
            const textareaBio = document.querySelector('#signUpBio')
            let element = textareaBio.value.length
            let scale = document.querySelector('#textAreaCount')
            scale.innerHTML = element + '/2000 caractères maximum'

            if (textareaBio.value.length > 1999) {
                textareaBio.value = textareaBio.value.substr(
                    textareaBio.value,
                    2000
                )
                scale.style.color = `${colors.primary}`
                scale.classList.add('effectErrorAuth')
                const timerMessageError = setTimeout(
                    () => scale.classList.remove('effectErrorAuth'),
                    700
                )
            }
            if (textareaBio.value.length < 1999) {
                scale.style.color = `${colors.tertiary}`
            }
        }
        textAreaCount()
    }

    const pictureLandscape = (e) => {
        let fileUploadLandscape = e.target.files[0]
        setFileLandscape({ file: fileUploadLandscape })
        let src = URL.createObjectURL(fileUploadLandscape)
        const preview = document.querySelector('#previewLandscape')
        preview.src = src
    }
    valueFilePictureLandscape = fileLandscape.file

    const pictureProfile = (e) => {
        let fileUploadProfile = e.target.files[0]
        setFileProfile({ file: fileUploadProfile })
        let src = URL.createObjectURL(fileUploadProfile)
        const preview = document.querySelector('#previewProfile')
        preview.src = src
    }
    valueFilePictureProfile = fileProfile.file

    const formDataLandscape = new FormData()
    let newInfosUserLandscape = {
        ...dataResult,
        firstname: dataResult.firstname,
        lastname: dataResult.lastname,
        bioProfile: dataResult.bioProfile,
        city: '',
        imageUrlProfilePicture: dataResult.imageUrlProfilePicture,
        imageUrlLandscapePicture: valueFilePictureLandscape,
    }

    const formDataProfile = new FormData()
    let newInfosUserProfile = {
        ...dataResult,
        firstname: dataResult.firstname,
        lastname: dataResult.lastname,
        bioProfile: dataResult.bioProfile,
        city: '',
        imageUrlProfilePicture: valueFilePictureProfile,
        imageUrlLandscapePicture: dataResult.imageUrlLandscapePicture,
    }

    const formDataInfosUser = new FormData()
    let newInfosUser = {
        ...dataResult,
        firstname: dataResult.firstname,
        lastname: dataResult.lastname,
        bioProfile: dataResult.bioProfile,
        city: '',
        imageUrlProfilePicture: dataResult.imageUrlProfilePicture,
        imageUrlLandscapePicture: dataResult.imageUrlLandscapePicture,
    }

    const fetchPut = () => {
        if (
            dataResult.firstname.match(/^[a-zA-Z-]{2,25}$/) &&
            dataResult.lastname.match(/^[a-zA-Z-]{2,25}$/) &&
            valueFilePictureLandscape !== null
        ) {
            formDataLandscape.append(
                'infosUser',
                JSON.stringify(newInfosUserLandscape)
            )
            formDataLandscape.append('image', fileLandscape.file)
            fetch(urlPutLandscape, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json, test/plain',
                    Authorization: `Bearer ${authContext.token}`,
                },
                body: formDataLandscape,
            })
                .then((response) => response.json())
                .catch((err) => console.log(err))
        }
        if (
            dataResult.firstname.match(/^[a-zA-Z-]{2,25}$/) &&
            dataResult.lastname.match(/^[a-zA-Z-]{2,25}$/) &&
            valueFilePictureProfile !== null
        ) {
            formDataProfile.append(
                'infosUser',
                JSON.stringify(newInfosUserProfile)
            )
            formDataProfile.append('image', fileProfile.file)
            fetch(urlPutProfile, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json, test/plain',
                    Authorization: `Bearer ${authContext.token}`,
                },
                body: formDataProfile,
            })
                .then((response) => response.json())
                .catch((err) => console.log(err))
        }
        if (
            dataResult.firstname.match(/^[a-zA-Z-]{2,25}$/) &&
            dataResult.lastname.match(/^[a-zA-Z-]{2,25}$/) &&
            valueFilePictureProfile === null &&
            valueFilePictureLandscape === null
        ) {
            formDataInfosUser.append('infosUser', JSON.stringify(newInfosUser))
            fetch(urlPutProfile, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json, test/plain',
                    Authorization: `Bearer ${authContext.token}`,
                },
                body: formDataInfosUser,
            })
                .then((response) => response.json())
                .catch((err) => console.log(err))
        }
    }

    return (
        <ContenairMenuModals>
            <BlockProfile>
                <div
                    id="alertInfoFirstName"
                    className="alertInfoMinLetterInvisible"
                >
                    <p className="paragraphError"></p>
                    <div
                        id="alertInfoArrowFirstName"
                        className="alertInfoArrowInvisible"
                    ></div>
                </div>
                <div
                    id="alertInfoLastName"
                    className="alertInfoMinLetterInvisible"
                >
                    <p className="paragraphErrorLastName"></p>
                    <div
                        id="alertInfoArrowLastName"
                        className="alertInfoArrowInvisible "
                    ></div>
                </div>
                <div
                    id="alertInfoEmail"
                    className="alertInfoMinLetterInvisible"
                >
                    <p className="paragraphErrorEmail"></p>
                    <div
                        id="alertInfoArrowEmail"
                        className="alertInfoArrowInvisible "
                    ></div>
                </div>
                <div
                    id="alertInfoPassword"
                    className="alertInfoMinLetterInvisible"
                >
                    <p className="paragraphErrorPassword"></p>
                    <div
                        id="alertInfoArrowPassword"
                        className="alertInfoArrowInvisible "
                    ></div>
                </div>
                <BlockProfileMargin />
                <ContentProfile>
                    <form encType="multipart/form-data">
                        <DivNameProfile>
                            <DivNameInput>
                                <input
                                    name={'firstName'}
                                    placeholder={dataResult.firstname}
                                    value={dataResult.firstname || ' '}
                                    id={'signUpFirstName'}
                                    className={'inputsNameMyProfile input'}
                                    onBlur={regexBlurFirstName}
                                    onChange={regexFormChangeFirstName}
                                ></input>
                            </DivNameInput>
                            <DivNameInput>
                                <input
                                    name={'lastName'}
                                    placeholder={dataResult.lastname}
                                    value={dataResult.lastname || ' '}
                                    id={'signUpLastName'}
                                    className={'inputsNameMyProfile input'}
                                    onBlur={regexBlurLastName}
                                    onChange={regexFormChangeLastName}
                                ></input>
                            </DivNameInput>
                        </DivNameProfile>
                        <DivCityInput>
                            <Input
                                name={'city'}
                                placeholder={'Ville'}
                                id={'signUpCity'}
                                className={
                                    'inputsNameMyProfile input'
                                } /*onBlur={regexBlurCity} onChange={regexFormChangeCity}*/
                            />
                        </DivCityInput>
                        <DivBioMyProfile>
                            <BioMyProfile onChange={writeBio}></BioMyProfile>

                            <TextAreaCountSpan>
                                0/800 caractères maximum
                            </TextAreaCountSpan>
                        </DivBioMyProfile>

                        <BlockContenairPicture>
                            <DivAsidePictureLeft />
                            <BlockInputPicture>
                                {pictureDataLandscape ? (
                                    <ImageLandscape
                                        src={
                                            dataResult.imageUrlLandscapePicture
                                        }
                                        alt="photo de fond utilisateur"
                                    ></ImageLandscape>
                                ) : (
                                    <ImageLandscape src=" "></ImageLandscape>
                                )}

                                <InputPictureLandscape
                                    onChange={pictureLandscape}
                                ></InputPictureLandscape>
                            </BlockInputPicture>
                            <DivAsidePictureRight />
                        </BlockContenairPicture>
                        <PictureUserMyProfile>
                            {pictureDataProfile ? (
                                <ImageProfile
                                    src={dataResult.imageUrlProfilePicture}
                                    alt="photo de fond utilisateur"
                                ></ImageProfile>
                            ) : (
                                <ImageProfile src=" "></ImageProfile>
                            )}
                            <InputPictureProfile
                                onChange={pictureProfile}
                            ></InputPictureProfile>
                            <DivHiddenInput></DivHiddenInput>
                        </PictureUserMyProfile>
                    </form>
                </ContentProfile>

                <BlockProfileMargin />
            </BlockProfile>
            <ButtonValidation onClick={() => fetchPut()} />
        </ContenairMenuModals>
    )
}

export default ModalPageMyProfile
