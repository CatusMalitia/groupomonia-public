import React from 'react'
import styled from 'styled-components'
import colors from '../style/Colors'
import Logo from '../images/icon-left-font-black.png'

const ContenairLogo = styled.div`
    width: 7vw;
    height: 7vw;
    border-radius: 100px;
    margin-top: 1%;
    object-fit: contain;
    &:hover {
        animation: logoSpin infinite 5s ease-in-out;
        //animation-delay: 2s;
    }
    @media screen and (max-width: 961px) {
        width: 10vw;
        height: 10vw;
    }
`

const ContenairLetter = styled.div`
    display: flex;
    justify-content: flex-end;
    z-index: 9;
    @media screen and (max-width: 961px) {
        justify-content: center;
    }
`

let LetterG = styled.div`
    font-size: 6.8vw;
    display: inline-block;
    margin-left: 2%;
    perspective: 1000px;
    &:hover ::after {
        transform: rotateY(-24deg);
    }
    &:hover ::before {
        color: darkcyan;
    }
    @media screen and (max-width: 961px) {
        font-size: 8.2vw;
    }
`
const SpanLetterG = styled.span`
    &::before,
    &::after {
        position: absolute;
        content: 'G';
        inset: 0;
        transform-origin: left;
    }
    &:before {
        transition: transform 0.3s ease-out;
        color: rgba(0, 0, 0, 0.8);
    }
    &:after {
        color: ${colors.secondary};
        transition: transform 0.3s ease-out, 0.3s ease-out, color 0.4s ease-out;
        transform: rotateY(-12deg);
    }
`

let LetterR = styled.div`
    font-size: 6.8vw;
    display: inline-block;
    perspective: 1000px;
    &:hover ::after {
        transform: rotateX(-20deg);
    }
    &:hover ::before {
        color: darkgoldenrod;
    }
    @media screen and (max-width: 961px) {
        font-size: 8.2vw;
    }
`
const SpanLetterR = styled.span`
    &::before,
    &::after {
        position: absolute;
        content: 'r';
        inset: 0;
        transform-origin: top;
    }
    &:before {
        transition: transform 0.3s ease-out;
        color: rgba(0, 0, 0, 0.8);
    }
    &:after {
        color: ${colors.secondary};
        transition: transform 0.3s ease-out, 0.3s ease-out, color 0.4s ease-out;
        transform: rotatex(-8deg);
    }
`

let LetterO = styled.div`
    font-size: 6.8vw;
    display: inline-block;
    perspective: 1000px;
    &:hover ::after {
        transform: rotateY(24deg);
    }
    &:hover ::before {
        color: darkmagenta;
    }
    @media screen and (max-width: 961px) {
        font-size: 8.2vw;
    }
`
const SpanLetterO = styled.span`
    &::before,
    &::after {
        position: absolute;
        content: 'o';
        inset: 0;
        transform-origin: right;
    }
    &:before {
        transition: transform 0.3s ease-out;
        color: rgba(0, 0, 0, 0.8);
    }
    &:after {
        color: ${colors.secondary};
        transition: transform 0.3s ease-out, 0.3s ease-out, color 0.4s ease-out;
        transform: rotateY(14deg);
    }
`

let LetterU = styled.div`
    font-size: 6.8vw;
    display: inline-block;
    perspective: 1000px;
    &:hover ::after {
        transform: rotateX(26deg);
    }
    &:hover ::before {
        color: darkred;
    }
    @media screen and (max-width: 961px) {
        font-size: 8.2vw;
    }
`
const SpanLetterU = styled.span`
    &::before,
    &::after {
        position: absolute;
        content: 'u';
        inset: 0;
        transform-origin: bottom;
    }
    &:before {
        transition: transform 0.3s ease-out;
        color: rgba(0, 0, 0, 0.8);
    }
    &:after {
        color: ${colors.secondary};
        transition: transform 0.3s ease-out, 0.3s ease-out, color 0.4s ease-out;
        transform: rotateX(14deg);
    }
`

let LetterP = styled.div`
    font-size: 6.8vw;
    display: inline-block;
    perspective: 1000px;
    &:hover ::after {
        transform: rotateY(-24deg);
    }
    &:hover ::before {
        color: darkorange;
    }
    @media screen and (max-width: 961px) {
        font-size: 8.2vw;
    }
`
const SpanLetterP = styled.span`
    &::before,
    &::after {
        position: absolute;
        content: 'p';
        inset: 0;
        transform-origin: left;
    }
    &:before {
        transition: transform 0.3s ease-out;
        color: rgba(0, 0, 0, 0.8);
    }
    &:after {
        color: ${colors.secondary};
        transition: transform 0.3s ease-out, 0.3s ease-out, color 0.4s ease-out;
        transform: rotateY(-10deg);
    }
`

let LetterOBis = styled.div`
    font-size: 6.8vw;
    display: inline-block;
    perspective: 1000px;
    &:hover ::after {
        transform: rotateX(-18deg);
    }
    &:hover ::before {
        color: darkviolet;
    }
    @media screen and (max-width: 961px) {
        font-size: 8.2vw;
    }
`
const SpanLetterOBis = styled.span`
    &::before,
    &::after {
        position: absolute;
        content: 'o';
        inset: 0;
        transform-origin: top;
    }
    &:before {
        transition: transform 0.3s ease-out;
        color: rgba(0, 0, 0, 0.8);
    }
    &:after {
        color: ${colors.secondary};
        transition: transform 0.3s ease-out, 0.3s ease-out, color 0.4s ease-out;
        transform: rotateX(-8deg);
    }
`

