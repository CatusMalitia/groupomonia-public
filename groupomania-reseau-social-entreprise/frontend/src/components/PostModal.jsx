import React, { useContext, useState, useEffect } from 'react'
import { PostContext } from '../context/postContext'
import AuthContext from '../context/authContext'
import styled from 'styled-components'
import colors from '../style/Colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const ModalPost = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 670px;
    height: 600px;
    background-color: ${colors.secondary};
    border-radius: 20px;
    border: solid 2px;
    border-color: ${colors.tertiary};
    z-index: 11;
    @media screen and (max-width: 1490px) {
        //width: 500px;
    }
`

const ModalBody = styled.div`
    height: 580px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 26px;
    margin-top: 20px;
`

const ModalTitle = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 6px;
`

const ContenairButtonClose = styled.div`
    width: 30px;
    height: 26px;
    border: 2px solid;
    border-color: ${colors.secondary};
    opacity: 0.5;
    position: absolute;
    top: 4.5%;
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

const Separator = styled.div`
    width: 92%;
    height: 1px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    background-color: ${colors.tertiary};
    opacity: 0.47;
`

const ContenairUserPost = styled.div`
    width: 100%;
    height: 70px;
    margin-top: 20px;
    margin-bottom: 16px;
    display: flex;
`

const PictureUserPost = styled.div`
    width: 60px;
    height: 60px;
    margin-top: 9px;
    margin-left: 14px;
    border: 1px solid ${colors.tertiary};
    border-radius: 100%;
`
const ImagePictureProfile = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
`
const ParagraphNameUser = styled.p`
    width: 300px;
    height: 40px;
    margin-top: 15px;
    margin-left: 15px;
    font-size: 20px;
`

