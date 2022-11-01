import React, { useContext, useState } from 'react'
import { UserContext } from '../context/userContext'
import AuthContext from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../style/Colors'
import '../styles/InputFocus.css'
import '../styles/EffectErrorAuth.css'
let url = 'http://localhost:4200/api/authentification/signin'

const ModalSignIn = styled.div`
    width: 30%;
    min-width: 360px;
    background-color: ${colors.secondary};
    border-radius: 10px;
    border: solid 1px ${colors.tertiary};
    box-shadow: 0 0 2px ${colors.secondary};
    filter: brightness(96%);
    @media screen and (max-width: 961px) {
        margin-left: auto;
        margin-right: auto;
        margin-top: 14%;
        width: 50%;
    }
    @media screen and (max-width: 767px) {
        min-width: 260px;
        height: 280px;
    }
`

const ModalBody = styled.div`
    width: 100%;
    height: 100%;
`

const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
`

const InputEmail = styled.input.attrs({
    type: 'email',
    placeholder: ' Adresse mail',
    id: 'signInEmail',
    className: 'input elementsEvents',
    name: 'email',
    required: true,
})`
    width: 90%;
    height: 36px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    font-size: 17px;
    font-family: 'Lato', sans-serif;
    color: #4e5166;
    border: 1px solid #4e5166;
    border-radius: 6px;
    background-color: #ffd7d7;
    cursor: none;
`

const InputPassword = styled.input.attrs({
    type: 'password',
    name: 'password',
    placeholder: ' Saisissez un mot de passe',
    id: 'signInPassword',
    className: 'input elementsEvents',
})`
    width: 90%;
    height: 36px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    font-size: 17px;
    font-family: 'Lato', sans-serif;
    color: #4e5166;
    border: 1px solid #4e5166;
    border-radius: 6px;
    background-color: #ffd7d7;
    cursor: none;
`

const ButtonConnection = styled.input.attrs({
    type: 'submit',
    value: 'Se connecter',
    id: 'buttonConnection',
    className: 'elementsEvents',
})`
    width: 90%;
    height: 40px;
    margin-top: 68px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;
    font-size: 17px;
    font-family: 'Lato', sans-serif;
    color: ${colors.secondary};
    border-color: ${colors.tertiary};
    border-radius: 6px;
    background-color: ${colors.tertiary};
    opacity: 0.4;
    cursor: none;
    &:hover {
        transition-delay: 200ms;
        opacity: 0.47;
    }
    @media screen and (max-width: 767px) {
        margin-top: 0px;
        width: 80%;
    }
`

const Separator = styled.div`
    width: 90%;
    height: 1px;
    background-color: ${colors.primary};
    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;
    opacity: 0.3;
    @media screen and (max-width: 767px) {
        margin-top: 0px;
        position: relative;
        top: 30px;
    }
`

const ButtonSignUp = styled.input.attrs({
    type: 'button',
    value: 'Créer un compte',
    className: 'elementsEventsSameColor',
})`
    width: 70%;
    height: 50px;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    font-size: 17px;
    font-family: 'Lato', sans-serif;
    color: ${colors.secondary};
    border-color: ${colors.primary};
    border-radius: 6px;
    background-color: ${colors.primary};
    opacity: 0.65;
    cursor: none;
    &:hover {
        transition-delay: 200ms;
        opacity: 0.72;
    }
    @media screen and (max-width: 767px) {
        position: relative;
        top: 16px;
    }
`

const ParagrahErrorAuth = styled.p.attrs({
    id: 'paragraphErrorAuth',
})`
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    text-align: center;
    color: ${colors.primary};
