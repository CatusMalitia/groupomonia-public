import { createGlobalStyle } from 'styled-components'
import colors from './Colors'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.tertiary};
    margin: 0;
    padding: 0;
    cursor: none;
    font-family: 'Lato', sans-serif;
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px ${colors.secondary};
    }
    &::-webkit-scrollbar-thumb {
    background-color: ${colors.secondary};
    border-radius: 20px;
    }
    &::-webkit-scrollbar {
    width: 10px;
    margin-right: 10px;
    }
  }
  html {
    cursor: none;
  }
`

export default GlobalStyle
