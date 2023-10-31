import { createGlobalStyle } from "styled-components"; 

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${props => props.theme["gray-600"]};
        -webkit-font-smoothing: antialiased;
        color: ${props => props.theme["gray-300"]};
    }

    body, input, textarea, button {
    font: 400 1rem Inter, sans-serif;
    }
`

