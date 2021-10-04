import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f2f0f5;   //#7F7979, #C1BDB3, #5F5B6B
        --black: #303030;
        --yellow: #fbb034;
        --green: #33cc95;
        --red: #e52e4d;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px){
            font-size: 80%;
        }
        @media (max-width: 720px){
            font-size: 45%;
        }
    }

    body{
        background-color: var(--background);
        -webkit-font-smoothing: antialiesed;
    }

    body, input, button{
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        @media (max-width: 1080px){
            font-size: 93.5%;
        }
        @media (max-width: 720px){
            font-size: 86.5%;
        }
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
        border: none;
    }
`