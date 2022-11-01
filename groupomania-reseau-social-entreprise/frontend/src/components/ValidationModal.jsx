import React, { useContext } from 'react'
import { ValidationContext } from '../context/validationContext'
import styled from 'styled-components'
import colors from '../style/Colors'

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
    width: 500px;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px) {
        margin-top: -140px;
    }
`
const Paragraph = styled.p`
    color: ${colors.tertiary};
    font-size: 24px;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
`

const Over = styled.div.attrs({
    id: 'over',
})`
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

export default function ValidationModal() {
    const { modalValidationState, toggleValidationModal } =
        useContext(ValidationContext)

    return (
        <>
            {modalValidationState.validationModal && (
                <div>
                    <Over onClick={toggleValidationModal('messageOff')}></Over>
                    <ModalSignUp>
                        <ModalBody>
                            <Paragraph>
                                Vous pouvez à présent vous connecter :-)
                            </Paragraph>
                        </ModalBody>
                    </ModalSignUp>
                </div>
            )}
        </>
    )
}