const BlockTextAndPicture = styled.div`
    width: 97%;
    height: 340px;
    margin-left: 15px;
    margin-right: 15px;
    overflow-x: hidden;
    overflow-y: scroll;
    white-space: nowrap;
    &::-webkit-scrollbar-track {
        box-shadow: inset 1 1 6px ${colors.secondary};
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

const InputPost = styled.textarea.attrs({
    type: 'text',
    cols: '40',
    rows: '5',
    name: 'post',
    id: 'post',
    placeholder: 'Laissez libre cours à votre imagination ici...',
})`
    width: 97%;
    min-height: 260px;
    margin-top: 15px;
    margin-left: 10px;
    font-size: 17px;
    font-family: 'Lato', sans-serif;
    background: ${colors.secondary};
    resize: none;
    border: none;
    outline: none;
    &::-webkit-scrollbar-track {
        box-shadow: inset 1 1 6px ${colors.tertiary};
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
const ContenairPicture = styled.div`
    width: 97%;
    height: 340px;
    margin-top: 20px;
    margin-left: 10px;
    border-radius: 14px;
`

const ImagePicturePost = styled.img.attrs({
    id: 'picturePostPreview',
})`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 14px;
`

const PublishButton = styled.input.attrs({
    type: 'button',
    value: 'Publier',
    /* className: 'elementsEvents' */
})`
    width: 96%;
    height: 40px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    border-radius: 10px;
    background-color: ${colors.tertiary};
    border: none;
    font-size: 20px;
    font-family: 'Lato', sans-serif;
    color: ${colors.secondary};
    filter: brightness(140%);
    &:hover {
        filter: brightness(120%);
        transition-delay: 100ms;
        transition-duration: 300ms;
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

let valuePicturePost

function PostModal({ displayImg, filePost, pictureLandscape }) {
    const authContext = useContext(AuthContext)
    const [dataResult, setDataResult] = useState({ infos: {} })
    const [dataInput, setDataInput] = useState()
    const [pictureData, setPictureData] = useState(false)
    const urlGet = 'http://localhost:4200/api/ficheUser/' + authContext.userId
    const urlPOST ='http://localhost:4200/api/ficheUser/post/'
    const { modalPostState, togglePostModal } = useContext(PostContext)

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

    useEffect(() => {
        if (dataResult.infos.imageUrlProfilePicture !== ' ')
            setPictureData(true)
    }, [])

    const contentPost = (e) => {
        setDataInput(e.target.value)
        if (e.target.value.length > 0) {
            const inputPost = document.querySelector('#post')
            inputPost.style.background = 'rgba(228, 190, 190, 0.5)'
        }
    }

    valuePicturePost = filePost.file

    const formDataPostPicture = new FormData()
    let newPostUserPicture = {
        firstname: dataResult.infos.firstname,
        lastname: dataResult.infos.lastname,
        imageUrlPostPicture: valuePicturePost,
        postContent: dataInput,
        userId: dataResult.infos._id
    }

    const formDataPost = new FormData()
    let newPostUser = {
        firstname: dataResult.infos.firstname,
        lastname: dataResult.infos.lastname,
        imageUrlPostPicture: ' ',
        postContent: dataInput,
        userId: dataResult.infos._id
    }

    const fetchHandlerPost = async () => {
        if (valuePicturePost !== null) {
            formDataPostPicture.append(
                'post',
                JSON.stringify(newPostUserPicture)
            )
            formDataPostPicture.append('image', filePost.file)
            try {
                const response = await fetch(urlPOST, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json, test/plain',
                        Authorization: `Bearer ${authContext.token}`,
                    },
                    body: formDataPostPicture,
                })
                const dataresponse = await response.json()
                if (response.ok) {
                    window.location = document.location
                }
            } catch (err) {
                console.log(err)
            }
        }

        if (valuePicturePost === null) {
            formDataPost.append('post', JSON.stringify(newPostUser))
            try {
                const response = await fetch(urlPOST, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json, test/plain',
                        Authorization: `Bearer ${authContext.token}`,
                    },
                    body: formDataPost,
                })
                const dataresponse = await response.json()
                if (response.ok) {
                    window.location = document.location
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    /* useEffect(() => {
  setTimeout(() => {
  if (valuePicturePost.file !== null) {
    let src = URL.createObjectURL(valuePicturePost)
    const preview = document.querySelector('#picturePostPreview')
    preview.src = src   
    console.log('a')
  }
}, 10)
},[valuePicturePost]) */

    return (
        <>
            {modalPostState.postModal && (
                <div>
                    <Over onClick={() => togglePostModal('close')}></Over>
                    <ModalPost>
                        <ModalBody>
                            <ModalTitle>Créer une publication</ModalTitle>
                            <ContenairButtonClose
                                onClick={() => togglePostModal('close')}
                            >
                                <FontAwesomeIcon
                                    icon={faXmark}
                                    fontSize="26px"
                                    color={colors.tertiary}
                                />
                            </ContenairButtonClose>
                            <Separator></Separator>
                            <ContenairUserPost>
                                <PictureUserPost>
                                    {pictureData ? (
                                        <ImagePictureProfile
                                            src={
                                                dataResult.infos
                                                    .imageUrlProfilePicture
                                            }
                                            alt="photo profil utilisateur"
                                        ></ImagePictureProfile>
                                    ) : null}
                                </PictureUserPost>
                                <ParagraphNameUser>
                                    {dataResult.infos.firstname}{' '}
                                    {dataResult.infos.lastname}
                                </ParagraphNameUser>
                            </ContenairUserPost>
                            <BlockTextAndPicture>
                                <InputPost onChange={contentPost}></InputPost>
                                {displayImg ? (
                                    <ContenairPicture>
                                        <ImagePicturePost
                                            src={
                                                dataResult.infos
                                                    .imageUrlProfileLandscape
                                            }
                                            alt="photo post utilisateur"
                                        ></ImagePicturePost>
                                    </ContenairPicture>
                                ) : null}
                            </BlockTextAndPicture>
                            <PublishButton onClick={() => fetchHandlerPost()} />
                        </ModalBody>
                    </ModalPost>
                </div>
            )}
        </>
    )
}

export default PostModal
