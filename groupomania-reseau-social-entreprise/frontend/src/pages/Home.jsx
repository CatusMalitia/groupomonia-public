import React from 'react'
import Title from '../components/TitleA'
import SignUpModal from '../components/SignUpModal'
import SignInModal from '../components/SignInModal'
import styled from 'styled-components'
import colors from '../style/Colors'

const ContenairHomePage = styled.div`
    width: 100%;
    height: 100%;
`

const ContenairTitle = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 100px;
    @media screen and (max-width: 961px) {
        flex-direction: column;
    }
`

const BlockLetter = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    @media screen and (max-width: 961px) {
        margin-left: auto;
        margin-right: auto;
    }
`

const ParagraphTitle = styled.p`
    font-size: calc(10px + 1.5vw);
    color: ${colors.secondary};
    display: flex;
    justify-content: flex-end;
    margin-top: 10%;
`

export default function Home() {
    return (
        <>
            <ContenairHomePage>
                <ContenairTitle>
                    <BlockLetter>
                        <Title />
                        <ParagraphTitle>
                            Le Réseau Social de notre Entreprise
                        </ParagraphTitle>
                    </BlockLetter>
                    <SignInModal />
                </ContenairTitle>
            </ContenairHomePage>

            <SignUpModal />
        </>
    )
}
