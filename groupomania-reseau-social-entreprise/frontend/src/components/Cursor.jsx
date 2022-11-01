import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import colors from '../style/Colors'
import '../styles/Cursor.css'

const Cursor = styled.div.attrs({
    id: 'cursorOriginal',
    className: 'original',
})`
    z-index: 20;
    transition: all 100ms ease;
    transition-property: opacity, background-color, transform;
`

const CursorMouse = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [hidden, setHidden] = useState(false)
    const [click, setClick] = useState(false)
    const [elementHover, setElementHover] = useState(false)

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener('mousemove', cursorMove)
            document.addEventListener('mouseenter', cursorEnter)
            document.addEventListener('mouseleave', cursorLeave)
            document.addEventListener('mousedown', cursorDown)
            document.addEventListener('mouseup', cursorUp)
        }

        const removeEventListeners = () => {
            document.removeEventListener('mousemove', cursorMove)
            document.removeEventListener('mouseenter', cursorEnter)
            document.removeEventListener('mouseleave', cursorLeave)
            document.removeEventListener('mousedown', cursorDown)
            document.removeEventListener('mouseup', cursorUp)
        }

        const cursorDown = () => {
            setClick(true)
        }

        const cursorUp = () => {
            setClick(false)
        }

        const cursorMove = (e) => {
            setPosition({ x: e.clientX - 10, y: e.clientY - 10 })
        }

        const cursorLeave = () => {
            setHidden(true)
        }

        const cursorEnter = () => {
            setHidden(false)
        }

        const addElementsEvents = () => {
            document.querySelectorAll('.elementsEvents').forEach((el) => {
                el.addEventListener('mouseover', () => {
                    document
                        .querySelector('#cursorOriginal')
                        .classList.remove('original')
                    document
                        .querySelector('#cursorOriginal')
                        .classList.remove('clicked')
                    document
                        .querySelector('#cursorOriginal')
                        .classList.add('hovered')
                })
                el.addEventListener('mouseout', () => {
                    document
                        .querySelector('#cursorOriginal')
                        .classList.remove('hovered')
                    document
                        .querySelector('#cursorOriginal')
                        .classList.remove('clicked')
                    document
                        .querySelector('#cursorOriginal')
                        .classList.add('original')
                })
            })
        }

        const addElementsEventsSameColor = () => {
            document
                .querySelectorAll('.elementsEventsSameColor')
                .forEach((el) => {
                    el.addEventListener('mouseover', () => {
                        document
                            .querySelector('#cursorOriginal')
                            .classList.remove('original')
                        document
                            .querySelector('#cursorOriginal')
                            .classList.remove('clicked')
                        document
                            .querySelector('#cursorOriginal')
                            .classList.add('hoveredSameColor')
                    })
                    el.addEventListener('mouseout', () => {
                        document
                            .querySelector('#cursorOriginal')
                            .classList.remove('hoveredSameColor')
                        document
                            .querySelector('#cursorOriginal')
                            .classList.remove('clicked')
                        document
                            .querySelector('#cursorOriginal')
                            .classList.add('original')
                    })
                })
        }

        const addElementsClickedSameColor = () => {
            document
                .querySelectorAll('.elementsEventsSameColor')
                .forEach((el) => {
                    el.addEventListener('mousedown', () => {
                        document
                            .querySelector('#cursorOriginal')
                            .classList.remove('original')
                        document
                            .querySelector('#cursorOriginal')
                            .classList.remove('hovered')
                        document
                            .querySelector('#cursorOriginal')
                            .classList.add('clickedSameColor')
                    })
                    el.addEventListener('mouseup', () => {
                        document
                            .querySelector('#cursorOriginal')
                            .classList.remove('clickedSameColor')
                        document
                            .querySelector('#cursorOriginal')
                            .classList.remove('original')
                        document
                            .querySelector('#cursorOriginal')
                            .classList.add('hovered')
                    })
                })
        }

        const addElementsClicked = () => {
            document.querySelectorAll('.elementsEvents').forEach((el) => {
                el.addEventListener('mousedown', () => {
                    document
                        .querySelector('#cursorOriginal')
                        .classList.remove('original')
                    document
                        .querySelector('#cursorOriginal')
                        .classList.remove('hovered')
                    document
                        .querySelector('#cursorOriginal')
                        .classList.add('clicked')
                })
                el.addEventListener('mouseup', () => {
                    document
                        .querySelector('#cursorOriginal')
                        .classList.remove('clicked')
                    document
                        .querySelector('#cursorOriginal')
                        .classList.remove('original')
                    document
                        .querySelector('#cursorOriginal')
                        .classList.add('hovered')
                })
            })
        }
        addEventListeners()
        addElementsEvents()
        addElementsEventsSameColor()
        addElementsClicked()
        addElementsClickedSameColor()
        return () => removeEventListeners()
    }, [])

    return (
        <Cursor
            className={
                hidden ? 'hiddened' : ' ' /*+ 
      (click ? 'clicked': ' ')+
      (elementHover ? 'hovered': ' ')*/
            }
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    )
}

export default CursorMouse
