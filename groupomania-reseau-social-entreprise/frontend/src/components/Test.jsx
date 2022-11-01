import React, { useContext, useState } from 'react'
import { PostContext } from '../context/postContext'
import PostModal from '../components/PostModal'
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
        animation-duration: 150ms;
        animation-fill-mode: forwards;
    }
`

const Post = styled.div`
    width: 96%;
    height: 150px;
    min-height: 140px;
    background-color: ${colors.secondary};
    border-radius: 10px;
    box-shadow: 0 0 3px ${colors.secondary};
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 40px;
    display: flex;
    flex-direction: column;
    &:hover {
        filter: brightness(95%);
        transition-delay: 200ms;
    }
    @media screen and (max-width: 961px) {
        position: relative;
        top: 60px;
    }
`

const AllPostsAndModals = styled.div`
    width: 96%;
    height: 300px;
    background-color: ${colors.secondary};
    border-radius: 10px;
    box-shadow: 0 0 3px ${colors.secondary};
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    position: relative;
    top: 60px;

    &:hover {
        filter: brightness(95%);
        transition-delay: 200ms;
    }
    @media screen and (max-width: 961px) {
        position: relative;
        top: 80px;
    }
`

const PictureUserPost = styled.div`
    width: 50px;
    height: 50px;
    border: 2px solid ${colors.tertiary};
    border-radius: 100%;
    background-color: #f8f1f1;
    margin-top: 14px;
`

const InputPost = styled.div`
    width: 84%;
    height: 40px;
    border: 1px solid ${colors.tertiary};
    border-radius: 12px;
    background-color: #f8f1f1;
    margin-top: 20px;
`

const ParagraphPost = styled.div`
    color: ${colors.tertiary};
    opacity: 0.6;
    font-size: 18px;
    margin-top: 8px;
    margin-left: 6px;
`

const Separator = styled.div`
    width: 94%;
    height: 1px;
    background-color: ${colors.tertiary};
    opacity: 0.24;
    margin-top: 24px;
    margin-left: auto;
    margin-right: auto;
`

const DivInput = styled.div`
    display: flex;
    justify-content: space-around;
`

function ActualityTest() {
    const { togglePostModal } = useContext(PostContext)

    return (
        <ContenairMenuModals>
            <Post onClick={() => togglePostModal('postModal')}>
                <DivInput>
                    <PictureUserPost></PictureUserPost>
                    <InputPost>
                        <ParagraphPost>Ecrivez quelque chose...</ParagraphPost>
                    </InputPost>
                </DivInput>
                <Separator />
            </Post>
            <AllPostsAndModals></AllPostsAndModals>
            <AllPostsAndModals></AllPostsAndModals>
            <AllPostsAndModals></AllPostsAndModals>
            <AllPostsAndModals></AllPostsAndModals>
            <AllPostsAndModals></AllPostsAndModals>
        </ContenairMenuModals>
    )
}

export default ActualityTest
