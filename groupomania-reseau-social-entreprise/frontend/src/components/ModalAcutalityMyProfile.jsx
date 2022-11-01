import React, { useContext, useEffect, useState, useRef, useMemo } from 'react'
import { PostContext } from '../context/postContext'
import AuthContext from '../context/authContext'
import PostModal from '../components/PostModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faPhotoFilm } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp as fasThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp as farThumbsUp } from '@fortawesome/free-regular-svg-icons'
import styled from 'styled-components'
import colors from '../style/Colors'
import '../styles/StyleButton.css'
import '../styles/DisplayModalsMenu.css'
import '../styles/IconLikeOn.css'

const ContenairMenuModals = styled.div`
    width: 72%;
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
    @media screen and (max-width: 961px) {
        position: relative;
        top: 60px;
    }
`

const PictureUserPostWrite = styled.div`
    width: 50px;
    height: 50px;
    border: 2px solid ${colors.tertiary};
    border-radius: 100%;
    background-color: #f8f1f1;
    margin-top: 14px;
    margin-left: -14px;
`

const PictureUserPost = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-top: 14px;
`

const InputPost = styled.div.attrs({
    id: 'inputClick',
})`
    width: 84%;
    height: 40px;
    border: 1px solid ${colors.tertiary};
    border-radius: 12px;
    background-color: #f8f1f1;
    margin-top: 20px;
    &:hover {
        filter: brightness(95%);
        transition-delay: 100ms;
        transition-duration: 300ms;
    }
`

const ParagraphPost = styled.div`
    color: ${colors.tertiary};
    opacity: 0.6;
    font-size: 18px;
    margin-top: 8px;
    margin-left: 6px;
`

const ContenairAllPosts = styled.div`
    display: flex;
    flex-direction: column-reverse;
`
const AllPostsAndModals = styled.div.attrs({
    className: 'allPosts',
})`
    width: 96%;
    background-color: ${colors.secondary};
    border-radius: 10px;
    box-shadow: 0 0 3px ${colors.secondary};
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
    position: relative;
    top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 961px) {
        position: relative;
        top: 80px;
    }
`

const BlockAuthor = styled.div`
    width: 100%;
    height: 80px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

const DivAuthor = styled.div`
    width: 96%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
`

const NameAuthor = styled.p`
    margin-top: 16px;
    margin-left: 20px;
    color: ${colors.tertiary};
    font-size: calc(10px + 0.65vw);
`

const DivIconOption = styled.div`
    width: 100px;
    height: 40px;
    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
    color: ${colors.tertiary};
`
const BlockIconOption = styled.div`
    width: 40px;
    height: 40px;
    margin: 10px;
    background-color: ${colors.secondary};
    text-align: center;
    &:hover {
        filter: brightness(90%);
        transition-delay: 100ms;
        transition-duration: 300ms;
    }
`

const BlockContaintPost = styled.div`
    width: 100%;
    min-height: 40px;
    display: flex;
    justify-content: flex-end;
`

const ParagraphContaintPost = styled.div`
    width: 90%;
    margin-top: 1%;
    margin-bottom: 2%;
    margin-left: auto;
    margin-right: auto;
    overflow: auto;
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

const DivIconPicture = styled.div`
    width: 100%;
    height: 40px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    /* display: flex;
justify-content: space-around; */
`
const BlockOptionPicture = styled.div`
    width: 200px;
    height: 50px;
    position: relative;
    top: 4px;
    left: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    background-color: ${colors.secondary};
    &:hover {
        filter: brightness(85%);
        transition-delay: 100ms;
        transition-duration: 300ms;
    }
`
const ParagraphIcon = styled.div`
    display: flex;
    margin-top: 10px;
    color: ${colors.tertiary};
`
const ParagraphNameIcon = styled.p`
    margin-left: 16px;
    position: relative;
    bottom: 16px;
    font-size: 20px;
`

const DivInput = styled.div`
    display: flex;
    justify-content: space-around;
`
const InputPicture = styled.input.attrs({
    type: 'file',
    accept: 'jpeg, jpg, png',
    id: 'picturePost',
    name: 'postPicture',
})`
    width: 0.01%;
    height: 0%;
    position: absolute;
    color: ${colors.tertiary};
    border-color: ${colors.tertiary};
`
const BlockImagePost = styled.div`
    width: 90%;
    height: 100%;
    margin-top: 26px;
    margin-left: auto;
    margin-right: auto;
`

const ImagePost = styled.img`
    width: 100%;
    height: 100;
    object-fit: cover;
