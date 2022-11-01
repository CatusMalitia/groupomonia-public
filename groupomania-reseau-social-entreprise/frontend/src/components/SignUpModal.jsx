import React, { useContext, useState } from 'react'
import { UserContext } from '../context/userContext'
import AuthContext from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../style/Colors'
import '../styles/InputFocus.css'
import '../styles/InputStyle.css'
import '../styles/AlertInfo.css'
import '../styles/StyleInputs.css'
import Input from './Input'
import LogoWhite from '../images/icon-left-font-monochrome-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import * as RegexFunctionBlur from './RegexFunctionBlur'
import * as RegexFunctionChange from './RegexFunctionChange'
import * as RegexFunctionFocus from './RegexFunctionFocus'

let urlSignUp = 'http://localhost:4200/api/authentification/signup'

const ModalSignUp = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    background-color: ${colors.secondary};
    border-radius: 20px;
    border: solid 2px;
    border-color: ${colors.tertiary};
    filter: brightness(96%);
    z-index: 10;
    @media screen and (max-width: 1490px) {
        width: 500px;
    }
    @media screen and (max-width: 768px) {
        width: 90%;
        height: 600px;
    }
`

const ModalBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: -100px;
    @media screen and (max-width: 768px) {
        margin-top: -140px;
    }
`

const BlockLogo = styled.div`
    width: 100%;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 36px;
    margin-bottom: 100px;
    @media screen and (max-width: 768px) {
        width: 80%;
        margin-top: 16px;
    }
`
const ContenairLogo = styled.img`
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
    filter: invert(24%) sepia(61%) saturate(6385%) hue-rotate(8deg)
        brightness(105%) contrast(104%);
`
const ContenairButtonClose = styled.div`
    width: 30px;
    height: 26px;
    border: 2px solid;
    border-color: ${colors.secondary};
    opacity: 0.5;
    position: absolute;
    top: 2%;
    right: 3%;
    display: flex;
    justify-content: center;
    &:hover {
        border-color: ${colors.tertiary};
        opacity: 0.8;
        //transition-delay: 100ms;
        transition: 600ms;
    }
`

const Form = styled.form.attrs({
    type: 'submit',
})`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-top: -40px;
`

const BlockInputName = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
    margin-bottom: -60px;
`

const BlockInputFirstName = styled.div`
    width: 46%;
    height: 50px;
    margin-top: 20px;
`

const BlockInputLastName = styled.div`
    width: 46%;
    height: 50px;
    margin-top: 20px;
`

const BlockOthersInput = styled.div`
    width: 100%;
    margin-top: 70px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
`

const ButtonValidation = styled.input.attrs({
    type: 'button',
    value: 'Valider',
    id: 'buttonValidation',
    className: 'elementsEvents',
})`
    width: 24%;
    height: 40px;
    margin-left: auto;
    margin-top: 100px;
    margin-bottom: 20px;
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
    @media screen and (max-width: 768px) {
        margin-top: 50px;
    }
`

const Over = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${colors.tertiary};
    opacity: 0.75;
    z-index: 10;
`

/* class InputDateDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange (e) {
        this.setState({   
            value: e.target.value
        })
    }
  render(){
     return (
        <select type= "date" name= "dateDay" id="signUpDateDay" className="input inputDateStyle" value={this.state.value} onChange={this.handleChange}  onFocus= {() => lightnessInputOn()}>
        <option value="test">Jour</option>
        </select>
     )
  }
} */

/* class InputDateMonth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange (e) {
        this.setState({
            value: e.target.value
        })
    }
  render(){
     return (
        <select type= "date" name= "dateMonth" id="signUpDateMonth" className="input inputDateStyle" value={this.state.value} onChange={this.handleChange}  onFocus= {() => lightnessInputOn()}>
        <option value="test">Mois</option>
        </select>
     )
  }
}

class InputDateYear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange (e) {
        this.setState({
            value: e.target.value
        })
    }
  render(){
     return (
        <select type= "date" name= "dateYear" id="signUpDateYear" className="input inputDateStyle" value={this.state.value} onChange={this.handleChange}  onFocus= {() => lightnessInputOn()}>
        <option value="test">Année</option>
        </select>
     )
  }
}

<ParagraphDate>Date de naissance</ParagraphDate>
                <BlockInputDate>
                    <InputDateDay/>
                    <InputDateMonth/>
                    <InputDateYear/>
                </BlockInputDate> */

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

let valueFirstName, valueLastName, valueEmail, valuePassword