let LetterM = styled.div`
    font-size: 6.8vw;
    display: inline-block;
    perspective: 1000px;
    &:hover ::after {
        transform: rotateY(20deg);
    }
    &:hover ::before {
        color: darkolivegreen;
    }
    @media screen and (max-width: 961px) {
        font-size: 8.2vw;
    }
`
const SpanLetterM = styled.span`
    &::before,
    &::after {
        position: absolute;
        content: 'm';
        inset: 0;
        transform-origin: right;
    }
    &:before {
        transition: transform 0.3s ease-out;
        color: rgba(0, 0, 0, 0.8);
    }
    &:after {
        color: ${colors.secondary};
        transition: transform 0.3s ease-out, 0.3s ease-out, color 0.4s ease-out;
        transform: rotateY(10deg);
    }
`

let LetterA = styled.div`
    font-size: 6.8vw;
    display: inline-block;
    perspective: 1000px;
    &:hover ::after {
        transform: rotateX(24deg);
    }
    &:hover ::before {
        color: darkblue;
    }
    @media screen and (max-width: 961px) {
        font-size: 8.2vw;
    }
`
const SpanLetterA = styled.span`
    &::before,
    &::after {
        position: absolute;
        content: 'a';
        inset: 0;
        transform-origin: bottom;
    }
    &:before {
        transition: transform 0.3s ease-out;
        color: rgba(0, 0, 0, 0.8);
    }
    &:after {
        color: ${colors.secondary};
        transition: transform 0.3s ease-out, 0.3s ease-out, color 0.4s ease-out;
        transform: rotateX(12deg);
    }
`

let LetterN = styled.div`
    font-size: 6.8vw;
    display: inline-block;
    perspective: 1000px;
    &:hover ::after {
        transform: rotateY(-26deg);
    }
    &:hover ::before {
        color: darksalmon;
    }
    @media screen and (max-width: 961px) {
        font-size: 8.2vw;
    }
`
const SpanLetterN = styled.span`
    &::before,
    &::after {
        position: absolute;
        content: 'n';
        inset: 0;
        transform-origin: left;
    }
    &:before {
        transition: transform 0.3s ease-out;
        color: rgba(0, 0, 0, 0.8);
    }
    &:after {
        color: ${colors.secondary};
        transition: transform 0.3s ease-out, 0.3s ease-out, color 0.4s ease-out;
        transform: rotateY(-12deg);
    }
`

let LetterI = styled.div`
    font-size: 6.8vw;
    display: inline-block;
    perspective: 1000px;
    &:hover ::after {
        transform: rotateX(-20deg);
    }
    &:hover ::before {
        color: darkkhaki;
    }
    @media screen and (max-width: 961px) {
        font-size: 8.2vw;
    }
`
const SpanLetterI = styled.span`
    &::before,
    &::after {
        position: absolute;
        content: 'i';
        inset: 0;
        transform-origin: top;
    }
    &:before {
        transition: transform 0.3s ease-out;
        color: rgba(0, 0, 0, 0.8);
    }
    &:after {
        color: ${colors.secondary};
        transition: transform 0.3s ease-out, 0.3s ease-out, color 0.4s ease-out;
        transform: rotateX(-8deg);
    }
`

let LetterABis = styled.div`
    font-size: 6.8vw;
    display: inline-block;
    perspective: 1000px;
    &:hover ::after {
        transform: rotateY(26deg);
    }
    &:hover ::before {
        color: darkred;
    }
    @media screen and (max-width: 961px) {
        font-size: 8.2vw;
    }
`
const SpanLetterABis = styled.span`
    &::before,
    &::after {
        position: absolute;
        content: 'a';
        inset: 0;
        transform-origin: right;
    }
    &:before {
        transition: transform 0.3s ease-out;
        color: rgba(0, 0, 0, 0.8);
    }
    &:after {
        color: ${colors.secondary};
        transition: transform 0.3s ease-out, 0.3s ease-out, color 0.4s ease-out;
        transform: rotateY(16deg);
    }
`

function TitleA() {
    return (
        <>
            <ContenairLetter>
                <ContenairLogo>
                    <img
                        src={Logo}
                        alt="image logo"
                        width="100%"
                        height="100%"
                    ></img>
                </ContenairLogo>
                <LetterG>
                    <SpanLetterG>G</SpanLetterG>
                </LetterG>
                <LetterR>
                    <SpanLetterR>r</SpanLetterR>
                </LetterR>
                <LetterO>
                    <SpanLetterO>o</SpanLetterO>
                </LetterO>
                <LetterU>
                    <SpanLetterU>u</SpanLetterU>
                </LetterU>
                <LetterP>
                    <SpanLetterP>p</SpanLetterP>
                </LetterP>
                <LetterOBis>
                    <SpanLetterOBis>o</SpanLetterOBis>
                </LetterOBis>
                <LetterM>
                    <SpanLetterM>m</SpanLetterM>
                </LetterM>
                <LetterA>
                    <SpanLetterA>a</SpanLetterA>
                </LetterA>
                <LetterN>
                    <SpanLetterN>n</SpanLetterN>
                </LetterN>
                <LetterI>
                    <SpanLetterI>i</SpanLetterI>
                </LetterI>
                <LetterABis>
                    <SpanLetterABis>a</SpanLetterABis>
                </LetterABis>
            </ContenairLetter>
        </>
    )
}

export default TitleA