`
const BlockOptions = styled.div`
    width: 100%;
    height: 80px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-top: 2px;
    display: flex;
`

const IconLikeOn = styled.div.attrs({
    id: 'iconLikeOn',
})`
    margin-left: 40px;
    color: transparent;
    font-size: 36px;
`
const ButtonLike = styled.button.attrs({
    className: 'likeButton',
})`
    margin-top: 16px;
    margin-left: -41px;
    color: ${colors.tertiary};
    font-size: 36px;
    background: transparent;
    border: none;
`

const InputLike = styled.input.attrs({
    type: 'number',
    id: 'likeInput',
    defaultValue: '0',
})`
    margin-left: 20px;
    margin-top: 6px;
    color: ${colors.tertiary};
    font-size: 22px;
    background: transparent;
    border: none;
    pointer-events: none;
`

const EndPosts = styled.div.attrs({
    id: 'endPosts',
})`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    font-size: 30px;
    text-align: center;
    line-height: 2em;
    margin-top: 20px;
    margin-bottom: auto;
    color: ${colors.secondary};
`

let valuePicturePost
let likeUser = Number()
let arrayIdPost = []

function Actuality() {
    const authContext = useContext(AuthContext)
    const urlGet ='http://localhost:4200/api/ficheUser/post/' + authContext.userId
    const urlGetInfosUser ='http://localhost:4200/api/ficheUser/' + authContext.userId
    const urlGetInfoAllsUser ='http://localhost:4200/api/ficheUser/'
    const [dataResultPosts, setDataResultPosts] = useState([])
    const [dataResult, setDataResult] = useState({ infos: {} })
    const [dataResultUsers, setDataResultUsers] = useState({ infos: {} })
    const [picturePost, setPicturePost] = useState(false)
    const [pictureData, setPictureData] = useState(false)
    const [displayImg, setdisplayImg] = useState(false)
    const [filePost, setFilePost] = useState({ file: null })
    const [likePost, setLikePost] = useState(false)
    const [idPosts, setIdPosts] = useState({ id: {} })
    const [click, setClick] = useState(false)
    let refPost = useRef()
    const { togglePostModal } = useContext(PostContext)

    useEffect(() => {
        fetch(urlGet, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authContext.token}`,
            },
        })
            .then((resp) => resp.json())
            .then((data) => setDataResultPosts([...data]))
    }, [])

    useEffect(() => {
        fetch(urlGetInfosUser, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authContext.token}`,
            },
        })
            .then((resp) => resp.json())
            .then((data) => setDataResult({ infos: data }))
    }, [])

    useEffect(() => {
        fetch(urlGetInfoAllsUser, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authContext.token}`,
            },
        })
            .then((resp) => resp.json())
            .then((data) => setDataResultUsers([...data]))
    }, [])
    
    const pictureUser = dataResult.infos.imageUrlProfilePicture
    useEffect(() => {
        if (dataResultPosts.imageUrlPostPicture !== ' ') {
            setPicturePost(true)
        }
    }, [picturePost])

    // useEffect(() => {
    //     if(dataResultUsers._id === dataResultPosts.userId) {
    //     }
    // }, [])
    
    setInterval(() => {
        window.addEventListener('load', () => {
            const allPosts = document.querySelectorAll('allPosts')
            const endPosts = document.querySelector('#endPosts')

            if (allPosts === null) {
                endPosts.innerHTML =
                    'Malheur ! Aucun post ! </br> Et si vous lanciez la tendance...'
            } else {
                endPosts.innerHTML =
                    'Diantre ! Déjà la fin... </br> Et si vous relanciez le mouvement ?'
            }
        })
    }, 2000)

    const likeSystem = async (e) => {
        

    //     let inputLike = document.querySelector('#likeInput')
    //     inputLike.value = parseInt(inputLike.value) + 1
    //     let iconLikeOn = document.querySelector('#iconLikeOn')
    //     iconLikeOn.classList.add('iconLikeOn')
    //     if (likePost === false) {
    //         likeUser = 1
    //         setLikePost(true)
    //     }
    //     if (likePost === true) {
    //         likeUser = 0
    //         setLikePost(false)
    //     }

    //     // let idLike = refPost.current.id

    //     try {
    //         const response = await fetch(
    //             'http://localhost:4200/api/ficheUser/post/',
    //             {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     Authorization: `Bearer ${authContext.token}`,
    //                 },
    //                 body: JSON.stringify({
    //                     likes: likeUser,
    //                     usersLiked: dataResult.infos.firstname,
    //                 }),
    //             }
    //         )
    //         const dataResponse = await response.json()
    //         if (response.ok) {
    //             setDataResult(dataResponse)
    //         }
    //     } catch (err) {
    //         console.log(err)
    //     }
     }

    // let refs = useRef([React.createRef()])

    // refs = dataResultPosts.map((el, i) => refs.push(dataResultPosts[i]))

    // useEffect(() => {
    //     for (let i = 0; i < dataResultPosts.length; i++) {
    //         refs.push(dataResultPosts[i]._id)
    //         console.log(dataResultPosts[i])
    //     }
    // }, [])
    // console.log(refs)