`

const lightnessInputOn = () => {
    const inputs = document.querySelectorAll('.input')
    for (let input of inputs) {
        input.addEventListener('click', () => {
            input.classList.add('styleInputFocus')
        })
        input.addEventListener('keyup', () => {
            input.classList.add('styleInputFocus')
        })
        input.addEventListener('blur', () => {
            input.classList.remove('styleInputFocus')
        })
    }
}

let valueEmail, valuePassword

function SignInModal() {
    const authContext = useContext(AuthContext)

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [data, setData] = useState('')

    const regexFormEmail = (e) => {
        const inputEmail = document.querySelector('#signInEmail')

        setEmail(e.target.value)

        if (inputEmail.value.length === 0) {
            valueEmail = null
        } else if (
            !inputEmail.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/)
        ) {
            valueEmail = null
        } else if (inputEmail.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/)) {
            valueEmail = inputEmail
        }
    }

    const regexFormPassword = (e) => {
        const inputPassword = document.querySelector('#signInPassword')

        setPassword(e.target.value)

        if (inputPassword.value.length == 0) {
            valuePassword = null
        } else if (
            !inputPassword.value.match(
                /^(?=.{9,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/
            )
        ) {
            valuePassword = null
        } else if (
            inputPassword.value.match(
                /^(?=.{9,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/
            )
        ) {
            valuePassword = inputPassword
        }
    }

    const ButtonValidatedConnection = () => {
        const inputEmail = document.querySelector('#signInEmail')
        const inputPassword = document.querySelector('#signInPassword')
        const buttonConnection = document.querySelector('#buttonConnection')

        if (
            inputEmail.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/) &&
            inputPassword.value.match(
                /^(?=.{9,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/
            )
        ) {
            const buttonConnection = document.querySelector('#buttonConnection')
            buttonConnection.style.opacity = '1'
        } else {
            buttonConnection.style.opacity = '0.47'
        }
    }

    const handleLogin = (e) => {
        e.preventDefault()

        const inputEmail = document.querySelector('#signInEmail')
        const inputPassword = document.querySelector('#signInPassword')

        if (inputEmail.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/)) {
            valueEmail = email
        }
        if (
            inputPassword.value.match(
                /^(?=.{9,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/
            )
        ) {
            valuePassword = password
        }

        if (valueEmail && valuePassword) {
            const fetchHandler = async () => {
                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            email: email,
                            password: password,
                        }),
                    })

                    const dataResponse = await response.json()

                    if (response.ok) {
                        //setData(dataResponse)
                        authContext.login(
                            dataResponse.token,
                            dataResponse.userId
                        )
                        document
                            .querySelector('#cursorOriginal')
                            .classList.remove('hovered')
                        document
                            .querySelector('#cursorOriginal')
                            .classList.remove('hoveredSameColor')
                        document
                            .querySelector('#cursorOriginal')
                            .classList.remove('clicked')
                        document
                            .querySelector('#cursorOriginal')
                            .classList.remove('clickedSameColor')
                        document
                            .querySelector('#cursorOriginal')
                            .classList.add('original')
                        //return window.location.href = '/private/connected-home/'
                        navigate(`/private/connected-home/`, { replace: true })
                    } else {
                        setError(
                            'Votre email ou votre mot de passe est incorrect'
                        )
                        if (response.status === 401) {
                            const paragraphErrorAuthEffect =
                                document.querySelector('#paragraphErrorAuth')

                            paragraphErrorAuthEffect.classList.add(
                                'effectErrorAuth'
                            )
                            const timerMessageError = setTimeout(
                                () =>
                                    paragraphErrorAuthEffect.classList.remove(
                                        'effectErrorAuth'
                                    ),
                                700
                            )
                        }
                    }
                } catch (err) {
                    console.log(err)
                }
            }
            fetchHandler()
        }
    }

    const rediredctSignUpModal = () => {
        toggleModals('signUpModal')
        document.querySelector('#cursorOriginal').classList.remove('hovered')
        document
            .querySelector('#cursorOriginal')
            .classList.remove('hoveredSameColor')
        document.querySelector('#cursorOriginal').classList.remove('clicked')
        document
            .querySelector('#cursorOriginal')
            .classList.remove('clickedSameColor')
        document.querySelector('#cursorOriginal').classList.add('original')
    }

    const { toggleModals } = useContext(UserContext)

    return (
        <>
            <ModalSignIn>
                <ModalBody>
                    <Form
                        onFocus={lightnessInputOn}
                        onInput={ButtonValidatedConnection}
                    >
                        <InputEmail onChange={regexFormEmail} />
                        <InputPassword onChange={regexFormPassword} />
                        <ParagrahErrorAuth>{error}</ParagrahErrorAuth>
                        <ButtonConnection onClick={handleLogin} />
                        <Separator />
                        <ButtonSignUp onClick={rediredctSignUpModal} />
                    </Form>
                </ModalBody>
            </ModalSignIn>
        </>
    )
}

export default SignInModal