function SignUpModal() {
    const { modalState, toggleModals } = useContext(UserContext)

    const authContext = useContext(AuthContext)
    const [validationFirstName, setValidationFirstName] = useState('')
    const [validationLastName, setValidationLastName] = useState('')
    const [validationEmail, setValidationEmail] = useState('')
    const [validationPassword, setValidationPassword] = useState('')
    const [validationPasswordRepeat, setValidationPasswordRepeat] = useState('')
    const navigate = useNavigate()

    const regexBlurFirstName = () => {
        RegexFunctionBlur.infoVisible(
            '#signUpFirstName',
            '#alertInfoFirstName',
            '#alertInfoArrowFirstName',
            'alertInfoFirstNameMinLetterVisible',
            'alertInfoMinLetterInvisible',
            'alertInfoFirstNameArrowVisible',
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
                'alertInfoFirstNameMinLetterVisible',
                'alertInfoArrowInvisible',
                'alertInfoFirstNameArrowVisible'
            )
            RegexFunctionBlur.firstName('#signUpFirstName')
        }
    }

    const regexBlurLastName = () => {
        RegexFunctionBlur.infoVisible(
            '#signUpLastName',
            '#alertInfoLastName',
            '#alertInfoArrowLastName',
            'alertInfoLastNameMinLetterVisible',
            'alertInfoMinLetterInvisible',
            'alertInfoLastNameArrowVisible',
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
                'alertInfoLastNameMinLetterVisible',
                'alertInfoArrowInvisible',
                'alertInfoLastNameArrowVisible'
            )
            RegexFunctionBlur.lastName('#signUpLastName')
        }
    }

    const regexBlurEmail = () => {
        RegexFunctionBlur.infoVisible(
            '#signUpEmail',
            '#alertInfoEmail',
            '#alertInfoArrowEmail',
            'alertInfoEmailInvalideVisible',
            'alertInfoMinLetterInvisible',
            'alertInfoEmailArrowVisible',
            'alertInfoArrowInvisible'
        )
        RegexFunctionBlur.email('#signUpEmail')

        const emailBlur = document.querySelector('#signUpEmail')
        if (emailBlur.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/)) {
            RegexFunctionBlur.infoInvisible(
                '#signUpEmail',
                '#alertInfoEmail',
                '#alertInfoArrowEmail',
                'alertInfoMinLetterInvisible',
                'alertInfoEmailInvalideVisible',
                'alertInfoArrowInvisible',
                'alertInfoEmailArrowVisible'
            )
            RegexFunctionBlur.email('#signUpEmail')
        }
    }

    const regexBlurPassword = () => {
        RegexFunctionBlur.infoVisible(
            '#signUpPassword',
            '#alertInfoPassword',
            '#alertInfoArrowPassword',
            'alertInfoPasswordInvalideVisible',
            'alertInfoMinLetterInvisible',
            'alertInfoPasswordArrowVisible',
            'alertInfoArrowInvisible'
        )
        RegexFunctionBlur.password('#signUpPassword')

        const passwordBlur = document.querySelector('#signUpPassword')
        if (
            passwordBlur.value.match(
                /^(?=.{9,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/
            )
        ) {
            RegexFunctionBlur.infoInvisible(
                '#signUpPassword',
                '#alertInfoPassword',
                '#alertInfoArrowPassword',
                'alertInfoMinLetterInvisible',
                'alertInfoPasswordInvalideVisible',
                'alertInfoArrowInvisible',
                'alertInfoPasswordArrowVisible'
            )
            RegexFunctionBlur.password('#signUpPassword')
        }
    }

    const regexFormChangeFirstName = (e) => {
        RegexFunctionChange.infoInvisible(
            '#signUpFirstName',
            '#alertInfoFirstName',
            '#alertInfoArrowFirstName',
            'alertInfoMinLetterInvisible',
            'alertInfoFirstNameMinLetterVisible',
            'alertInfoArrowInvisible',
            'alertInfoFirstNameArrowVisible'
        )
        RegexFunctionChange.firstName('#signUpFirstName', valueFirstName)

        const inputValue = document.querySelector('#signUpFirstName').value

        if (inputValue.match(/^[a-zA-Z-]{2,25}$/)) {
            valueFirstName = inputValue
        } else {
            valueFirstName = null
        }
    }

    const regexFormChangeLastName = (e) => {
        RegexFunctionChange.infoInvisible(
            '#signUpLastName',
            '#alertInfoLastName',
            '#alertInfoArrowLastName',
            'alertInfoMinLetterInvisible',
            'alertInfoLastNameMinLetterVisible',
            'alertInfoArrowInvisible',
            'alertInfoLastNameArrowVisible'
        )
        RegexFunctionChange.lastName('#signUpLastName', valueLastName)

        const inputValue = document.querySelector('#signUpLastName').value

        if (inputValue.match(/^[a-zA-Z-]{2,25}$/)) {
            valueLastName = inputValue
        } else {
            valueLastName = null
        }
    }

    const regexFormChangeEmail = (e) => {
        RegexFunctionChange.infoInvisible(
            '#signUpEmail',
            '#alertInfoEmail',
            '#alertInfoArrowEmail',
            'alertInfoMinLetterInvisible',
            'alertInfoEmailInvalideVisible',
            'alertInfoArrowInvisible',
            'alertInfoEmailArrowVisible'
        )
        RegexFunctionChange.email('#signUpEmail', valueEmail)

        const inputValue = document.querySelector('#signUpEmail').value

        if (inputValue.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/)) {
            valueEmail = inputValue
        } else {
            valueEmail = null
        }
    }

    const regexFormChangePassword = (e) => {
        RegexFunctionChange.infoInvisible(
            '#signUpPassword',
            '#alertInfoPassword',
            '#alertInfoArrowPassword',
            'alertInfoMinLetterInvisible',
            'alertInfoPasswordInvalideVisible',
            'alertInfoArrowInvisible',
            'alertInfoPasswordArrowVisible'
        )
        RegexFunctionChange.password('#signUpPassword')

        const inputValue = document.querySelector('#signUpPassword').value

        if (
            inputValue.match(
                /^(?=.{9,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/
            )
        ) {
            valuePassword = inputValue
        } else {
            valuePassword = null
        }
    }

    const buttonValidateErrors = () => {
        const inputFirstName = document.querySelector('#signUpFirstName').value
        const inputLastName = document.querySelector('#signUpLastName').value
        const inputEmail = document.querySelector('#signUpEmail').value
        const inputPassword = document.querySelector('#signUpPassword').value
        const buttonValidation = document.querySelector('#buttonValidation')

        if (
            inputFirstName.match(/^[a-zA-Z-]{2,25}$/) &&
            inputFirstName.length > 1 &&
            inputFirstName.length < 24 &&
            inputLastName.match(/^[a-zA-Z-]{2,25}$/) &&
            inputLastName.length > 1 &&
            inputLastName.length < 24 &&
            inputEmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/) &&
            inputPassword.match(
                /^(?=.{9,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/
            )
        ) {
            buttonValidation.style.opacity = '1'
        } else {
            buttonValidation.style.opacity = '0.47'
        }
    }

    const handleSubmit = (e) => {
        console.log(valueFirstName, valueLastName, valueEmail, valuePassword)
        e.preventDefault()

        const inputFirstName = document.querySelector('#signUpFirstName')
        const inputLastName = document.querySelector('#signUpLastName')
        const inputEmail = document.querySelector('#signUpEmail')
        const inputPassword = document.querySelector('#signUpPassword')

        if (!inputFirstName.value.match(/^[a-zA-Z-]{2,25}$/)) {
            inputFirstName.style.border = '2px solid #FD2D01'
        }
        if (!inputLastName.value.match(/^[a-zA-Z-]{2,25}$/)) {
            inputLastName.style.border = '2px solid #FD2D01'
        }
        if (!inputEmail.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/)) {
            inputEmail.style.border = '2px solid #FD2D01'
        }
        if (
            !inputPassword.value.match(
                /^(?=.{9,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/
            )
        ) {
            inputPassword.style.border = '2px solid #FD2D01'
        }

        inputFirstName.addEventListener('focus', () => {
            if (!inputFirstName.value.match(/^[a-zA-Z-]{2,25}$/)) {
                RegexFunctionFocus.infoVisible(
                    '#signUpFirstName',
                    '#alertInfoFirstName',
                    '#alertInfoArrowFirstName',
                    'alertInfoFirstNameMinLetterVisible',
                    'alertInfoMinLetterInvisible',
                    'alertInfoFirstNameArrowVisible',
                    'alertInfoArrowInvisible'
                )
                RegexFunctionFocus.firstName('#signUpFirstName')
            }
            if (inputFirstName.value.match(/^[a-zA-Z-]{2,25}$/)) {
                RegexFunctionFocus.infoInvisible(
                    '#signUpFirstName',
                    '#alertInfoFirstName',
                    '#alertInfoArrowFirstName',
                    'alertInfoMinLetterInvisible',
                    'alertInfoFirstNameMinLetterVisible',
                    'alertInfoArrowInvisible',
                    'alertInfoFirstNameArrowVisible'
                )
                RegexFunctionFocus.firstName('#signUpFirstName')
            }
        })

        inputLastName.addEventListener('focus', () => {
            if (!inputLastName.value.match(/^[a-zA-Z-]{2,25}$/)) {
                RegexFunctionFocus.infoVisible(
                    '#signUpLastName',
                    '#alertInfoLastName',
                    '#alertInfoArrowLastName',
                    'alertInfoLastNameMinLetterVisible',
                    'alertInfoMinLetterInvisible',
                    'alertInfoLastNameArrowVisible',
                    'alertInfoArrowInvisible'
                )
                RegexFunctionFocus.lastName('#signUpLastName')
            }
            if (inputLastName.value.match(/^[a-zA-Z-]{2,25}$/)) {
                RegexFunctionFocus.infoInvisible(
                    '#signUpLastName',
                    '#alertInfoLastName',
                    '#alertInfoArrowLastName',
                    'alertInfoMinLetterInvisible',
                    'alertInfoLastNameMinLetterVisible',
                    'alertInfoArrowInvisible',
                    'alertInfoLastNameArrowVisible'
                )
                RegexFunctionFocus.lastName('#signUpLastName')
            }
        })

        inputEmail.addEventListener('focus', () => {
            if (!inputEmail.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/)) {
                RegexFunctionFocus.infoVisible(
                    '#signUpEmail',
                    '#alertInfoEmail',
                    '#alertInfoArrowEmail',
                    'alertInfoEmailInvalideVisible',
                    'alertInfoMinLetterInvisible',
                    'alertInfoEmailArrowVisible',
                    'alertInfoArrowInvisible'
                )
                RegexFunctionFocus.email('#signUpEmail')
            }
            if (inputEmail.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/)) {
                RegexFunctionFocus.infoInvisible(
                    '#signUpEmail',
                    '#alertInfoEmail',
                    '#alertInfoArrowEmail',
                    'alertInfoMinLetterInvisible',
                    'alertInfoEmailInvalideVisible',
                    'alertInfoArrowInvisible',
                    'alertInfoEmailArrowVisible'
                )
                RegexFunctionFocus.email('#signUpEmail')
            }
        })

        inputPassword.addEventListener('focus', () => {
            if (
                !inputPassword.value.match(
                    /^(?=.{9,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/
                )
            ) {
                RegexFunctionFocus.infoVisible(
                    '#signUpPassword',
                    '#alertInfoPassword',
                    '#alertInfoArrowPassword',
                    'alertInfoPasswordInvalideVisible',
                    'alertInfoMinLetterInvisible',
                    'alertInfoPasswordArrowVisible',
                    'alertInfoArrowInvisible'
                )
                RegexFunctionFocus.password('#signUpPassword')
            }
            if (
                inputPassword.value.match(
                    /^(?=.{9,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/
                )
            ) {
                RegexFunctionFocus.infoInvisible(
                    '#signUpPassword',
                    '#alertInfoPassword',
                    '#alertInfoArrowPassword',
                    'alertInfoMinLetterInvisible',
                    'alertInfoPasswordInvalideVisible',
                    'alertInfoArrowInvisible',
                    'alertInfoPasswordArrowVisible'
                )
                RegexFunctionFocus.password('#signUpPassword')
            }
        })

        if (valueFirstName && valueLastName && valueEmail && valuePassword) {
            const tmp_date = new Date().toISOString().split('T')
            const date = `${tmp_date[0]}`
            const formData = {
                valueFirstName,
                valueLastName,
                valueEmail,
                valuePassword,
            }

            const fetchHandler = async () => {
                try {
                    const response = await fetch(urlSignUp, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            firstName: valueFirstName,
                            lastName: valueLastName,
                            email: valueEmail,
                            password: valuePassword,
                            admin: false,
                        }),
                    })

                    const dataResponse = await response.json()
                    console.log()

                    if (response.ok) {
                        authContext.login(
                            dataResponse.token,
                            dataResponse.userId
                        )
                        navigate('/private/connected-home/')
                    }

                    //console.log(dataResponse)

                    /* toggleValidationModal('validate')
            toggleModals('close') */
                    //navigate("/private/connected-home/")

                    /* setInterval(() => {

    }, 5000) */

                    /*} else {
            setError('Votre email ou votre mot de passe est incorrect')
                if(response.status === 401) {
                    
                    const paragraphErrorAuthEffect = document.querySelector('#paragraphErrorAuth')
                        
                    paragraphErrorAuthEffect.classList.add('effectErrorAuth')
                    const timerMessageError = setTimeout(() => 
                       paragraphErrorAuthEffect.classList.remove('effectErrorAuth'), 700)
                }
        }*/
                } catch (err) {
                    console.log(err)
                }
            }
            fetchHandler()
        }
    }
    return (
        <>
            {modalState.signUpModal && (
                <div>
                    <Over
                        onClick={() => {
                            toggleModals('close')
                        }}
                    ></Over>
                    <ModalSignUp>
                        <BlockLogo>
                            <ContenairButtonClose
                                onClick={() => {
                                    toggleModals('close')
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faXmark}
                                    fontSize="26px"
                                    color={colors.tertiary}
                                />
                            </ContenairButtonClose>
                            <ContenairLogo
                                src={LogoWhite}
                                alt="image logo Groupama"
                            />
                        </BlockLogo>
                        <ModalBody>
                            <div
                                id="alertInfoFirstName"
                                className="alertInfoMinLetterInvisible"
                            >
                                <p className="paragraphError">
                                    {validationFirstName}
                                </p>
                                <div
                                    id="alertInfoArrowFirstName"
                                    className="alertInfoArrowInvisible"
                                ></div>
                            </div>
                            <div
                                id="alertInfoLastName"
                                className="alertInfoMinLetterInvisible"
                            >
                                <p className="paragraphErrorLastName">
                                    {validationLastName}
                                </p>
                                <div
                                    id="alertInfoArrowLastName"
                                    className="alertInfoArrowInvisible "
                                ></div>
                            </div>
                            <div
                                id="alertInfoEmail"
                                className="alertInfoMinLetterInvisible"
                            >
                                <p className="paragraphErrorEmail">
                                    {validationEmail}
                                </p>
                                <div
                                    id="alertInfoArrowEmail"
                                    className="alertInfoArrowInvisible "
                                ></div>
                            </div>
                            <div
                                id="alertInfoPassword"
                                className="alertInfoMinLetterInvisible"
                            >
                                <p className="paragraphErrorPassword">
                                    {validationPassword}
                                </p>
                                <div
                                    id="alertInfoArrowPassword"
                                    className="alertInfoArrowInvisible "
                                ></div>
                            </div>
                            <Form
                                onInput={buttonValidateErrors}
                                onFocus={lightnessInputOn}
                            >
                                <BlockInputName>
                                    <BlockInputFirstName>
                                        <Input
                                            name={'firstName'}
                                            placeholder={'Prénom'}
                                            id={'signUpFirstName'}
                                            className={'inputNameSignUp input'}
                                            onBlur={regexBlurFirstName}
                                            onChange={regexFormChangeFirstName}
                                        />
                                    </BlockInputFirstName>
                                    <BlockInputLastName>
                                        <Input
                                            name={'lastName'}
                                            placeholder={'Nom'}
                                            id={'signUpLastName'}
                                            className={'inputNameSignUp input'}
                                            onBlur={regexBlurLastName}
                                            onChange={regexFormChangeLastName}
                                        />
                                    </BlockInputLastName>
                                </BlockInputName>
                                <BlockOthersInput>
                                    <Input
                                        type={'email'}
                                        name={'email'}
                                        placeholder={'Adresse mail'}
                                        id={'signUpEmail'}
                                        className={'inputsOthersSignUp input'}
                                        onBlur={regexBlurEmail}
                                        onChange={regexFormChangeEmail}
                                    />
                                    <Input
                                        type={'password'}
                                        name={'password'}
                                        placeholder={
                                            'Saisissez un mot de passe'
                                        }
                                        id={'signUpPassword'}
                                        className={'inputsOthersSignUp input'}
                                        onBlur={regexBlurPassword}
                                        onChange={regexFormChangePassword}
                                    />
                                    <Input
                                        type={'password'}
                                        name={'passwordRepeat'}
                                        placeholder={
                                            'Répétez votre mot de passe'
                                        }
                                        id={'signUpPasswordRepeat'}
                                        className={
                                            'inputsOthersSignUp elementsEvents input'
                                        } /*onBlur={regexBlurPasswordRepeat} onChange={regexFormChangePasswordRepeat}*/
                                    />
                                </BlockOthersInput>
                                <ButtonValidation onClick={handleSubmit} />
                            </Form>
                        </ModalBody>
                    </ModalSignUp>
                </div>
            )}
        </>
    )
}

export default SignUpModal