//////////////////////////////////////////////////////////////////////////////////Ici que je ne parviens pas à récupérer l'id/////////////////////////////////////////////////////////////////
    let displayPosts = dataResultPosts.map((post, i) => (
        <AllPostsAndModals data-key={post._id} key={post._id} ref={refPost}>
            <BlockAuthor>
                <DivAuthor>
                    <PictureUserPost>
                        <Image
                            src={pictureUser || ' '}
                            alt="photo profil utilisateur"
                        ></Image>
                    </PictureUserPost>
                    <NameAuthor key={post._id}>
                        {post.firstname} {post.lastname}
                    </NameAuthor>
                    <DivIconOption>
                        <BlockIconOption>
                            <p style={{ marginTop: '2px', marginRight: '2px' }}>
                                <FontAwesomeIcon
                                    icon={faEllipsis}
                                    fontSize="36px"
                                />
                            </p>
                        </BlockIconOption>
                    </DivIconOption>
                </DivAuthor>
            </BlockAuthor>
            <BlockContaintPost>
                <ParagraphContaintPost>
                    {post.postContent}
                </ParagraphContaintPost>
            </BlockContaintPost>
            <Separator />
            {picturePost ? (
                <BlockImagePost>
                    <ImagePost
                        src={post.imageUrlPostPicture || ' '}
                        alt="photo profil utilisateur"
                    ></ImagePost>
                </BlockImagePost>
            ) : null}
            {picturePost ? <Separator /> : null}
            <BlockOptions>
                <p>{post._id}</p>
                <IconLikeOn>
                    <FontAwesomeIcon icon={fasThumbsUp} />
                    <ButtonLike onClick={likeSystem}>
                        <FontAwesomeIcon icon={farThumbsUp} />
                    </ButtonLike>
                </IconLikeOn>
                <InputLike></InputLike>
            </BlockOptions>
        </AllPostsAndModals>
    ))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        if (dataResult.infos.imageUrlProfilePicture !== " ") {
            setPictureData(true)
        }
    }, [])
    
    const clickInput = () => {
        document.querySelector('#picturePost').click()
    }

    const pictureLandscape = (e) => {
        let fileUpload = e.target.files[0]
        setFilePost({ file: fileUpload })
        setdisplayImg(true)
    }
    valuePicturePost = filePost

    useEffect(() => {
        if (valuePicturePost.file !== null) {
            document.querySelector('#inputClick').click()
        }
    }, [filePost])

    return (
        <>
            <ContenairMenuModals>
                <Post>
                    <DivInput>
                        <PictureUserPostWrite>
                            {pictureData ? (
                                <Image
                                    src={
                                        dataResult.infos.imageUrlProfilePicture
                                    }
                                    alt="photo profil utilisateur"
                                ></Image>
                            ) : null}
                        </PictureUserPostWrite>
                        <InputPost onClick={() => togglePostModal('postModal')}>
                            <ParagraphPost>
                                Ecrivez quelque chose...
                            </ParagraphPost>
                        </InputPost>
                    </DivInput>
                    <Separator />
                    <DivIconPicture>
                        <BlockOptionPicture onClick={clickInput}>
                            <ParagraphIcon>
                                <FontAwesomeIcon
                                    icon={faPhotoFilm}
                                    fontSize="30px"
                                />
                                <ParagraphNameIcon>Image</ParagraphNameIcon>
                                <InputPicture
                                    onChange={pictureLandscape}
                                ></InputPicture>
                            </ParagraphIcon>
                        </BlockOptionPicture>
                    </DivIconPicture>
                </Post>
                <ContenairAllPosts>{displayPosts}</ContenairAllPosts>
                <EndPosts></EndPosts>
            </ContenairMenuModals>
            <PostModal
                displayImg={displayImg}
                filePost={filePost}
                pictureLandscape={pictureLandscape}
            />
        </>
    )
}

export default Actuality
